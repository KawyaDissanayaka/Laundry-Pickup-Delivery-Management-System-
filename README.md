# Laundry-Pickup-Delivery-Management-System-
A complete end-to-end system built using Spring Boot, React, and MongoDB for managing laundry shop operations with online booking, real-time tracking, delivery scheduling, and automated notifications.

🔹 Problem

Traditional laundry shops record orders manually, leading to:
	•	misplaced order records
	•	difficulty tracking customer information
	•	no real-time order updates
	•	inefficient pickup/delivery scheduling

This system solves those pain points through automation and digitization.

⸻

🔹 Key Features

🧾 Customer & Order Management
	•	Create and track laundry orders
	•	View order history & live status updates
	•	Automatic price calculation

🚚 Pickup & Delivery Workflow
	•	Assign orders to delivery agents
	•	Driver dashboard for daily tasks
	•	Route + status tracking (Pickup → Processing → Ready → Delivery)

📢 Notifications
	•	SMS / Email alerts when:
	•	Order is placed
	•	Laundry is ready
	•	Out for delivery
	•	Delivered

📅 Admin & Driver Dashboards
	•	Role-based logins (Customer / Admin / Driver)
	•	Admin panel for:
	•	Managing orders
	•	Managing customers
	•	Adding delivery agents
	•	Scheduling delivery assignments

📄 PDF Export
	•	Export daily order reports as downloadable PDF
	•	Useful for shop accounting or daily summaries

⸻

🔹 Tech Stack

Backend – Spring Boot
	•	Spring Web
	•	Spring Data MongoDB
	•	Spring Security + JWT
	•	Scheduling (Spring Scheduler)
	•	Email + SMS integration
	•	PDF generation (iText/OpenPDF)

Frontend – React
	•	React + Vite
	•	Axios for API calls
	•	Role-based UI & dashboards

Database – MongoDB
	•	Document-based NoSQL
	•	Collections: Customers, Orders, Items, DeliveryAgents

DevOps
	•	Docker + Docker Compose
	•	Git feature-branch workflow

⸻

🔹 Core Modules
	•	Customer Management
	•	Laundry Item & Service Catalog
	•	Order Processing
	•	Delivery Management
	•	Notification Service
	•	Daily PDF Reporting
