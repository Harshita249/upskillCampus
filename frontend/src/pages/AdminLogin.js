import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Admin Login</h1>

      <form onSubmit={loginAdmin} style={styles.card}>
        <input
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    width: 300,
  },
  input: {
    marginBottom: 15,
    padding: 10,
  },
  button: {
    padding: 10,
    background: "#38bdf8",
    border: "none",
    cursor: "pointer",
  },
};

export default AdminLogin;
