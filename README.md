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
