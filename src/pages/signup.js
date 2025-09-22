import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <div style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: 340,
          margin: "4rem auto",
          padding: "2rem",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 20px #23294620",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <h2 style={{ color: "#7f5af0", fontWeight: 900, marginBottom: 24 }}>
          Create an Account
        </h2>
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            marginBottom: 14,
            border: "1px solid #ddd",
            fontSize: 15,
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            marginBottom: 18,
            border: "1px solid #ddd",
            fontSize: 15,
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            marginBottom: 18,
            border: "1px solid #ddd",
            fontSize: 15,
          }}
        />
        <button
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #7f5af0, #00D4FF)",
            color: "#fff",
            fontWeight: 700,
            padding: 13,
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
        <p style={{ textAlign: "center", marginTop: 12, color: "#232946" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#7f5af0", fontWeight: 600 }}>
            Login
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}