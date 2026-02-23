# 🚀 Node.js Assignments

Welcome to the **Node.js Assignments** repository! This project is a curated collection of various server-side applications and school assignments built using modern Node.js and Express.

---

## 📂 Repository Structure

Each directory represents a standalone assignment or microservice.

| Folder | Project Name | Description | Status |
| :--- | :--- | :--- | :--- |
| `studentServer` | 🎓 Student Management API | A RESTful API to manage student records, calculate averages, and find toppers. | ✅ Completed |
| `future-server` | 🛠️ Next Assignment | *Coming Soon...* | ⏳ Pending |

---

## 🛠️ Assignment Details

### 1. Student Management API (`/studentServer`)
A specialized server for handling student data with various statistical endpoints.

**Features:**
- List all students.
- Find the class topper based on CGPA.
- Calculate the average CGPA across all students.
- Filter students by branch.
- Get total student count.

**API Documentation:**
- 🔗 [Postman Collection](https://documenter.getpostman.com/view/50840847/2sBXcGCe9d)

**Endpoints:**
- `GET /students` - All student records.
- `GET /students/topper` - Individual with highest CGPA.
- `GET /students/average` - Mean CGPA.
- `GET /students/count` - Total enrollment.
- `GET /students/branch/:branchName` - Filter by specific department.
- `GET /students/:id` - Search by unique ID.

---

## 🚀 Getting Started

To run any of the assignments, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [NPM](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Node_Assignment
   ```

2. Navigate to the specific assignment folder:
   ```bash
   cd studentServer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
To start the development server (with auto-reload):
```bash
node index.js
```

---

## 📊 Roadmap
- [x] Initial Student Server setup.
- [ ] Add Authentication (JWT) assignment.
- [ ] Implement Task Manager API assignment.
- [ ] Integration with MongoDB.

---

## 🤝 Contributing
This is a personal assignment repository. However, if you're a student looking to collaborate or suggest improvements, feel free to open a PR!

## 📝 License
This project is for educational purposes. 

---
Developed with ❤️ by [Deepak Kumar](https://github.com/Kumar-Deepak-DEV)