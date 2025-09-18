import React, { useState } from "react";

const Profile = () => {
  const [showSettings, setShowSettings] = useState(false);

  const user = {
    name: "abc Sharma",
    email: "abc@example.com",
    phone: "+91 9876543210",
    role: "Seller",
    location: "New Delhi, India",
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };

  const stats = [
    { label: "Orders", value: 120, color: "#2563EB" },
    { label: "Messages", value: 45, color: "#16A34A" },
    { label: "Feedbacks", value: 32, color: "#F59E0B" },
    { label: "Wallet", value: "₹10,500", color: "#DC2626" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Profile Card */}
        <div style={styles.profileCard}>
          <img src={user.avatar} alt="Profile" style={styles.avatar} />
          <h2 style={styles.name}>{user.name}</h2>
          <p style={styles.role}>{user.role}</p>

          <div style={styles.infoBox}>
            <p>
              <b>📧 Email:</b> {user.email}
            </p>
            <p>
              <b>📞 Phone:</b> {user.phone}
            </p>
            <p>
              <b>📍 Location:</b> {user.location}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={styles.actions}>
            <button style={{ ...styles.btn, background: "#2563EB" }}>
              ✏️ Edit Profile
            </button>
            <button style={{ ...styles.btn, background: "#F59E0B" }}>
              🔑 Change Password
            </button>
            <button
              style={{ ...styles.btn, background: "#10B981" }}
              onClick={() => setShowSettings(!showSettings)}
            >
              ⚙️ Settings
            </button>
            <button style={{ ...styles.btn, background: "#DC2626" }}>
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                ...styles.statCard,
                borderTop: `4px solid ${stat.color}`,
              }}
            >
              <h3 style={{ ...styles.statValue, color: stat.color }}>
                {stat.value}
              </h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Inline Settings Section */}
        {showSettings && (
          <div style={styles.settingsCard}>
            <h2>⚙️ Account Settings</h2>
            <label style={styles.label}>👤 Full Name</label>
            <input style={styles.input} type="text" defaultValue={user.name} />

            <label style={styles.label}>📧 Email</label>
            <input
              style={styles.input}
              type="email"
              defaultValue={user.email}
            />

            <label style={styles.label}>🔔 Notifications</label>
            <select style={styles.input}>
              <option>Enable</option>
              <option>Disable</option>
            </select>

            <label style={styles.label}>🎨 Theme</label>
            <select style={styles.input}>
              <option>Light</option>
              <option>Dark</option>
            </select>

            <button style={styles.saveBtn}>💾 Save Changes</button>
          </div>
        )}
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
  container: { width: "90%", maxWidth: "1100px" },
  profileCard: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "center",
    marginBottom: "30px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid #2563EB",
    marginBottom: "15px",
  },
  name: { margin: 0, fontSize: "26px", fontWeight: "bold", color: "#1E293B" },
  role: { margin: "5px 0 15px", fontSize: "16px", color: "#555" },
  infoBox: {
    background: "#f1f5f9",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "left",
    margin: "20px auto",
    maxWidth: "400px",
    fontSize: "14px",
    color: "#333",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  btn: {
    padding: "10px 20px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  statCard: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
  },
  statValue: { fontSize: "24px", fontWeight: "bold", margin: 0 },
  statLabel: { fontSize: "14px", color: "#555", marginTop: "5px" },
  settingsCard: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "25px",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: { fontSize: "14px", fontWeight: "600", color: "#374151" },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  },
  saveBtn: {
    marginTop: "10px",
    padding: "12px",
    background: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
};

export default Profile;
