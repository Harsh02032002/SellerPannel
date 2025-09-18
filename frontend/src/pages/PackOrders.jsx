import React from "react";

const PackOrders = () => {
  const orders = [
    {
      id: 301,
      product: "Washing Machine",
      customer: "Neha Gupta",
      address: "Jaipur",
      logistic: "Delhivery",
      date: "2025-09-13",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Banner */}
        <div style={styles.banner}>
          <h2 style={styles.bannerTitle}>📦 Pack Orders</h2>
          <p style={styles.bannerSubtitle}>
            Review and confirm items before packing
          </p>
        </div>

        {/* Search + Export */}
        <div style={styles.topBar}>
          <input
            type="text"
            placeholder="🔍 Search orders..."
            style={styles.search}
          />
          <button style={styles.primaryBtn}>⬇ Export CSV</button>
        </div>

        {/* Orders Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Order ID</th>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Customer</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Logistic</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={styles.row}>
                  <td style={styles.td}>{order.id}</td>
                  <td style={styles.td}>{order.product}</td>
                  <td style={styles.td}>{order.customer}</td>
                  <td style={styles.td}>{order.address}</td>
                  <td style={styles.td}>{order.logistic}</td>
                  <td style={styles.td}>{order.date}</td>
                  <td style={styles.td}>
                    <button style={styles.primaryBtn}>✅ Confirm Pack</button>
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
    background: "#16A34A", // same green as NewOrders
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

export default PackOrders;
