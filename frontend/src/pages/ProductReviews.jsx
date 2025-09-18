import React from "react";

const ProductReviews = ({ reviews }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
        width: "100%",
        overflowX: "auto",
        margin: "100px auto",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#065F46",
          marginBottom: "15px",
        }}
      >
        Product Reviews
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#F3F4F6", textAlign: "left" }}>
          <tr>
            {["SL", "Reviewer", "Rating", "Comment", "Date"].map((head) => (
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
            ))}
          </tr>
        </thead>
        <tbody>
          {reviews && reviews.length > 0 ? (
            reviews.map((r, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "10px" }}>{index + 1}</td>
                <td style={{ padding: "10px" }}>{r.user}</td>
                <td style={{ padding: "10px" }}>{r.rating}★</td>
                <td style={{ padding: "10px" }}>{r.comment}</td>
                <td style={{ padding: "10px" }}>{r.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                style={{
                  padding: "10px",
                  textAlign: "center",
                  color: "#6B7280",
                }}
              >
                No reviews found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductReviews;
