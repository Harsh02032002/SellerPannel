import React from "react";

const POS = () => {
  const containerStyle = {
    display: "flex",
    padding: "30px",
    gap: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  };

  const sectionStyle = {
    border: "1px solid #ddd",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflowY: "auto",
    maxHeight: "90vh",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const productGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "15px",
  };

  const productCardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    transition: "transform 0.2s",
  };

  const productImageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  };

  const billingTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const billingTableCellStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
  };

  const billingSummaryStyle = {
    marginTop: "15px",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#333",
    lineHeight: "1.8",
  };

  const inputStyle = {
    padding: "8px",
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      {/* Product Section */}
      <div style={{ ...sectionStyle, flex: 2 }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
          Product Section
        </h3>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <select style={buttonStyle}>
            <option>All categories</option>
          </select>
          <input
            type="text"
            placeholder="Search by name or sku"
            style={{ flex: 1, padding: "8px", fontSize: "1rem" }}
          />
        </div>

        <div style={productGridStyle}>
          <div style={productCardStyle}>
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              style={productImageStyle}
            />
            <div style={{ fontWeight: "bold" }}>Norton Utilities Ultimate</div>
            <div style={{ color: "#555" }}>
              <strong>$40.00</strong>
            </div>
          </div>

          <div style={productCardStyle}>
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              style={productImageStyle}
            />
            <div style={{ fontWeight: "bold" }}>
              Office 2021 Professional Plus
            </div>
            <div style={{ color: "#555" }}>
              <strong>$150.00</strong>
            </div>
          </div>

          {/* Add more products as needed */}
        </div>
      </div>

      {/* Billing Section */}
      <div style={{ ...sectionStyle, flex: 1 }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
          Billing Section
        </h3>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#e91e63",
            color: "#fff",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          View All Hold Orders <span>(0)</span>
        </button>

        <div style={{ marginBottom: "15px" }}>
          <select style={{ ...inputStyle }}>
            <option>Walk-In-Customer</option>
          </select>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "green",
              color: "white",
              width: "100%",
              marginTop: "10px",
            }}
          >
            Add New Customer
          </button>
        </div>

        <select style={{ ...inputStyle, marginBottom: "15px" }}>
          <option>walk-in-customer-473</option>
        </select>

        <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#f44336",
              color: "#fff",
              flex: 1,
            }}
          >
            Clear Cart
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#2196f3",
              color: "#fff",
              flex: 1,
            }}
          >
            New Order
          </button>
        </div>

        <table style={billingTableStyle}>
          <thead>
            <tr>
              <th style={billingTableCellStyle}>Item</th>
              <th style={billingTableCellStyle}>Qty</th>
              <th style={billingTableCellStyle}>Price</th>
              <th style={billingTableCellStyle}>Delete</th>
            </tr>
          </thead>
          <tbody>{/* Dynamic items will go here */}</tbody>
        </table>

        <div style={billingSummaryStyle}>
          <div>Sub Total : $0.00</div>
          <div>Product Discount : $0.00</div>
          <div>Extra Discount : $0.00</div>
          <div>Coupon Discount : $0.00</div>
          <div>Tax : $0.00</div>
          <strong>Total : $0.00</strong>
        </div>

        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "500", fontSize: "1rem" }}>
            Paid By:
          </label>
          <input type="text" style={inputStyle} />
        </div>

        <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#ff4081",
              color: "#fff",
              flex: 1,
            }}
          >
            Cancel Order
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#2196f3",
              color: "#fff",
              flex: 1,
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default POS;
