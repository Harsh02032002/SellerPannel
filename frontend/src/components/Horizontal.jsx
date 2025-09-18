import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  MessageSquare,
  MessageCircle,
  Bell,
  HelpCircle,
  Search,
} from "lucide-react";

const Horizontal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={styles.navbar}>
      <div style={styles.navItems}>
        {/* Home */}
        <Link to="/" style={styles.navItem}>
          <Home size={24} color="#1F2937" />
          <span style={styles.navText}>Home</span>
        </Link>

        {/* Messages */}
        <Link to="/messages" style={styles.navItem}>
          <MessageSquare size={24} color="#1F2937" />
          <span style={styles.navText}>Messages</span>
        </Link>

        {/* Feedback */}
        <Link to="/feedback" style={styles.navItem}>
          <MessageCircle size={24} color="#1F2937" />
          <span style={styles.navText}>Feedback</span>
        </Link>

        {/* Profile */}
        <Link to="/profile" style={styles.navItem}>
          <User size={24} color="#1F2937" />
          <span style={styles.navText}>Profile</span>
        </Link>

        {/* Search */}
        <div style={styles.searchWrapper}>
          <Search size={18} color="#9CA3AF" />
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Notifications */}
        <Link to="/notification" style={styles.navItem}>
          <Bell size={24} color="#1F2937" />
          <span style={styles.navText}>Notifications</span>
        </Link>

        {/* Help */}
        <Link to="/help" style={styles.navItem}>
          <HelpCircle size={24} color="#1F2937" />
          <span style={styles.navText}>Help</span>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#EDE9FE",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "12px 20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    zIndex: 999,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: "200%",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    fontWeight: "600",
    color: "#374151",
  },
  navText: {
    marginLeft: "8px",
    fontSize: "15px",
    fontWeight: "600",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "4px 8px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  searchInput: {
    border: "none",
    outline: "none",
    marginLeft: "6px",
    padding: "4px 6px",
    fontSize: "14px",
    borderRadius: "4px",
  },
};

export default Horizontal;
