import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Vertical from "./components/Vertical";
import Horizontal from "./components/Horizontal";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS"; // Naya POS page import
import AddProduct from "./pages/AddProduct";
import ProcessingOrders from "./pages/ProcessingOrders";
import PendingOrders from "./pages/PendingOrders";
import CompletedOrders from "./pages/CompletedOrders";
import RefundOrders from "./pages/RefundOrders";
import AllOrders from "./pages/AllOrders";
import NewOrders from "./pages/NewOrders";
import PrintOrders from "./pages/PrintOrders";
import PackOrders from "./pages/PackOrders";
import HandoverOrders from "./pages/HandoverOrders";
import BulkImport from "./pages/BulkImport";
import WalletBalance from "./pages/WalletBalance";
import RechargeWallet from "./pages/RechargeWallet";
import TransactionHistory from "./pages/TransactionHistory";
import ProductReviews from "./pages/ProductReviews";
import StarRatingsSummary from "./pages/StarRatingsSummary";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import HelpDropdown from "./pages/HelpDropdown";
import Notifications from "./pages/Notifications";
import LogisticsFeeReport from "./pages/LogisticsFeeReport";
import RemittanceReport from "./pages/RemittanceReport";
import AdSpendReport from "./pages/AdSpendReport";
import PaymentGatewayFeeReport from "./pages/PaymentGatewayFeeReport";
import CommissionFeeReport from "./pages/CommissionFeeReport";
import FixedFeeReport from "./pages/FixedFeeReport";
import RechargeReport from "./pages/RechargeReport";
import TaxReports from "./pages/TaxReports";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Horizontal />

        {/* Main Section */}
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <Vertical className="w-64 z-20" />

          {/* Content */}
          <div
            style={{
              marginLeft: 350,
              marginTop: 4,
              width: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pos" element={<POS />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/process/new" element={<NewOrders />} />
              <Route path="/process/print" element={<PrintOrders />} />
              <Route path="/process/pack" element={<PackOrders />} />
              <Route path="/process/handover" element={<HandoverOrders />} />

              <Route path="/pending" element={<PendingOrders />} />
              <Route path="/complete" element={<CompletedOrders />} />
              <Route path="/refund" element={<RefundOrders />} />
              <Route path="/all-orders" element={<AllOrders />} />
              <Route path="/bulk" element={<BulkImport />} />

              <Route path="/balance" element={<WalletBalance />} />
              <Route path="/recharge" element={<RechargeWallet />} />
              <Route path="/transaction" element={<TransactionHistory />} />
              <Route path="/review" element={<ProductReviews />} />
              <Route path="/summary" element={<StarRatingsSummary />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/help" element={<HelpDropdown />} />
              <Route path="/notification" element={<Notifications />} />

              <Route path="/remittance" element={<RemittanceReport />} />
              <Route path="/ad-spend" element={<AdSpendReport />} />
              <Route path="/logistics-fee" element={<LogisticsFeeReport />} />
              <Route
                path="/payment-gateway"
                element={<PaymentGatewayFeeReport />}
              />
              <Route path="/commission" element={<CommissionFeeReport />} />
              <Route path="/fixed-fee" element={<FixedFeeReport />} />
              <Route path="/rechargereport" element={<RechargeReport />} />
              <Route path="/tax" element={<TaxReports />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
