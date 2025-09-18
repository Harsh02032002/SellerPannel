import React, { useState } from "react";
import { Plus, Eye, Trash2, Edit2, Upload } from "lucide-react";

const BulkImport = () => {
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([
    {
      name: "Washing Machine",
      category: "Electronics",
      subcategory: "Home Appliances",
      status: "Uploaded",
    },
    {
      name: "Smartphone",
      category: "Electronics",
      subcategory: "Mobiles",
      status: "Uploaded",
    },
    {
      name: "Sofa Set",
      category: "Furniture",
      subcategory: "Living Room",
      status: "Uploaded",
    },
  ]);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate upload
      alert(`File ${file.name} uploaded successfully!`);
      setFile(null);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
        margin: "100px auto",
      }}
    >
      {/* Left Side: Bulk Import Form */}
      <div
        style={{
          flex: 1,
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Upload size={24} style={{ marginRight: "8px", color: "#10B981" }} />
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#065F46" }}>
            Bulk Import
          </h1>
        </div>
        <p style={{ color: "#6B7280", marginBottom: "20px" }}>
          Follow these instructions to import products:
          <ol style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Download the format file and fill it with proper data.</li>
            <li>
              You can download the example file to understand how the data must
              be filled.
            </li>
            <li>Once filled, upload it using the form below.</li>
            <li>
              After uploading, edit the products to set images and choices.
            </li>
            <li>Ensure correct brand and category IDs are used.</li>
          </ol>
        </p>

        <form
          onSubmit={handleUpload}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="file"
            accept=".xlsx,.csv"
            onChange={handleFileChange}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #D1FAE5",
              fontSize: "14px",
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
            Upload Products
          </button>
        </form>
      </div>

      {/* Right Side: Uploaded Products Table */}
      <div
        style={{
          flex: 1,
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "20px",
          overflowX: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#065F46",
            marginBottom: "15px",
          }}
        >
          Uploaded Products
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#F3F4F6", textAlign: "left" }}>
            <tr>
              {[
                "SL",
                "Name",
                "Category",
                "Subcategory",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    color: "#374151",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "10px" }}>{index + 1}</td>
                <td style={{ padding: "10px" }}>{prod.name}</td>
                <td style={{ padding: "10px" }}>{prod.category}</td>
                <td style={{ padding: "10px" }}>{prod.subcategory}</td>
                <td style={{ padding: "10px" }}>{prod.status}</td>
                <td style={{ padding: "10px", display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      background: "#3B82F6",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    style={{
                      background: "#EF4444",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    style={{
                      background: "#10B981",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    title="View"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BulkImport;
