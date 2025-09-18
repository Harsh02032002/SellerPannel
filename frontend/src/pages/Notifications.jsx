import React from "react";

const Notification = () => {
  const notifications = [
    "Order #101 has been shipped",
    "New message from customer Riya",
    "Wallet credited with ₹5000",
    "Order #102 has been delivered",
    "New review received for Product #55",
  ];

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Notifications</h2>
      <div style={styles.list}>
        {notifications.map((note, index) => (
          <div key={index} style={styles.item}>
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    background: "#f9f9fb",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1E293B",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    padding: "12px 16px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    fontSize: "15px",
    color: "#374151",
  },
};

export default Notification;
