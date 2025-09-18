import React, { useState } from "react";
import { CreditCard, Plus } from "lucide-react";

const WalletBalance = ({ balance, lastTransaction }) => {
  const [showRecharge, setShowRecharge] = useState(false);
  const [amount, setAmount] = useState("");

  const handleRecharge = () => {
    if (!amount) return alert("Please enter amount");
    alert(`Wallet recharged with ₹${amount}`);
    setAmount("");
    setShowRecharge(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "100px auto",
      }}
    >
      {/* Wallet Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
          borderRadius: "20px",
          padding: "30px 20px",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            top: "-40px",
            right: "-40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            bottom: "-30px",
            left: "-30px",
          }}
        />

        {/* Header with Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CreditCard size={28} strokeWidth={2} />
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>
            Wallet Balance
          </h1>
        </div>

        {/* Balance */}
        <p style={{ fontSize: "32px", fontWeight: "800", lineHeight: "1.2" }}>
          ₹{balance}
        </p>

        {/* Last Transaction */}
        {lastTransaction && (
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>
            Last Transaction: {lastTransaction.type} ₹{lastTransaction.amount}{" "}
            on {lastTransaction.date}
          </p>
        )}

        {/* Recharge Button */}
        <button
          onClick={() => setShowRecharge(true)}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#fff",
            color: "#10B981",
            fontWeight: 600,
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Plus size={16} /> Recharge Wallet
        </button>
      </div>

      {/* Recharge Modal */}
      {showRecharge && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              width: "320px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#065F46" }}>
              Recharge Wallet
            </h2>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #D1FAE5",
                fontSize: "14px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <button
                onClick={() => setShowRecharge(false)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #10B981",
                  background: "#fff",
                  color: "#10B981",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleRecharge}
                style={{
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#10B981",
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Recharge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletBalance;
