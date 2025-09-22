import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const PLAN_INFO = {
  premium: {
    name: "Premium",
    price: "₹4999/month",
    upi: "yourupi@bank",
    features: [
      "1000 AI Analysts",
      "Unlimited queries",
      "Premium Support (24/7)",
      "Early access to new tools",
    ],
  },
  standard: {
    name: "Standard",
    price: "₹999/month",
    upi: "yourupi@bank",
    features: [
      "150 AI Analysts",
      "Unlimited queries",
      "Priority Support",
    ],
  },
};

export default function Payment() {
  const router = useRouter();
  const plan = router.query.plan || "premium";
  const json = PLAN_INFO[plan] || PLAN_INFO.premium;

  const [paymentProof, setPaymentProof] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Add your backend API endpoint here
  const paymentProofUploadUrl = "https://your-backend-url.com/api/payment/upload";

  const handleFileChange = (e) => {
    setPaymentProof(e.target.files[0]);
    setUploadStatus("");
  };

  const uploadPaymentProof = async () => {
    if (!paymentProof) {
      alert("Please upload your payment screenshot or proof");
      return;
    }
    const formData = new FormData();
    formData.append("file", paymentProof);
    formData.append("plan", plan);

    try {
      setUploadStatus("Uploading...");
      const res = await fetch(paymentProofUploadUrl, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      setUploadStatus("Upload successful! Await confirmation.");
      // Optionally, you can redirect or update UI
    } catch (err) {
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: 420,
          margin: "4rem auto",
          padding: "2.5rem",
          background: "white",
          borderRadius: 20,
          boxShadow: "0 15px 25px #7f5af03b",
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "center",
          color: "#232946",
        }}
      >
        <h2 style={{ color: "#7f5af0", fontWeight: 900, marginBottom: 26 }}>
          Payment for {json.name} Membership
        </h2>
        <p style={{ fontWeight: 700, fontSize: 22 }}>{json.price}</p>
        <ul style={{ textAlign: "left", margin: "12px auto", maxWidth: 320, fontSize: 16 }}>
          {json.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div
          style={{
            background: "#f7f9fb",
            borderRadius: 12,
            padding: 24,
            margin: "1.8rem 0",
          }}
        >
          <img src="/upi-qr.png" alt="UPI QR Code" style={{ maxWidth: "60%" }} />
          <br />
          <b style={{ color: "#ffd700", fontSize: "1.2rem" }}>UPI: {json.upi}</b>
        </div>
        <p style={{ fontWeight: 500 }}>
          Please scan the QR code or send payment to the above UPI ID for the selected plan.
          <br />
          After payment, upload payment screenshot or proof below for confirmation.
        </p>
        <input
          type="file"
          accept="image/*"
          style={{ marginTop: 18, padding: 10, borderRadius: 8, border: "1px solid #ddd", width: "100%" }}
          onChange={handleFileChange}
        />
        <button
          onClick={uploadPaymentProof}
          style={{
            marginTop: 18,
            padding: "12px 24px",
            fontSize: 16,
            fontWeight: 700,
            background: "linear-gradient(90deg, #7f5af0, #00D4FF)",
            border: "none",
            borderRadius: 12,
            color: "white",
            cursor: "pointer",
          }}
        >
          Upload Payment Proof
        </button>
        {uploadStatus && <p style={{ marginTop: 12 }}>{uploadStatus}</p>}
      </main>
      <Footer />
    </div>
  );
}