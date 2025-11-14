# 🧺 Laundry Pickup & Delivery Management System  
A full-stack system for managing laundry order booking, tracking, and delivery scheduling using **Spring Boot**, **React**, and **MongoDB**.

---

## 🚀 Features

### 👤 Customer Features
- Online laundry booking  
- Track order status (Pickup → Processing → Ready → Delivery)  
- View past orders  
- Receive SMS/Email notifications  

### 🛠 Admin Features
- Manage customers  
- Add/edit laundry items  
- Assign orders to delivery agents  
- Export daily order summary as **PDF**  
- View statistics & reports  

### 🚚 Driver Features
- View assigned pickups/deliveries  
- Update order status (Picked / Delivered)  

---

## 🧪 Tech Stack

### **Backend**
- Spring Boot  
- Spring Data MongoDB  
- Spring Security (JWT Auth)  
- Spring Scheduler  
- JavaMail (Email Notifications)  
- Twilio SMS API  
- iText/OpenPDF (PDF Export)

### **Frontend**
- React (Vite)  
- Axios  
- React Router  
- Tailwind / Material UI (optional)

### **Database**
- MongoDB

### **DevOps**
- Docker  
- Docker Compose  
- Git (Feature Branch Workflow)

---

## 📁 Project Structure
/project-root
│── backend/
│ ├── src/main/java/com/laundry
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ └── model/
│ ├── resources/
│ │ └── application.yml
│ └── pom.xml
│
│── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api/
│ │ └── App.jsx
│ ├── package.json
│ └── vite.config.js
│
└── docker-compose.yml


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone <YOUR_REPO_URL>
cd laundry-management-system

🖥 Backend Setup (Spring Boot)
Install dependencies:
cd backend
mvn clean install

Run backend:
mvn spring-boot:run


Backend runs on:
➡ http://localhost:8080

🌐 Frontend Setup (React)
Install dependencies:
cd frontend
npm install

Run frontend:
npm run dev


Frontend runs on:
➡ http://localhost:3000

🐳 Run Entire System with Docker
docker-compose up --build


This will run:

MongoDB

Spring Boot API

React Frontend

| Method | Endpoint                | Description               |
| ------ | ----------------------- | ------------------------- |
| POST   | /api/orders             | Place new order           |
| GET    | /api/orders/{id}        | Get order details         |
| PUT    | /api/orders/{id}/status | Update status             |
| GET    | /api/orders/daily/pdf   | Download daily PDF report |
| POST   | /api/auth/login         | JWT Login                 |

📝 Sample Order JSON
{
  "customerId": "67641abcd1234",
  "pickupDate": "2025-01-21",
  "items": [
    { "itemId": "shirt123", "quantity": 3 }
  ]
}

📸 Screenshots (Optional)

Add your UI screenshots here:

/assets/screenshot1.png
/assets/screenshot2.png

🤝 Contributing

Fork the project

Create feature branch

Commit & push

Open Pull Request

📜 License

This project is licensed under the MIT License.


