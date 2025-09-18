import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      id: 201,
      customer: "Sakshi Verma",
      rating: "⭐⭐⭐⭐",
      comment: "Great service, fast delivery!",
      date: "2025-09-14",
    },
    {
      id: 202,
      customer: "Rohit Kumar",
      rating: "⭐⭐⭐",
      comment: "Product quality could be better.",
      date: "2025-09-15",
    },
    {
      id: 203,
      customer: "Neha Singh",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Loved the experience, highly recommend!",
      date: "2025-09-16",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Banner */}
        <div style={styles.banner}>
          <h2 style={styles.bannerTitle}>⭐ Customer Feedback</h2>
          <p style={styles.bannerSubtitle}>
            See what customers think about your services
          </p>
        </div>

        {/* Search + Export */}
        <div style={styles.topBar}>
          <input
            type="text"
            placeholder="🔍 Search feedback..."
            style={styles.search}
          />
          <button style={styles.primaryBtn}>⬇ Export CSV</button>
        </div>

        {/* Feedback Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Customer</th>
                <th style={styles.th}>Rating</th>
                <th style={styles.th}>Comment</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((fb) => (
                <tr key={fb.id} style={styles.row}>
                  <td style={styles.td}>{fb.id}</td>
                  <td style={styles.td}>{fb.customer}</td>
                  <td style={styles.td}>{fb.rating}</td>
                  <td style={styles.td}>{fb.comment}</td>
                  <td style={styles.td}>{fb.date}</td>
                  <td style={styles.td}>
                    <button style={styles.primaryBtn}>📩 Respond</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    background: "#f9f9fb",
    minHeight: "100vh",
  },
  container: {
    width: "80%",
    maxWidth: "1000px",
  },
  banner: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    textAlign: "center",
  },
  bannerTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    color: "#DC2626",
  },
  bannerSubtitle: { marginTop: "5px", fontSize: "14px", color: "#555" },
  topBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  search: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  primaryBtn: {
    padding: "10px 15px",
    background: "#F59E0B",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
  tableWrapper: {
    overflowX: "auto",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    padding: "12px",
    background: "#f1f3f6",
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
    fontSize: "14px",
    textAlign: "center",
  },
  row: { transition: "background 0.2s", cursor: "pointer" },
};

export default Feedback;
