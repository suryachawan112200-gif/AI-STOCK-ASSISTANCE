export default function Footer() {
  // You can add backend API integration here later if needed,
  // For example, to fetch latest copyright year or
  // to log user interactions or feedback.

  return (
    <footer
      style={{
        marginTop: 40,
        padding: "1.5rem 2rem",
        textAlign: "center",
        background: "#232946",
        color: "#c90e0eff",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <p style={{ marginBottom: 12 }}>©️ 2025 AI Stock Advisor — All rights reserved.</p>
      <div>
        <a href="/policy" style={{ color: "#ffd700", margin: "0 1.2rem" }}>
          Privacy Policy
        </a>
        <a href="/about" style={{ color: "#ffd700", margin: "0 1.2rem" }}>
          About
        </a>
      </div>
    </footer>
  );
}