import React from "react";
import { Link } from "react-router-dom";

const HelpDropdown = () => {
  const links = [
    { text: "📄 FAQ", path: "/help/faq" },
    { text: "📞 Contact Support", path: "/help/contact" },
    { text: "🎓 Tutorials", path: "/help/tutorials" },
  ];

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Support & Help</h2>
      <div style={styles.table}>
        {links.map((link, index) => (
          <Link key={index} to={link.path} style={styles.row}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    background: "#f9f9fb",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin:"100px auto",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1E293B",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  row: {
    padding: "12px 16px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#374151",
    fontSize: "15px",
    transition: "background 0.2s",
  },
};

export default HelpDropdown;
