// app/privacy-policy/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose lg:prose-lg text-brandText">
          <h1>Privacy Policy</h1>
          <p>
            Our Privacy Policy outlines the collection, use, and disclosure of
            personal information when you use our website. By accessing or using
            our website, you consent to the collection and use of your personal
            information in accordance with this policy.
          </p>

          <h2>What Information Do We Collect?</h2>
          <p>
            We collect your personal information when you subscribe to our
            newsletter, fill out a form, or submit property information.
            Additionally, we collect information about your computer, including
            your IP address, operating system, and browser type, to improve the
            browsing experience. This data is collected using Google Analytics ,
            which does not identify any individual.
          </p>
          <p>
            When you order or register on our site, we may ask you to provide
            your name, email address, mailing address, or phone number. However,
            you can visit our site anonymously. If Elevated Home Buyer Holdings,
            LLC is acquired by or merged with another company, we will notify you
            before transferring your information, which will become subject to a
            different privacy policy.
          </p>

          <h2>How Do We Use Your Information?</h2>
          <p>
            We may use your personal information for the following purposes:
          </p>
          <ul>
            <li>
              <strong>To process transactions:</strong> Your information will not
              be sold, exchanged, transferred, or given to any other company
              without your consent, other than for delivering the purchased
              product or service requested.
            </li>
            <li>
              <strong>To send periodic emails:</strong> We may use the email
              address you provide to send you information, respond to inquiries,
              and/or other requests or questions.
            </li>
          </ul>

          <h2>How Do We Protect Your Information?</h2>
          <p>
            We implement various security measures to maintain the safety of your
            personal information when you enter, submit, or access it.
          </p>

          <h2>Do We Disclose Any Information to Outside Parties?</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties, except for trusted third
            parties that assist us in operating our website,conducting our
            business, or servicing you. These parties must agree to keep your
            information confidential. We may release your information when
            necessary to comply with the law, enforce our site policies, or
            protect ours or others’ rights, property, or safety. However,
            non-personally identifiable visitor information may be provided to
            other parties for marketing, advertising, or other uses.
          </p>

          <h2>Third Party Links and Services</h2>
          <p>
            We may include or offer third party products or services on our
            website. These third-party sites have separate and independent
            privacy policies, and we have no responsibility or liability for
            their content and activities. We recommend that you read their
            privacy policies to understand how your personal information will be
            handled.
          </p>
          <p>
            Additionally, third-party providers we use will only collect, use,
            and disclose your information to the extent necessary to perform the
            services they provide to us. Payment gateways and other payment
            transaction processors have their own privacy policies for
            purchase-related transactions. We recommend that you read their
            policies to understand how they will handle your personal
            information.
          </p>

          <h2>Remarketing</h2>
          <p>
            We use third-party vendor remarketing tracking cookies, including
            Google Adwords, to show you ads across the internet, specifically on
            the Google Content Network (GCN). We respect your privacy and do not
            collect any identifiable information through Google’s or any other
            third-party remarketing system.
          </p>
          <p>
            We use third-party vendor remarketing tracking cookies, including
            Google Adwords, to show you ads across the internet, specifically on
            the Google Content Network (GCN). We respect your privacy and do not
            collect any identifiable information through Google’s or any other
            third-party remarketing system.
          </p>
          <p>
            We may use Google’s “remarketing” service to target our ads to you
            based on your prior use of the Site when you visit other sites in
            Google’s content network.
          </p>

          <h2>Google AdWords</h2>
          <p>
            We use the Google AdWords remarketing service to advertise on
            third-party websites, including Google, to previous visitors to our
            site. This may mean advertising to previous visitors who have not
            completed a task on our site, such as using the contact form to make
            an inquiry. Third-party vendors, including Google, use cookies to
            serve ads based on a visitor’s past visits to the Elevated Home Buyer
            Holdings, LLC Compliance with California Online Privacy Protection
            Act We respect your privacy and have taken necessary measures to
            comply with the California Online Privacy Protection Act. We will not
            disclose your personal information to third parties without your
            consent
          </p>

          <h2>Compliance with Children’s Online Privacy Protection Act</h2>
          <p>
            We comply with the regulations outlined in the Children’s Online
            Privacy Protection Act (COPPA) and do not collect any information
            from individuals under the age of 13. Our website, products, and
            services are intended for individuals who are at least 13 years of
            age or older.
          </p>

          <h2>Personal, Financial, and Property Information</h2>
          <p>
            As a real estate services firm, we may require certain information
            from you to assist you in your situation. This information may
            include your contact information, property details, and, in some
            cases, financial information required for us to analyze your property
            and situation. We will only use this information internally and will
not share it with external parties unless necessary to help resolve
            your real estate situation.
          </p>

          <h2>Online Privacy Policy</h2>
          <p>
            This online privacy policy pertains solely to the information
            collected through our website and not to any offline information
            collected.
          </p>

          <h2>Changes to Our Privacy Policy</h2>
          <p>
            In the event that we modify our privacy policy, we will post those
            changes on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding our privacy policy, please refer
            to the contact information on our website.
          </p>
          <p>
            By completing a form on our website, you give consent to Elevated
            Home Buyer Holdings, LLC to send SMS. SMS message frequency varies.
            Standard message and data rates may apply. For HELP, text (801)
            660-2281. Text STOP to unsubscribe.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}