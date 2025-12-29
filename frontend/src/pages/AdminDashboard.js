import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>

      <Link to="/admin/products" style={styles.link}>
        Manage Products
      </Link>

      <button
        onClick={() => {
          localStorage.removeItem("admin");
          navigate("/admin/login");
        }}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "#fff",
    padding: 40,
  },
  link: {
    display: "block",
    margin: "20px 0",
    color: "#38bdf8",
    fontSize: "18px",
  },
  button: {
    padding: 10,
    background: "#ef4444",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
};

export default AdminDashboard;
