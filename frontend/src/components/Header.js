import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>AutoParts Store</h2>

      <nav>
        {/* FIX: Home must NOT point to "/" when using HashRouter */}
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>

        {!token ? (
          <Link to="/login" style={styles.link}>Login</Link>
        ) : (
          <>
            <Link to="/profile" style={styles.link}>My Account</Link>
            <button onClick={logout} style={styles.logout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    padding: "15px 30px",
    backgroundColor: "#020617",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#38bdf8",
    margin: 0,
  },
  link: {
    color: "#e5e7eb",
    marginLeft: "20px",
    textDecoration: "none",
  },
  logout: {
    marginLeft: "20px",
    padding: "6px 12px",
    backgroundColor: "#ef4444",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Header;
