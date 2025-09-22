import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function ProfileIcon() {
  const [open, setOpen] = useState(false);
  const { logout, hasPremium } = useUser();

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: 40,
          height: 40,
          background: "linear-gradient(135deg,#00D4FF,#7f5af0)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          border: "2px solid #ffd700",
        }}
      >
        <span role="img" aria-label="profile" style={{ fontSize: "1.7rem" }}>
          👤
        </span>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 50,
            background: "#fff",
            borderRadius: 10,
            padding: "1rem",
            boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
            color: "#232946",
            minWidth: 180,
            zIndex: 99,
          }}
        >
          <p style={{ fontWeight: "700", margin: 0 }}>User Name</p>
          <p>
            Plan: <b style={{ color: "#7f5af0" }}>{hasPremium ? "Premium" : "Free"}</b>
          </p>
          {hasPremium && (
            <p style={{ color: "#ffd700", fontWeight: 700 }}>PREMIUM</p>
          )}
          <button
            style={{
              width: "100%",
              marginTop: 8,
              background: "#ffd700",
              border: "none",
              borderRadius: 8,
              fontWeight: "700",
              color: "#232946",
              padding: "8px",
            }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}