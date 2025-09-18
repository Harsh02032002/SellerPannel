import React from "react";
import { RotateCcw, User } from "lucide-react";

const RefundOrders = () => {
  const orders = [
    {
      id: 401,
      product: "Bluetooth Speaker",
      image: "https://via.placeholder.com/50",
      category: "Electronics",
      subcategory: "Audio",
      username: "Olivia",
      total: "₹2,800",
    },
    {
      id: 402,
      product: "T-shirt Classic",
      image: "https://via.placeholder.com/50",
      category: "Fashion",
      subcategory: "Shirt",
      username: "Liam",
      total: "₹700",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Banner */}
        <div style={styles.banner}>
          <h2 style={styles.bannerTitle}>
            <RotateCcw size={24} color="#EF4444" /> Returns / Refunds
          </h2>
          <p style={styles.bannerSubtitle}>
            Manage all returned or refunded orders efficiently
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
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Product Name</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Subcategory</th>
                <th style={styles.th}>Username</th>
                <th style={styles.th}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={styles.row}>
                  <td style={styles.td}>{order.id}</td>
                  <td style={styles.td}>
                    <img
                      src={order.image}
                      alt={order.product}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  </td>
                  <td style={{ ...styles.td, fontWeight: 600 }}>
                    {order.product}
                  </td>
                  <td style={styles.td}>{order.category}</td>
                  <td style={styles.td}>{order.subcategory}</td>
                  <td
                    style={{
                      ...styles.td,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                    }}
                  >
                    <User size={16} color="#B91C1C" /> {order.username}
                  </td>
                  <td
                    style={{ ...styles.td, fontWeight: 700, color: "#991B1B" }}
                  >
                    {order.total}
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
    margin: "100px auto",
  },
  container: { width: "80%", maxWidth: "1000px" },

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
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
    background: "#16A34A",
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

export default RefundOrders;
