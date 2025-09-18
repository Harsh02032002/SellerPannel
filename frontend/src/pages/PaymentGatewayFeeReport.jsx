import React, { useState } from "react";

const PaymentGatewayFeeReport = () => {
  const [reports, setReports] = useState([
    { transactionId: "TX101", fee: "50", status: "Deducted" },
    { transactionId: "TX102", fee: "30", status: "Pending" },
    { transactionId: "TX103", fee: "45", status: "Deducted" },
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "30px",
          margin:"100px auto"
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#065F46",
            marginBottom: "20px",
          }}
        >
          Payment Gateway Fee Report
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#F3F4F6", textAlign: "left" }}>
              <tr>
                <th
                  style={{ padding: "10px", borderBottom: "1px solid #E5E7EB" }}
                >
                  SL
                </th>
                <th
                  style={{ padding: "10px", borderBottom: "1px solid #E5E7EB" }}
                >
                  Transaction ID
                </th>
                <th
                  style={{ padding: "10px", borderBottom: "1px solid #E5E7EB" }}
                >
                  Fee (₹)
                </th>
                <th
                  style={{ padding: "10px", borderBottom: "1px solid #E5E7EB" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                  <td style={{ padding: "10px" }}>{index + 1}</td>
                  <td style={{ padding: "10px" }}>{report.transactionId}</td>
                  <td style={{ padding: "10px" }}>{report.fee}</td>
                  <td
                    style={{
                      padding: "10px",
                      color:
                        report.status === "Deducted" ? "#10B981" : "#F59E0B",
                      fontWeight: 600,
                    }}
                  >
                    {report.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayFeeReport;
