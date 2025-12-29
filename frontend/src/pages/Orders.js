import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login to view your orders");
      return;
    }

    let userId;
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch {
      setMessage("Session expired. Please login again.");
      return;
    }

    fetch(`http://localhost:5000/api/orders/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setOrders(data);
        } else {
          setMessage("No orders found");
        }
      })
      .catch(() => setMessage("Error loading orders"));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📦 My Orders</h1>

      {message && <p>{message}</p>}

      {orders.length > 0 && (
        <div style={styles.list}>
          {orders.map((order) => (
            <div key={order.id} style={styles.card}>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "20px",
  },
  list: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default Orders;
