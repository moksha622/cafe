// src/components/PaymentPage.js
import React from "react";
import "./PaymentPage.css";

function PaymentPage() {
  const paymentMethods = [
    { name: "PayPal", image: process.env.PUBLIC_URL + "/images/paypal.png", link: "https://www.paypal.com" },
    { name: "Apple Pay", image: process.env.PUBLIC_URL + "/images/applepay.png", link: "https://www.apple.com/apple-pay/" },
    { name: "Visa", image: process.env.PUBLIC_URL + "/images/visa.png", link: "https://www.visa.com" },
    { name: "MasterCard", image: process.env.PUBLIC_URL + "/images/mastercard.png", link: "https://www.mastercard.com" },
    { name: "Stripe", image: process.env.PUBLIC_URL + "/images/stripe.png", link: "https://stripe.com" },
  ];

  return (
    <div className="payment-page">
      <h2>Select Your Payment Method</h2>
      <div className="payment-row">
        {paymentMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={method.image} alt={method.name} className="payment-logo" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default PaymentPage;
