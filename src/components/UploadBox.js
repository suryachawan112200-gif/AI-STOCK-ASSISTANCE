import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function UploadBox() {
  const { hasPremium, freeUploads, useFreeUpload } = useUser();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [popup, setPopup] = useState(false);

  // Replace with your real backend API URL
  const backendUrl = "https://your-backend-url.com/api/analyze";

  const handleAnalyze = async () => {
    if (!hasPremium && freeUploads >= 2) {
      setPopup(true);
      return;
    }
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    useFreeUpload();

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();
      // Example response: { action, probableRange, stoplossZone, notes }
      setResult(data);
    } catch (error) {
      alert("Error analyzing image: " + error.message);
    }
  };

  return (
    <div>
      <div
        style={{
          border: "2px dashed #7f5af0",
          borderRadius: 12,
          padding: 20,
          background: "#64b455ff",
          marginTop: 30,
          textAlign: "center",
        }}
      >
        {hasPremium && (
          <div style={{ color: "#eaca15ff", fontWeight: "bold" }}>
            PREMIUM MEMBER
          </div>
        )}
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          onClick={handleAnalyze}
          style={{
            background: "linear-gradient(90deg,#7f5af0,#00D4FF)",
            color: "#fff",
            border: "none",
            fontWeight: 700,
            padding: "10px 18px",
            borderRadius: 8,
            marginLeft: 10,
          }}
        >
          Get Analysis
        </button>
      </div>
      {result && (
        <div
          style={{
            background: "#fff",
            marginTop: 22,
            borderRadius: 10,
            boxShadow: "0 2px 12px #7f5af020",
            padding: 16,
            color: "#232946",
          }}
        >
          <h3 style={{ color: "#7f5af0", fontWeight: 900 }}>AI Insight</h3>
          <p>
            <b>Action:</b> {result.action}
          </p>
          <p>
            <b>Probable Range:</b> {result.probableRange}
          </p>
          <p>
            <b>Stoploss Zone:</b> {result.stoplossZone}
          </p>
          <small style={{ color: "gray" }}>
            * This is AI-generated info, not advice.
          </small>
        </div>
      )}
      {popup && (
        <div
          style={{
            background: "#fff",
            border: "2px solid #7f5af0",
            padding: 20,
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 99,
          }}
        >
          <h3>Upgrade to Premium for Unlimited Uploads!</h3>
          <button
            onClick={() => (window.location.href = "/subscribe")}
            style={{
              background: "#7f5af0",
              color: "white",
              padding: "10px 20px",
              borderRadius: 9,
            }}
          >
            Go Premium
          </button>
        </div>
      )}
    </div>
  );
}