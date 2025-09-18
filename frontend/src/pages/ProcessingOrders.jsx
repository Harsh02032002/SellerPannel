import React from "react";
import { RefreshCw, User } from "lucide-react";

const ProcessingOrders = () => {
  const orders = [
    {
      id: 301,
      product: "Gaming Mouse",
      image: "https://via.placeholder.com/50",
      category: "Electronics",
      subcategory: "Accessories",
      username: "David",
      total: "₹2,200",
    },
    {
      id: 302,
      product: "Backpack",
      image: "https://via.placeholder.com/50",
      category: "Fashion",
      subcategory: "Bags",
      username: "Emma",
      total: "₹1,500",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <RefreshCw size={24} color="#3B82F6" /> Processing Orders
      </h2>
      <div style={styles.tableContainer}>
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
            {orders.map((order, index) => (
              <tr
                key={order.id}
                style={styles.tr}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#93C5FD")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    index % 2 === 0 ? "#BFDBFE" : "#93C5FD")
                }
              >
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>
                  <img
                    src={order.image}
                    alt={order.product}
                    style={{
                      width: "50px",
                      height: "50px",
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
                    gap: "4px",
                  }}
                >
                  <User size={16} color="#1E3A8A" /> {order.username}
                </td>
                <td style={{ ...styles.td, fontWeight: 700, color: "#1E40AF" }}>
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: { margin:"100px auto", fontFamily: "Arial, sans-serif" },
  heading: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  tableContainer: { overflowX: "auto" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "700px",
    border: "2px solid #94A3B8",
  },
  th: {
    padding: "12px",
    border: "2px solid #94A3B8",
    textAlign: "center",
    backgroundColor: "#3B82F6",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
  },
  tr: {
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#BFDBFE",
    transition: "all 0.3s",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px 12px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "15px",
  },
};

export default ProcessingOrders;
