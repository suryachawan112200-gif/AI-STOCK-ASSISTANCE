import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <div style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: 400,
          margin: "3.8rem auto",
          padding: "2rem",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 8px 22px #23294620",
          textAlign: "center",
          fontFamily: "'Montserrat', sans-serif",
          color: "#232946",
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            margin: "0 auto 22px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ffd700 70%, #7f5af0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 34,
          }}
        >
          👤
        </div>
        <h3 style={{ fontWeight: 900 }}>User Name</h3>
        <p>
          Email: <strong style={{ color: "#7f5af0" }}>email@example.com</strong>
        </p>
        <p>
          Current Plan: <strong>Premium</strong>
        </p>
        <p>Next Billing Date: 28 Oct 2025</p>
        <button
          style={{
            marginTop: 25,
            background: "#ffd700",
            border: "none",
            padding: "11px 36px",
            borderRadius: 14,
            fontWeight: "700",
            color: "#232946",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </main>
      <Footer />
    </div>
  );
}