import React, { useState } from "react";
import styles from "./donation.module.css";

const DonationForm = ({ type, extraText }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transactionId: "",
    amount: "",
    message: "",
  });

  const donationType = type || "Simple Donation";

  const donationAmounts = [101, 501, 1100, 2100, 3100, 5100, 11000];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend
    console.log(formData);
    alert(
      "Thank you for your donation! The temple will send your receipt via email or phone."
    );
  };

  return (
    <div className={styles.donationContainer}>
      <h2 className={styles.heading}>{donationType}</h2>
      <p className={styles.mahamantra}>
        Hare Krishna Hare Krishna Krishna Krishna Hare Hare
        <br />
        Hare Rama Hare Rama Rama Rama Hare Hare
      </p>
      {extraText ? (
        <p className={styles.extraText}>{extraText}</p>
      ) : (
        <p className={styles.extraText}>
          Support the temple and be part of a divine cause.
        </p>
      )}

      <p className={styles.note}>
        Scan the QR code below using GPay to make your donation. After
        completing the payment, fill in your details so the temple can send your
        receipt.
      </p>

      <div className={styles.qrCode}></div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          required
          onChange={handleChange}
        />
        <select name="amount" required onChange={handleChange}>
          <option value="">Select Amount</option>
          {donationAmounts.map((amt) => (
            <option key={amt} value={amt}>
              {amt}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
        {formData.amount === "other" && (
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            required
            onChange={handleChange}
          />
        )}
        <textarea
          name="message"
          placeholder="Message (optional)"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Donate Now</button>
      </form>

      <p className={styles.reminder}>
        * Please ensure to enter the correct Transaction ID. The temple will
        verify your donation and send the receipt.
      </p>
    </div>
  );
};

export default DonationForm;
