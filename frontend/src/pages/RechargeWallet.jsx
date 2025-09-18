import React, { useState } from "react";

const RechargeWallet = ({ onRecharge }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && Number(amount) > 0) {
      onRecharge(Number(amount));
      setAmount("");
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        padding: "20px",
        margin: "100px auto",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#065F46",
          marginBottom: "15px",
        }}
      >
        Recharge Wallet
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #D1FAE5",
            flex: 1,
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
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
      </form>
    </div>
  );
};

export default RechargeWallet;
