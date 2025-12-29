import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message || "Registered"))
      .catch(() => setMessage("Server error"));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>

      <form style={styles.card} onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" style={styles.button}>
          Register
        </button>

        {message && <p style={styles.message}>{message}</p>}

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#e5e7eb",
  },
  title: {
    position: "absolute",
    top: "90px",
    fontSize: "2rem",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#22c55e",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    textAlign: "center",
  },
};

export default Register;
