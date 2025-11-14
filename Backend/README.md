# Laundry Pickup & Delivery - Backend

This is a minimal Spring Boot backend for the Laundry Pickup & Delivery Management System.

Features:
- REST CRUD endpoints for orders
- H2 in-memory database for development
- Sample DTOs and simple price calculation

Run locally:

1. Build:

```powershell
cd Backend
mvn clean package -DskipTests
```

2. Run:

```powershell
mvn spring-boot:run
```

Server will start on port `8081` by default. H2 console available at `http://localhost:8081/h2-console` (JDBC URL `jdbc:h2:mem:laundrydb`).

Sample requests (use PowerShell/curl):

Create order:

```powershell
curl -X POST http://localhost:8081/api/orders -H "Content-Type: application/json" -d "{
  \"customerName\": \"Alice\",
  \"phone\": \"+123456789\",
  \"pickupAddress\": \"123 Main St\",
  \"deliveryAddress\": \"123 Main St\",
  \"items\": [{ \"name\": \"Shirt\", \"quantity\": 3, \"price\": 2.5 }]
}"
```

List orders:

```powershell
curl http://localhost:8081/api/orders
```

Update status:

```powershell
curl -X PATCH "http://localhost:8081/api/orders/1/status?status=DELIVERED"
```


If you want, I can:
- add authentication
- persist to a real DB (MySQL/Postgres) and provide migration scripts
- create integration tests

Which next step would you like?