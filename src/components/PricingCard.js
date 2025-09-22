export default function PricingCard({ plan, price, features, highlight, onClick }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16, boxShadow: highlight ?
      "0 0 15px #ffd700aa" : "0 5px 20px #23294618", minWidth: 280,
      padding: "1.8rem 2rem", margin: "0 15px", border: highlight ?
      "2px solid #ffd700" : "1px solid #eee", position: "relative"
    }}>
      {highlight && <div style={{
        position: "absolute", top: 18, right: 18,
        background: "#ffd700", color: "#7f5af0", fontWeight: "700", fontSize: "1rem",
        padding: "4px 12px", borderRadius: "7px"
      }}>VIP</div>}
      <h3 style={{ color: "#7f5af0", fontWeight: 800 }}>{plan}</h3>
      <p style={{ fontWeight: 700, fontSize: "1.5rem", color: "#232946", margin: "13px 0" }}>{price}</p>
      <ul style={{ color: "#232946", fontWeight: 500, paddingLeft: "1.1rem" }}>
        {features.map(item => <li key={item} style={{ margin: "8px 0" }}>{item}</li>)}
      </ul>
      <button onClick={onClick} style={{
        background: "linear-gradient(to right,#7f5af0,#00D4FF)", color: "white",
        fontWeight: 700, padding: "12px 25px", borderRadius: 12, border: "none",
        cursor: "pointer", marginTop: "14px", width: "100%"
      }}>Get Started</button>
    </div>
  );
}