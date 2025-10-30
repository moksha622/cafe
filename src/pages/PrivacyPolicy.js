import React from "react";
import "./PolicyPages.css";

function PrivacyPolicy() {
  return (
    <section className="policy-page">
      {/* Top Banner */}
      <div
        className="policy-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/privacy.jpg)`,
        }}
      >
        <div className="policy-overlay"></div>
        <h1>Privacy Policy</h1>
      </div>

      {/* Main Content */}
      <div className="policy-content">
        <h2>Your Privacy Matters to Us</h2>
        <p>
          At <strong>Jill’s Café</strong>, we value your trust and respect your privacy.
          This policy explains how we collect, use, and protect your personal
          information when you visit our website or café.
        </p>

        <div className="divider"></div>

        <h3>Information We Collect</h3>
        <ul>
          <li>Personal details like name, email, and contact number.</li>
          <li>Payment and transaction details for online orders.</li>
          <li>Cookies to improve your browsing experience.</li>
        </ul>

        <h3>How We Use Your Data</h3>
        <p>
          We use your information to process orders, personalize experiences, and
          communicate updates or offers. We never sell your information to
          third parties.
        </p>

        <h3>Data Security</h3>
        <p>
          Your personal data is stored securely and accessible only by authorized
          personnel. We continually update our systems to ensure the highest
          level of protection.
        </p>

        <div className="divider"></div>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, feel free to
          contact us at{" "}
          <a href="mailto:info@jillscafe.com" className="policy-link">
            info@jillscafe.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
