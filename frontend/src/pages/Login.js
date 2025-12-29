import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);

          // ✅ REDIRECT TO HOME PAGE
          navigate("/");
        } else {
          setMessage(data.message || "Login failed");
        }
      })
      .catch(() => {
        setMessage("Server error");
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>

      <form style={styles.card} onSubmit={handleLogin}>
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
          Login
        </button>

        {message && <p style={styles.message}>{message}</p>}

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          New user? <Link to="/register">Register</Link>
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
    backgroundColor: "#38bdf8",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    textAlign: "center",
  },
};

export default Login;
