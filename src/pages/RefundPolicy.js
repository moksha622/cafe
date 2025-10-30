import React from "react";
import "./PolicyPages.css";

function RefundPolicy() {
  return (
    <section className="policy-page">
      {/* Banner Section */}
      <div
        className="policy-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/refund.jpeg)`,
        }}
      >
        <div className="policy-overlay"></div>
        <h1>Refund Policy</h1>
      </div>

      {/* Content Section */}
      <div className="policy-content">
        <h2>Your Satisfaction Is Our Priority</h2>
        <p>
          At Jill’s Café, we strive to ensure that every cup and every bite you
          enjoy meets our quality standards. However, we understand that there
          may be rare occasions where a refund is necessary.
        </p>

        <div className="divider"></div>

        <h3>Eligibility for Refunds</h3>
        <ul>
          <li>Refunds are available for incorrect, defective, or damaged orders.</li>
          <li>Requests must be submitted within <strong>48 hours</strong> of purchase.</li>
          <li>A valid receipt or proof of purchase is required for processing.</li>
        </ul>

        <div className="divider"></div>

        <h3>Non-Refundable Items</h3>
        <p>
          Please note that personalized, discounted, or promotional items cannot
          be refunded unless they are defective upon receipt. Gift cards and
          vouchers are also non-refundable.
        </p>

        <div className="divider"></div>

        <h3>Refund Process</h3>
        <p>
          Once approved, refunds will be processed to your original payment
          method within <strong>5–7 business days</strong>. You’ll receive an
          email notification confirming your refund.
        </p>

        <div className="divider"></div>

        <h3>Need Assistance?</h3>
        <p>
          If you have questions about your refund, please reach out to our
          support team at{" "}
          <a href="mailto:support@jillscafe.com" className="policy-link">
            support@jillscafe.com
          </a>{" "}
          or call us at <strong>+94 71 234 5678</strong>.  
          We’re always here to help and make your Jill’s Café experience
          delightful.
        </p>
      </div>
    </section>
  );
}

export default RefundPolicy;
