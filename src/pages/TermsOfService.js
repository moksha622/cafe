import React from "react";
import "./PolicyPages.css";

function TermsOfService() {
  return (
    <section className="policy-page">
      {/* Banner Section */}
      <div
        className="policy-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/terms.jpg)`,
        }}
      >
        <div className="policy-overlay"></div>
        <h1>Terms of Service</h1>
      </div>

      {/* Content Section */}
      <div className="policy-content">
        <h2>Welcome to Jill’s Café</h2>
        <p>
          By using our website or services, you agree to the following terms and
          conditions. Please read them carefully before making purchases or
          bookings.
        </p>

        <div className="divider"></div>

        <h3>Use of Services</h3>
        <p>
          Our website is designed for personal and non-commercial use only. You
          agree not to misuse our platform for illegal purposes. We aim to
          provide an enjoyable experience for all our customers, both online and
          in-store.
        </p>

        <div className="divider"></div>

        <h3>Orders & Payments</h3>
        <p>
          Once an order is placed, payment must be completed through our secure
          gateway. Prices are subject to change without notice. We ensure all
          transactions are processed safely and transparently.
        </p>

        <div className="divider"></div>

        <h3>Changes to Terms</h3>
        <p>
          Jill’s Café reserves the right to modify these terms at any time.
          Updates will be reflected on this page, and we encourage you to review
          them periodically to stay informed.
        </p>

        <div className="divider"></div>

        <h3>Contact Us</h3>
        <p>
          For any questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:support@jillscafe.com" className="policy-link">
            support@jillscafe.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default TermsOfService;


