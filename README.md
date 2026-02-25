# 🚀 Node.js Assignments

Welcome to the **Node.js Assignments** repository! This project is a curated collection of server-side applications built using **Node.js** and **Express.js** as part of semester coursework.

---

## 📂 Repository Structure

Each directory represents a standalone assignment/microservice with its own dependencies and entry point.

```
Node_Assignment/
├── studentServer/        # 🎓 Student Management API
│   ├── index.js
│   ├── package.json
│   └── .gitignore
├── eCommerceServer/      # 🛒 E-Commerce Product API
│   ├── index.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

---

## 📋 Assignments Overview

| # | Folder | Project Name | Description | Port | Status |
|:--|:-------|:-------------|:------------|:-----|:-------|
| 1 | `studentServer` | 🎓 Student Management API | RESTful API to manage student records, calculate averages, and find toppers | 3000 | ✅ Completed |
| 2 | `eCommerceServer` | 🛒 E-Commerce Product API | RESTful CRUD API for managing product listings with category filtering | 3000 | ✅ Completed |

---

## 🛠️ Assignment Details

### 1. 🎓 Student Management API (`/studentServer`)

A specialized REST API for managing student academic data with statistical endpoints.

**Tech Stack:** Node.js · Express.js · Nodemon

**Features:**
- 📋 List all enrolled students
- 🏆 Identify the class topper by highest CGPA
- 📊 Calculate average CGPA across all students
- 🔍 Filter students by branch / department
- 🔢 Get total student enrollment count
- 🆔 Fetch a specific student by unique ID

**API Endpoints:**

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/students` | Retrieve all student records |
| `GET` | `/students/topper` | Student with the highest CGPA |
| `GET` | `/students/average` | Mean CGPA of all students |
| `GET` | `/students/count` | Total number of enrolled students |
| `GET` | `/students/branch/:branchName` | Filter students by branch (e.g., `CSE`, `IT`, `ECE`) |
| `GET` | `/students/:id` | Fetch a student by their unique ID |

**Sample Branches Available:** `CSE`, `IT`, `ECE`, `AI`, `Data Science`

**API Documentation:**
- 🔗 [Postman Collection](https://documenter.getpostman.com/view/50840847/2sBXcGCe9d)

---

### 2. 🛒 E-Commerce Product API (`/eCommerceServer`)

A full CRUD REST API to manage an in-memory product catalog for an e-commerce platform.

**Tech Stack:** Node.js · Express.js · Nodemon

**Features:**
- 📦 List all available products
- 🔍 Search product by unique ID
- 🏷️ Filter products by category
- ➕ Add a new product to the catalog
- ✏️ Update full product details
- 💰 Update only the price of a product
- 📦 Update only the stock of a product

**API Endpoints:**

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/products` | Retrieve all products |
| `GET` | `/products/:id` | Fetch a product by its ID |
| `GET` | `/products/category/:categoryName` | Filter products by category |
| `POST` | `/products` | Add a new product |
| `PUT` | `/products/:id` | Update full product details |
| `PUT` | `/products/:id/price` | Update only the price of a product |
| `PUT` | `/products/:id/stock` | Update only the stock of a product |

**Sample Categories Available:** `Electronics`, `Footwear`, `Accessories`, `Fashion`

**Sample Products:**

| ID | Name | Category | Price (₹) | Stock | Rating |
|:---|:-----|:---------|:---------|:------|:-------|
| 1 | Wireless Mouse | Electronics | 799 | 25 | 4.3 |
| 2 | Running Shoes | Footwear | 2499 | 40 | 4.5 |
| 3 | Laptop Stand | Accessories | 999 | 30 | 4.2 |
| 4 | Smart Watch | Electronics | 4999 | 12 | 4.4 |
| 5 | Backpack | Fashion | 1599 | 50 | 4.1 |

**POST Request Body (Add Product):**
```json
{
  "name": "Product Name",
  "price": 1299,
  "stock": 20,
  "rating": 4.0
}
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [NPM](https://www.npmjs.com/)

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Node_Assignment
   ```

2. **Navigate to the desired assignment folder:**
   ```bash
   # For Student Server
   cd studentServer

   # For E-Commerce Server
   cd eCommerceServer
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   # Standard start
   node index.js

   # Development mode with auto-reload (if nodemon is installed)
   npx nodemon index.js
   ```

5. **Test the API:**
   Open your browser or Postman and visit:
   ```
   http://localhost:3000
   ```

---

## 📊 Roadmap

- [x] Student Management Server
- [x] E-Commerce Product Server
- [ ] Authentication API (JWT)
- [ ] Task Manager API
- [ ] MongoDB Integration
- [ ] File Upload Server

---

## 🤝 Contributing

This is a personal academic assignment repository. If you're a student looking to collaborate or suggest improvements, feel free to open a Pull Request!

---

## 📝 License

This project is for **educational purposes only**.

---

<div align="center">
  Developed with ❤️ by <a href="https://github.com/Kumar-Deepak-DEV">Deepak Kumar</a>
</div>