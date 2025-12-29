# Automotive Parts E-Commerce Website (FSD Project)

## 📌 Project Overview
The **Automotive Parts E-Commerce Website** is a full stack development (FSD) project designed to simulate a real-world online shopping platform for automobile spare parts and accessories.

The project allows users to browse products, add items to cart, manage their profile, and place orders, while administrators can manage products from the backend.

This project demonstrates practical usage of **frontend, backend, and database integration** using modern web technologies.

---

## 🚀 Features

### 👤 User Features
- User registration and login (JWT authentication)
- Browse automotive products
- View product details with images and descriptions
- Add products to cart
- Remove products from cart
- View cart summary
- Flipkart-style responsive UI
- User profile (My Account) section

### 🛒 Cart Features
- Add to cart
- Remove from cart
- Real-time cart updates
- Secure cart access using authentication

### 🧑‍💼 Admin Features
- Admin login
- Add and manage products
- View product listings

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- HTML5
- CSS3 (Responsive, Flipkart-style UI)

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MySQL

---

## 📁 Project Structure

```text
automotive-parts-ecommerce/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── README.md


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <repository-url>
cd automotive-parts-ecommerce

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend will start on:

http://localhost:5000

3️⃣ Database Setup

Install MySQL

Create a database (example: auto_parts_db)

Import the provided SQL schema

Update database credentials in backend configuration file

4️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend will start on:

http://localhost:3000

🌐 Deployment Information
GitHub Pages

The frontend can be deployed on GitHub Pages

The backend cannot be deployed on GitHub because it requires a server and database

📌 Future Enhancements

Online payment gateway integration

Order tracking system

Product image upload

Cloud deployment for backend

Wishlist feature

####Quick Access

Backend Setup
cd backend
npm install
npm run dev


Frontend Setup
cd frontend
npm install
npm start