import React, { useState } from "react";

const FixedFeeReport = () => {
  const [reports, setReports] = useState([
    { name: "Monthly Fixed Fee", amount: "5000", status: "Paid" },
    { name: "Quarterly Fixed Fee", amount: "15000", status: "Pending" },
    { name: "Annual Fixed Fee", amount: "60000", status: "Paid" },
  ]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
        margin:"100px auto"
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "30px",
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
          Fixed Fee Report
        </h2>

        <div style={{margin:"auto 20px" ,overflowX: "auto" }}>
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
                  Report Name
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
                  <td style={{ padding: "10px" }}>{report.name}</td>
                  <td style={{ padding: "10px" }}>{report.amount}</td>
                  <td
                    style={{
                      padding: "10px",
                      color: report.status === "Paid" ? "#10B981" : "#EF4444",
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

export default FixedFeeReport;
