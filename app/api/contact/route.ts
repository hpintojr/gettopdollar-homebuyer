import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, email, phone, address, message, 
      agreeTransactional, agreeMarketing, agreeTermsPrivacy 
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      // Added Jake to the recipient list
      to: "hpintojr@gmail.com, jake@elevatedhomebuyer.com",
      subject: `NEW LEAD: ${address}`,
      text: `
        NEW LEAD SUBMISSION
        -------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Message: ${message || "No message provided"}

        LEGAL AGREEMENTS & DISCLOSURES
        ------------------------------
        Transactional Consent: ${agreeTransactional ? "AGREED" : "NOT AGREED"}
        Marketing Consent: ${agreeMarketing ? "AGREED" : "NOT AGREED"}
        Terms & Privacy Agreement: ${agreeTermsPrivacy ? "AGREED" : "NOT AGREED"}
        
        Timestamp: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
