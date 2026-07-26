export function ProctorPanel({ message }) {
  return (
    <div className="panel">
      <div className="panel-header">PROCTOR MESSAGE</div>
      <div style={{ padding: "0.9rem 1rem", fontSize: "0.85rem", color: "#495057" }}>
        {message}
      </div>
    </div>
  );
}

export function CreditPanel({ status }) {
  return (
    <div className="panel">
      <div className="panel-header">CGPA and CREDIT Status</div>
      <div className="credit-row">
        <span>Total Credits Required :</span>
        <span className="value">{status.totalCreditsRequired}</span>
      </div>
      <div className="credit-row">
        <span>Earned Credits :</span>
        <span className="value">{status.earnedCredits.toFixed(1)}</span>
      </div>
      <div className="credit-row highlight">
        <span>Current CGPA :</span>
        <span className="value">{status.currentCGPA.toFixed(2)}</span>
      </div>
    </div>
  );
}

export function SpotlightPanel({ items }) {
  return (
    <div className="panel">
      <div className="panel-header">SPOT-LIGHT</div>
      {items.map((item) => (
        <div key={item.id}>
          <span className="spotlight-tag">
            {item.tag} <span className="spotlight-count">{item.count}</span>
          </span>
          <div className="spotlight-item">⚡ {item.message}</div>
        </div>
      ))}
    </div>
  );
}
