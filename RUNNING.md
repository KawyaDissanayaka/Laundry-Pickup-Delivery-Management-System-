# How to Run the System

## Frontend (Already Running)
The React frontend is running at: **http://localhost:3000**

Start with:
```bash
npm start
```

## Backend Setup & Running

### Option 1: Using Java IDE (Recommended)
1. Open the `Backend` folder in IntelliJ IDEA or Eclipse
2. Right-click `LaundryApplication.java` and select **Run**
3. Backend will start on port **8081**

### Option 2: Using Maven Command Line

#### Install Maven (Windows):
1. Download Maven from: https://maven.apache.org/download.cgi
2. Extract to a folder (e.g., `C:\apache-maven-3.9.6`)
3. Add to System Environment Variables:
   - Variable name: `MAVEN_HOME`
   - Variable value: `C:\apache-maven-3.9.6`
4. Add to PATH: `%MAVEN_HOME%\bin`
5. Restart Command Prompt and verify: `mvn --version`

#### Run Backend:
```bash
cd Backend
mvn spring-boot:run
```

## Default Ports
- Frontend: http://localhost:3000
- Backend API: http://localhost:8081
- H2 Database Console: http://localhost:8081/h2-console

## API Endpoints
- GET `/api/orders` - List all orders
- POST `/api/orders` - Create new order
- GET `/api/orders/{id}` - Get order details
- PUT `/api/orders/{id}` - Update order
- DELETE `/api/orders/{id}` - Delete order
- PATCH `/api/orders/{id}/status` - Update order status

## Features
- ✅ Material-UI professional interface
- ✅ Order management (CRUD)
- ✅ Order status tracking
- ✅ Admin dashboard with charts
- ✅ Customer dashboard
- ✅ Driver dashboard
- ✅ Export to PDF
- ✅ Responsive design
