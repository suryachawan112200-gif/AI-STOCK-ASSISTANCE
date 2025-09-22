import React from "react";
import { useUser } from "../context/UserContext";
import ProfileIcon from "./profileIcon";

export default function Header() {
  const { isLoggedIn, login } = useUser();

  // Example hardcoded credentials for demo
  const handleLoginClick = async () => {
    // For real app, get email/password from inputs or UI
    const email = "user@example.com";
    const password = "password123";

    // Await login API call in context
    const success = await login(email, password);

    if (!success) {
      alert("Login failed, please try again");
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg,#7f5af0 40%,#232946 100%)",
        color: "#fff",
        padding: "1.2rem 2rem",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2 style={{ fontWeight: 700 }}>AI Stock Advisor</h2>
      {isLoggedIn ? (
        <ProfileIcon />
      ) : (
        <button
          style={{
            background: "#36e75fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            color: "#232946",
          }}
          onClick={handleLoginClick}
        >
          Sign In
        </button>
      )}
    </header>
  );
}