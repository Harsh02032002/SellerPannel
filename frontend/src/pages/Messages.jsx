import React from "react";

const Messages = () => {
  const chats = [
    {
      id: 1,
      sender: "Aman Sharma",
      message: "Hey, is my order shipped?",
      date: "2025-09-15",
      status: "Unread",
    },
    {
      id: 2,
      sender: "Riya Mehta",
      message: "Can I change the delivery address?",
      date: "2025-09-16",
      status: "Replied",
    },
    {
      id: 3,
      sender: "Vikram Singh",
      message: "Do you have COD available?",
      date: "2025-09-17",
      status: "Pending",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Banner */}
        <div style={styles.banner}>
          <h2 style={styles.bannerTitle}>💬 Customer Messages</h2>
          <p style={styles.bannerSubtitle}>
            View and manage conversations with your customers
          </p>
        </div>

        {/* Search + Export */}
        <div style={styles.topBar}>
          <input
            type="text"
            placeholder="🔍 Search messages..."
            style={styles.search}
          />
          <button style={styles.primaryBtn}>⬇ Export CSV</button>
        </div>

        {/* Messages Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Sender</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Date</th>
                
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {chats.map((chat) => (
                <tr key={chat.id} style={styles.row}>
                  <td style={styles.td}>{chat.id}</td>
                  <td style={styles.td}>{chat.sender}</td>
                  <td style={styles.td}>{chat.message}</td>
                  <td style={styles.td}>{chat.date}</td>
                 
                  <td style={styles.td}>
                    <button style={styles.primaryBtn}>Reply</button>
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
    color: "#1E3AB0",
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
    background: "#2563EB",
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

export default Messages;
