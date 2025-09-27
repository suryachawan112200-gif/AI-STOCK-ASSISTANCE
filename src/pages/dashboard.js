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

  // New state for trade input and result
  const [tradeInput, setTradeInput] = useState({
    coin: "",
    market: "",
    position_type: "",
    entry_price: "",
    quantity: "",
  });
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const res = await fetch("https://your-backend-url.com/api/user/profile", {
          credentials: "include",
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

  const handleInputChange = e => {
    const { name, value } = e.target;
    setTradeInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const analyzeTrade = async () => {
    setLoadingAnalysis(true);
    setAnalysisError("");
    setAnalysisResult(null);
    try {
      const payload = {
        ...tradeInput,
        entry_price: parseFloat(tradeInput.entry_price),
        quantity: parseFloat(tradeInput.quantity),
      };

      const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to get analysis");
      const data = await res.json();
      setAnalysisResult(data);
    } catch (e) {
      setAnalysisError(e.message);
    } finally {
      setLoadingAnalysis(false);
    }
  };

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

        <section
          style={{
            background: "#fff",
            padding: "1.8rem",
            borderRadius: "16px",
            boxShadow: "0 3px 15px #00000011",
            marginBottom: 30,
          }}
        >
          <h3>Trade Input (JSON-like)</h3>
          <div style={{ fontFamily: "monospace", background: "#eee", padding: "1rem", borderRadius: 8 }}>
            <label>
              coin:{" "}
              <input name="coin" value={tradeInput.coin} onChange={handleInputChange} />
            </label><br/>
            <label>
              market:{" "}
              <input name="market" value={tradeInput.market} onChange={handleInputChange} />
            </label><br/>
            <label>
              position_type:{" "}
              <input name="position_type" value={tradeInput.position_type} onChange={handleInputChange} />
            </label><br/>
            <label>
              entry_price:{" "}
              <input type="number" step="0.00001" name="entry_price" value={tradeInput.entry_price} onChange={handleInputChange} />
            </label><br/>
            <label>
              quantity:{" "}
              <input type="number" step="0.01" name="quantity" value={tradeInput.quantity} onChange={handleInputChange} />
            </label><br/>
            <button onClick={analyzeTrade} disabled={loadingAnalysis} style={{marginTop: 12, padding: '8px 16px'}}>
              {loadingAnalysis ? "Analyzing..." : "Analyze Trade"}
            </button>
          </div>
        </section>

        {analysisError && (
          <p style={{ color: "red", fontWeight: "bold" }}>{analysisError}</p>
        )}

        {analysisResult && (
          <section
            style={{
              background: "#fff",
              padding: "1.8rem",
              borderRadius: 12,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              boxShadow: "0 3px 15px #00000022",
              marginTop: 20,
            }}
          >
            <h3>Analysis Result:</h3>
            {JSON.stringify(analysisResult, null, 2)}
          </section>
        )}

        <section>
          <h3>Upload Position Screenshot for Analysis</h3>
          <UploadBox />
        </section>
      </main>
      <Footer />
    </div>
  );
}