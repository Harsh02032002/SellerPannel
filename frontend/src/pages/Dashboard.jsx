import React from "react";

const Dashboard = () => {
  const orderAnalytics = [
    { label: "Pending", value: 3, color: "#FACC15" }, // yellow-400
    { label: "Confirmed", value: 4, color: "#3B82F6" }, // blue-500
    { label: "Packaging", value: 1, color: "#A78BFA" }, // purple-400
    { label: "Out For Delivery", value: 2, color: "#F97316" }, // orange-500
    { label: "Delivered", value: 10, color: "#10B981" }, // green-500
    { label: "Canceled", value: 1, color: "#EF4444" }, // red-500
    { label: "Returned", value: 1, color: "#DB2777" }, // pink-600
    { label: "Failed To Delivery", value: 2, color: "#6B7280" }, // gray-500
  ];

  const vendorWallet = [
    {
      label: "Withdrawable Balance",
      value: "$10,023.50",
      color: "#10B981", // green-500
    },
    {
      label: "Pending Withdraw",
      value: "$500.00",
      color: "#FACC15", // yellow-400
    },
    {
      label: "Already Withdrawn",
      value: "$600.00",
      color: "#3B82F6", // blue-500
    },
    {
      label: "Total Tax Given",
      value: "$2,519.00",
      color: "#EF4444", // red-500
    },
    {
      label: "Total Commission Given",
      value: "$6,394.47",
      color: "#A78BFA", // purple-400
    },
    {
      label: "Total Delivery Charge Earned",
      value: "$822.00",
      color: "#DB2777", // pink-600
    },
    {
      label: "Collected Cash",
      value: "$25,756.80",
      color: "#6366F1", // indigo-500
    },
  ];

  const mostPopularProducts = [
    {
      name: "Leather Ladies Bag",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 2,
    },
    {
      name: "Vimly Women Blazer Suit",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      reviews: 3,
    },
    {
      name: "Ladies Bag",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
      reviews: 1,
    },
  ];

  const topSellingProducts = [
    {
      name: "Leather Ladies Bag",
      image: "https://via.placeholder.com/150",
      sold: 2,
    },
    {
      name: "Vimly Women Blazer Suit",
      image: "https://via.placeholder.com/150",
      sold: 1,
    },
    {
      name: "Ugly Love: A Novel",
      image: "https://via.placeholder.com/150",
      sold: 1,
    },
  ];

  const cardStyle = {
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    color: "#FFFFFF",
  };

  const sectionTitleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1E3A8A", // deep blue for headings
    marginBottom: "20px",
  };

  const subTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        padding: "25px",

        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        margin: "100px auto",
      }}
    >
      {/* Welcome Section */}
      <div style={{ marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1E3A8A",
            marginBottom: "10px",
          }}
        >
          Welcome, Shopzeo 👋
        </h2>
        <p style={{ color: "#4B5563", fontSize: "18px" }}>
          Monitor your business analytics and statistics in one place.
        </p>
      </div>
      {/* Order Analytics */}
      <section style={{ marginBottom: "50px" }}>
        <h3 style={sectionTitleStyle}>Order Analytics</h3>
        <div
          style={{
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {orderAnalytics.map((item, index) => {
              const cardBackgroundColors = [
                "#FDDCDC",
                "#D4F2E1",
                "#FFF1E8",
                "#FCD7D7",
                "#DDF4FF",
                "#F0E6FF",
                "#E9F9F0",
                "#FFF9E2",
              ];
              return (
                <div
                  key={index}
                  style={{
                    ...cardStyle,
                    background: cardBackgroundColors[index],
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      marginBottom: "12px",
                      fontWeight: 600,
                      color: "#1F2937",
                    }}
                  >
                    {item.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor Wallet */}
      <section style={{ marginBottom: "50px" }}>
        <h3 style={sectionTitleStyle}>Vendor Wallet</h3>
        <div
          style={{
            padding: "20px",
            borderRadius: "16px",
            // Light green gradient
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {vendorWallet.map((item, index) => {
              const cardBackgroundColors = [
                "#FDDCDC",
                "#D4F2E1",
                "#FFF1E8",
                "#FCD7D7",
                "#DDF4FF",
                "#F0E6FF",
                "#E9F9F0",
                "#FFF9E2",
              ];
              return (
                <div
                  key={index}
                  style={{
                    ...cardStyle,
                    background: cardBackgroundColors[index],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(0,0,0,0.05)";
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      marginBottom: "12px",
                      fontWeight: 600,
                      color: "#1F2937",
                    }}
                  >
                    {item.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Most Popular Products */}
      <section style={{ marginBottom: "50px" }}>
        <h3 style={sectionTitleStyle}>Most Popular Products</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {mostPopularProducts.map((item, index) => (
            <div
              key={index}
              style={{ ...cardStyle, background: "#FFFFFF", color: "#111827" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              />
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {item.name}
              </h4>
              <p style={{ fontSize: "15px", color: "#6B7280" }}>
                {item.rating} ⭐ ({item.reviews} Reviews)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Products */}
      <section>
        <h3 style={sectionTitleStyle}>Top Selling Products</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {topSellingProducts.map((item, index) => (
            <div
              key={index}
              style={{ ...cardStyle, background: "#FFFFFF", color: "#111827" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              />
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {item.name}
              </h4>
              <p style={{ fontSize: "15px", color: "#6B7280" }}>
                Sold: {item.sold}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
