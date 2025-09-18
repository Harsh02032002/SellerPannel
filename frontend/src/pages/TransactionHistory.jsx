const TransactionHistory = ({ transactions = [] }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        padding: "20px",
        overflowX: "auto",
        margin: "100px auto",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#065F46",
          marginBottom: "15px",
        }}
      >
        Transaction History
      </h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#F3F4F6", textAlign: "left" }}>
          <tr>
            {["SL", "Date", "Type", "Amount", "Mode", "Order ID", "Status"].map(
              (head) => (
                <th
                  key={head}
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    color: "#374151",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  {head}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
              <td style={{ padding: "10px" }}>{index + 1}</td>
              <td style={{ padding: "10px" }}>{t.date}</td>
              <td style={{ padding: "10px" }}>{t.type}</td>
              <td style={{ padding: "10px" }}>₹{t.amount}</td>
              <td style={{ padding: "10px" }}>{t.mode}</td>
              <td style={{ padding: "10px" }}>{t.orderId}</td>
              <td style={{ padding: "10px" }}>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
