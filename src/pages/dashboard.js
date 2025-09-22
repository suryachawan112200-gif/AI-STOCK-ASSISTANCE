import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UploadBox from "../components/UploadBox";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { hasPremium } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Example function to fetch user data from backend API
  // Replace URL with your real backend endpoint
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const res = await fetch("https://your-backend-url.com/api/user/profile", {
          credentials: "include", // if cookie based auth
          // Add headers or tokens here as needed
        });
        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();
        setUserData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Loading Dashboard...
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", marginTop: 40, color: "red" }}>
        {error}
      </div>
    );

  return (
    <div style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: 800,
          margin: "3rem auto",
          padding: "2rem",
          fontFamily: "'Montserrat', sans-serif",
          color: "#232946",
        }}
      >
        <h2 style={{ fontWeight: "900", marginBottom: 30 }}>
          Dashboard Overview
        </h2>

        <section
          style={{
            background: "#fff",
            padding: "1.8rem",
            borderRadius: "16px",
            boxShadow: "0 3px 15px #00000011",
            marginBottom: 30,
          }}
        >
          <h3>User Info:</h3>
          <p>Name: {userData?.name || "User"}</p>
          <p>Email: {userData?.email || "email@example.com"}</p>
          <p>
            Plan:{" "}
            <b style={{ color: hasPremium ? "#ffd700" : "#7f5af0" }}>
              {hasPremium ? "Premium" : "Standard"}
            </b>
          </p>
          <p>Next Billing: {userData?.nextBillingDate || "N/A"}</p>
        </section>

        <section>
          <h3>Upload Position Screenshot for Analysis</h3>
          <UploadBox />
        </section>
      </main>
      <Footer />
    </div>
  );
}