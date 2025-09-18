import React, { useState } from "react";
import { ClipboardList } from "lucide-react";

const AllOrders = () => {
  const [orders] = useState([
    {
      id: 1,
      productImage: "https://via.placeholder.com/50",
      productName: "Product A",
      category: "Electronics",
      subcategory: "Mobile",
      username: "John Doe",
      totalPrice: "₹1200",
      status: "Pending",
    },
    {
      id: 2,
      productImage: "https://via.placeholder.com/50",
      productName: "Product B",
      category: "Fashion",
      subcategory: "Shirt",
      username: "Jane Smith",
      totalPrice: "₹800",
      status: "Completed",
    },
    {
      id: 3,
      productImage: "https://via.placeholder.com/50",
      productName: "Product C",
      category: "Home",
      subcategory: "Decor",
      username: "Alice",
      totalPrice: "₹500",
      status: "Processing",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return { backgroundColor: "#FBBF24", color: "#7C2D12" };
      case "Processing":
        return { backgroundColor: "#60A5FA", color: "#1E3A8A" };
      case "Completed":
        return { backgroundColor: "#4ADE80", color: "#166534" };
      case "Refunded":
        return { backgroundColor: "#F87171", color: "#991B1B" };
      default:
        return { backgroundColor: "#E5E7EB", color: "#374151" };
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Banner */}
        <div style={styles.banner}>
          <h2 style={styles.bannerTitle}>
            <ClipboardList size={24} /> All Orders
          </h2>
          <p style={styles.bannerSubtitle}>
            Track and manage all your orders efficiently
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
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Product Name</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Subcategory</th>
                <th style={styles.th}>Username</th>
                <th style={styles.th}>Total Price</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={styles.row}>
                  <td style={styles.td}>
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "6px",
                      }}
                    />
                  </td>
                  <td style={{ ...styles.td, fontWeight: "600" }}>
                    {order.productName}
                  </td>
                  <td style={styles.td}>{order.category}</td>
                  <td style={styles.td}>{order.subcategory}</td>
                  <td style={styles.td}>{order.username}</td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>
                    {order.totalPrice}
                  </td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        ...getStatusColor(order.status),
                      }}
                    >
                      {order.status}
                    </span>
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
  statusBadge: {
    padding: "6px 12px",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "14px",
    display: "inline-block",
  },
};

export default AllOrders;
