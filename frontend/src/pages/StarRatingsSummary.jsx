import React from "react";

const StarRatingsSummary = () => {
  // Dummy data
  const reviews = [
    { user: "Neha Gupta", rating: 5 },
    { user: "Rohit Sharma", rating: 4 },
    { user: "Anjali Mehta", rating: 3 },
    { user: "Siddharth Rao", rating: 5 },
    { user: "Kavita Singh", rating: 4 },
    { user: "Arjun Verma", rating: 2 },
    { user: "Pooja Mehra", rating: 5 },
  ];

  const totalReviews = reviews.length;

  // Calculate average rating
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  // Rating breakdown: 5★ to 1★
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return { star, count, percentage: (count / totalReviews) * 100 };
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        padding: "40px",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: "500px",
        margin: "100px auto",
          
      }}
    >
      {/* Average Rating */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 700, color: "#065F46" }}>
          {avgRating.toFixed(1)} ★
        </h1>
        <p style={{ fontSize: "18px", color: "#6B7280" }}>
          Based on {totalReviews} reviews
        </p>
      </div>

      {/* Bar Chart */}
      <div style={{ width: "100%" }}>
        {ratingBreakdown.map((rb) => (
          <div
            key={rb.star}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "18px",
            }}
          >
            <span style={{ width: "50px", fontSize: "16px", fontWeight: 600 }}>
              {rb.star}★
            </span>
            <div
              style={{
                flex: 1,
                background: "#E5E7EB",
                borderRadius: "8px",
                height: "20px",
                margin: "0 15px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${rb.percentage}%`,
                  background: "#FBBF24",
                  height: "100%",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>
            <span
              style={{ width: "40px", textAlign: "right", fontWeight: 600 }}
            >
              {rb.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRatingsSummary;
