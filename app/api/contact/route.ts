import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type Body = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // validate minimal
    if (!body?.email || !body?.name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1) Forward to Pipedream test endpoint
    const PIPEDREAM_URL = process.env.PIPEDREAM_URL;
    if (PIPEDREAM_URL) {
      try {
        await fetch(PIPEDREAM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...body, ts: new Date().toISOString() })
        });
      } catch (err) {
        // do not fail; just log if present
        console.error("Pipedream forward error", err);
      }
    }

    // 2) Send an email via SMTP (Mailjet)
    // Mailjet supports SMTP using API key and secret as username/password
    const MAIL_SMTP_USER = process.env.MAIL_SMTP_USER; // Mailjet API key
    const MAIL_SMTP_PASS = process.env.MAIL_SMTP_PASS; // Mailjet secret
    const MAIL_FROM = process.env.MAIL_FROM || "no-reply@elevatedhomebuyer.com";
    const MAIL_TO = process.env.MAIL_TO || "hpintojr@gmail.com";

    if (MAIL_SMTP_USER && MAIL_SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false,
        auth: {
          user: MAIL_SMTP_USER,
          pass: MAIL_SMTP_PASS
        }
      });

      const html = `
        <h3>New cash offer request</h3>
        <p><strong>Name</strong>: ${escapeHtml(body.name)}</p>
        <p><strong>Email</strong>: ${escapeHtml(body.email)}</p>
        <p><strong>Phone</strong>: ${escapeHtml(body.phone)}</p>
        <p><strong>Address</strong>: ${escapeHtml(body.address)}</p>
        <p><small>Received: ${new Date().toISOString()}</small></p>
      `;

      await transporter.sendMail({
        from: MAIL_FROM,
        to: MAIL_TO,
        subject: `New offer request from ${body.name}`,
        html
      });
    } else {
      console.warn("Mail SMTP not configured, skipping email send.");
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}

// minimal escape
function escapeHtml(input: string) {
  return String(input || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
