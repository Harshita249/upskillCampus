import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

  const fetchCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login to view your cart");
      return;
    }

    fetch("http://localhost:5000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          setCartItems([]);
          setMessage("Your cart is empty");
        }
      })
      .catch(() => {
        setCartItems([]);
        setMessage("Failed to load cart");
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (id) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => fetchCart())
      .catch(() => alert("Failed to remove item"));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2 className="section-title">My Cart</h2>

      {message && <p>{message}</p>}

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="fk-cart-layout">
          {/* LEFT */}
          <div className="fk-cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="fk-cart-card">
                <img
                  src={`https://images.unsplash.com/featured/?car,${item.name}`}
                  alt={item.name}
                />

                <div className="fk-cart-info">
                  <h3>{item.name}</h3>
                  <p className="fk-category">{item.category}</p>
                  <p className="fk-price">₹{item.price}</p>
                  <p className="fk-qty">Qty: {item.quantity}</p>

                  <button
                    className="fk-remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="fk-cart-summary">
            <h3>Price Details</h3>

            <div className="fk-summary-row">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="fk-summary-row total">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="fk-checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
