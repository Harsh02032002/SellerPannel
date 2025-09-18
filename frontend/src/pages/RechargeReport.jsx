import React, { useState } from "react";

const RechargeReport = () => {
  const [reports, setReports] = useState([
    { rechargeId: "R101", amount: "500", status: "Successful" },
    { rechargeId: "R102", amount: "1000", status: "Pending" },
    { rechargeId: "R103", amount: "300", status: "Failed" },
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "30px",
          margin: "100px auto",
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
          Recharge Report
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
                  Recharge ID
                </th>
                <th
                  style={{ padding: "10px", borderBottom: "1px solid #E5E7EB" }}
                >
                  Amount (₹)
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
                  <td style={{ padding: "10px" }}>{report.rechargeId}</td>
                  <td style={{ padding: "10px" }}>{report.amount}</td>
                  <td
                    style={{
                      padding: "10px",
                      color:
                        report.status === "Successful"
                          ? "#10B981"
                          : report.status === "Pending"
                          ? "#F59E0B"
                          : "#EF4444",
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

export default RechargeReport;
