import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      {/* LEFT SIDEBAR */}
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>My Account</h3>

        <Link to="/profile" style={styles.sidebarLink}>
          Profile Information
        </Link>

        <Link to="/orders" style={styles.sidebarLink}>
          My Orders
        </Link>

        <button onClick={logout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div style={styles.content}>
        <h2 style={styles.heading}>Personal Information</h2>

        <div style={styles.card}>
          <div style={styles.row}>
            <input
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <input
              name="phone"
              placeholder="Mobile Number"
              value={profile.phone}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="city"
              placeholder="City"
              value={profile.city}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <textarea
            name="address"
            placeholder="Address"
            value={profile.address}
            onChange={handleChange}
            style={styles.textarea}
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={profile.pincode}
            onChange={handleChange}
            style={styles.input}
          />

          <button style={styles.saveBtn}>Save Information</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "calc(100vh - 70px)",
    backgroundColor: "#0b1220",
    color: "#e5e7eb",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#020617",
    padding: "25px",
  },
  sidebarTitle: {
    marginBottom: "20px",
    color: "#38bdf8",
  },
  sidebarLink: {
    display: "block",
    marginBottom: "15px",
    color: "#e5e7eb",
    textDecoration: "none",
  },
  logoutBtn: {
    marginTop: "20px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#ef4444",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "6px",
  },
  content: {
    flex: 1,
    padding: "40px",
  },
  heading: {
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#111827",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "700px",
  },
  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    minHeight: "80px",
    marginBottom: "15px",
  },
  saveBtn: {
    padding: "12px 20px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Profile;
