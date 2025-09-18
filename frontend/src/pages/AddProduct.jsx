import React, { useState } from "react";
import { Plus, Eye, Trash2, Edit2 } from "lucide-react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    rate: "",
    description: "",
    category: "",
    subcategory: "",
    image: "",
    status: "",
  });

  const [products, setProducts] = useState([
    {
      name: "Washing Machine",
      rate: "12000",
      description: "High efficiency washing machine",
      category: "Electronics",
      subcategory: "Home Appliances",
      image: "img1.jpg",
      status: "Accepted By Delivery Man",
    },
    {
      name: "Smartphone",
      rate: "25000",
      description: "Latest Android phone",
      category: "Electronics",
      subcategory: "Mobiles",
      image: "img2.jpg",
      status: "Cooking In Restaurant",
    },
    {
      name: "Sofa Set",
      rate: "18000",
      description: "Comfortable 3-seater sofa",
      category: "Furniture",
      subcategory: "Living Room",
      image: "img3.jpg",
      status: "Unassigned Orders",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const statusOptions = [
    "Canceled orders",
    "Refunded orders",
    "Payment failed orders",
    "Unassigned Orders",
    "Accepted By Delivery Man",
    "Cooking In Restaurant",
    "Picked Up By Delivery Man",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      rate: "",
      description: "",
      category: "",
      subcategory: "",
      image: "",
      status: "",
    });
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = formData;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, formData]);
    }
    handleReset();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(products[index]);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Left Form */}
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
          <div style={{ display: "flex", gap: "5px", marginRight: "10px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#EF4444",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#F59E0B",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#10B981",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#3B82F6",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <Plus size={24} style={{ marginRight: "8px", color: "#10B981" }} />
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#065F46" }}>
            Add Product
          </h1>
        </div>
        <p style={{ color: "#6B7280", marginBottom: "20px" }}>
          Create a new product to add to your store.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {[
            "name",
            "rate",
            "description",
            "category",
            "subcategory",
            "image",
            "status",
          ].map((field) => (
            <div key={field} style={{ width: "100%" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  marginBottom: "6px",
                  color: "#065F46",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                {field === "rate"
                  ? "Rate"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "description" ? (
                <textarea
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #D1FAE5",
                    fontSize: "14px",
                    minHeight: "70px",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                  required
                />
              ) : field === "status" ? (
                <select
                  value={formData.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #D1FAE5",
                    fontSize: "14px",
                    background: "#fff",
                  }}
                  required
                >
                  <option value="">Select Status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #D1FAE5",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  required={field !== "image"}
                />
              )}
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #10B981",
                background: "#fff",
                color: "#10B981",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
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
              {editingIndex !== null ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>

      {/* Right Table */}
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
          Products List
        </h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#F3F4F6", textAlign: "left" }}>
            <tr>
              {[
                "SL",
                "Name",
                "Rate",
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
                <td style={{ padding: "10px" }}>{prod.rate}</td>
                <td style={{ padding: "10px" }}>{prod.category}</td>
                <td style={{ padding: "10px" }}>{prod.subcategory}</td>
                <td style={{ padding: "10px" }}>{prod.status}</td>
                <td style={{ padding: "10px", display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => handleEdit(index)}
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
                    onClick={() => handleDelete(index)}
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

export default AddProduct;
