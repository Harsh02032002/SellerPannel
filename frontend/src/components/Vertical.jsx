import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Monitor,
  Package,
  PlusCircle,
  List,
  Upload,
  ShoppingCart,
  ClipboardList,
  Clock,
  RefreshCw,
  CheckCircle,
  RotateCcw,
  Wallet,
  CreditCard,
  ArrowUpCircle,
  History,
  Star,
  Settings,
  UserCog,
  Building,
  Banknote,
  Printer,
  Truck,
  BarChart2,
} from "lucide-react";

const Vertical = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Seller Panel</h2>
      <ul style={styles.menu}>
        {/* Dashboard */}
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>
            <LayoutDashboard size={20} style={styles.icon} /> Dashboard
          </Link>
        </li>

        {/* Catalog Management */}
        <li style={styles.sectionTitle}>
          <Package size={20} style={styles.icon} /> Catalog Management
        </li>
        <li style={styles.menuItem}>
          <Link to="/add-product" style={styles.link}>
            <PlusCircle size={20} style={styles.icon} /> Add Product
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/bulk" style={styles.link}>
            <Upload size={20} style={styles.icon} /> Bulk Upload Products
          </Link>
        </li>

        {/* Orders */}
        <li style={styles.sectionTitle}>
          <ShoppingCart size={20} style={styles.icon} /> Orders
        </li>
        <li style={styles.menuItem}>
          <Link to="/all-orders" style={styles.link}>
            <ClipboardList size={20} style={styles.icon} /> All Orders
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/pending" style={styles.link}>
            <Clock size={20} style={styles.icon} /> Pending Orders
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/complete" style={styles.link}>
            <CheckCircle size={20} style={styles.icon} /> Completed Orders
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/refund" style={styles.link}>
            <RotateCcw size={20} style={styles.icon} /> Returns / Refunds
          </Link>
        </li>

        {/* Process Orders */}
        <li style={styles.sectionTitle}>
          <Package size={20} style={styles.icon} /> Process Orders
        </li>
        <li style={styles.menuItem}>
          <Link to="/process/new" style={styles.link}>
            <RefreshCw size={20} style={styles.icon} /> All New Orders
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/process/print" style={styles.link}>
            <Printer size={20} style={styles.icon} /> Print
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/process/pack" style={styles.link}>
            <Package size={20} style={styles.icon} /> Pack
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/process/handover" style={styles.link}>
            <Truck size={20} style={styles.icon} /> Handover
          </Link>
        </li>

        {/* Wallet */}
        <li style={styles.sectionTitle}>
          <Wallet size={20} style={styles.icon} /> Wallet
        </li>
        <li style={styles.menuItem}>
          <Link to="/balance" style={styles.link}>
            <CreditCard size={20} style={styles.icon} /> Wallet Balance
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/transaction" style={styles.link}>
            <History size={20} style={styles.icon} /> Transaction History
          </Link>
        </li>

        {/* Reviews */}
        <li style={styles.sectionTitle}>
          <Star size={20} style={styles.icon} /> Reviews & Ratings
        </li>
        <li style={styles.menuItem}>
          <Link to="/review" style={styles.link}>
            <Star size={20} style={styles.icon} /> Product Reviews
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/summary" style={styles.link}>
            <Star size={20} style={styles.icon} /> Star Ratings Summary
          </Link>
        </li>

        {/* Reports */}
        <li style={styles.sectionTitle}>
          <BarChart2 size={20} style={styles.icon} /> Reports
        </li>
        <li style={styles.menuItem}>
          <Link to="/remittance" style={styles.link}>
            <Banknote size={20} style={styles.icon} /> Remittance Report
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/ad-spend" style={styles.link}>
            <Monitor size={20} style={styles.icon} /> Ad Spend Report
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/logistics-fee" style={styles.link}>
            <Truck size={20} style={styles.icon} /> Logistics Fee Report
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/payment-gateway" style={styles.link}>
            <CreditCard size={20} style={styles.icon} /> Payment Gateway Fee
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/commission" style={styles.link}>
            <ArrowUpCircle size={20} style={styles.icon} /> Commission Fee
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/fixed-fee" style={styles.link}>
            <Package size={20} style={styles.icon} /> Fixed Fee Report
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/rechargereport" style={styles.link}>
            <PlusCircle size={20} style={styles.icon} /> Recharge Report
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/tax" style={styles.link}>
            <Building size={20} style={styles.icon} /> Tax Reports 
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "270px",
    height: "calc(100vh - 65px)",
    background: "#1E3AB0",
    color: "#fff",
    padding: "20px",
    position: "fixed",
    left: 0,
    top: "65px",
    overflowY: "auto",
    boxSizing: "border-box",
  },

  logo: {
    fontSize: "22px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    fontSize: "18px",
    padding: "10px 12px",
    margin: "6px 0",
    cursor: "pointer",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sectionTitle: {
    marginTop: "18px",
    fontWeight: "bold",
    color: "#f0e9f9",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    flexShrink: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default Vertical;
