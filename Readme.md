# Zorvyn Backend

A Node.js REST API backend built with Express and MongoDB, providing user authentication, role-based access control, and data management capabilities.

## Features

- **User Authentication** - JWT-based authentication with bcrypt password hashing
- **Role-Based Access Control** - Three user roles: viewer, analyst, and admin
- **User Management** - Create, read, update, and delete user accounts
- **Records Management** - Create and manage records with proper validation
- **Dashboard** - Dashboard functionality for data insights
- **Error Handling** - Comprehensive centralized error handling
- **Input Validation** - Request validation using Joi
- **Environment Configuration** - Flexible configuration via environment variables

## Tech Stack

- **Runtime**: Node.js with ES6 Modules
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.3.3
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Validation**: Joi
- **Environment Management**: dotenv

## Project Structure

```
zorvyn-backend/
├── controllers/          # Request handlers for business logic
├── services/            # Business logic and data operations
├── repositories/        # Data access layer for MongoDB
├── models/              # Mongoose schemas (User, Record)
├── routes/
│   └── v1/             # API v1 endpoints
│       ├── AuthRoutes.js
│       ├── UserRoutes.js
│       ├── RecordsRoutes.js
│       ├── DashboardRoutes.js
│       └── V1Routes.js
├── middlewares/         # Express middlewares
│   ├── Authenticator.js    # JWT verification
│   ├── ErrorHandler.js     # Centralized error handling
│   ├── RoleValidator.js    # Role-based authorization
│   └── Validator.js        # Request validation
├── dto/                 # Data Transfer Objects
├── validators/          # Validation schemas
├── errors/              # Custom error classes
├── lib/                 # Utility functions and constants
├── index.js            # Application entry point
└── package.json        # Dependencies and metadata
```

## Installation

### Prerequisites

- Node.js 16+ 

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zorvyn-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```
   NODE_ENV=dev
   MONGODB_URI=your_mongo_atlast_uri
   JWT_SECRET=your_secret_key_here
   JWT_EXPIRY=7d
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication (`/v1/auth`)
- `POST /login` - Authenticate user and receive JWT token
- `POST /signup` - Register a new user

### Users (`/v1/users`)
- `POST /create` - Create a new user (admin only)
- `GET /all` - Get all users (admin only)
- `PATCH /:id/role` - Update user role (admin only)
- `PATCH /:id/status` - Update user status/active flag (admin only)
- `DELETE /delete/:id` - Delete a user (admin only)

### Records (`/v1/records`)
- `POST /` - Get/fetch records with query parameters
- `POST /create` - Create a new record (admin only)
- `PATCH /:id` - Update a record (admin only)
- `DELETE /:id` - Delete a record (admin only)

### Dashboard (`/v1/dashboard`)
- `GET /summary` - Get overall dashboard summary (admin/analyst)
- `GET /category` - Get category-wise summary (admin/analyst)
- `GET /category/:category` - Get summary for specific category (admin/analyst)
- `GET /recent` - Get recent records (admin/analyst)
- `GET /trends/weekly` - Get weekly trends (admin/analyst)
- `GET /trends/monthly` - Get monthly trends (admin/analyst)

## User Roles

The system supports three user roles with different permission levels:

| Role | Permissions |
|------|-------------|
| **viewer** | Limited read access to records |
| **analyst** | Read access to records and dashboard analytics |
| **admin** | Full access including user management, record operations, and all dashboard features |

**Default Admin Credentials:**
**email**: brucewayne@example.com
**password**: batman123

## Authentication

The API uses JWT (JSON Web Token) for authentication:

1. Register or login to obtain a JWT token
2. Include the token in the `Authorization` header of requests:
   ```
   Authorization: Bearer <your_jwt_token>
   ```

## Error Handling

The API provides structured error responses with appropriate HTTP status codes:

```json
{
  "message": "User with email as something@example.com does not exist.",
}
```

### Common Error Cases
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `409` - Conflict (user already exists)
- `500` - Internal Server Error


### Scripts

Add scripts to `package.json` for common tasks:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "NODE_ENV=test jest"
  }
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | Secret key for JWT signing | Required |
| `JWT_EXPIRY` | JWT token expiration time | `7d` |
| `PORT` | Server port | `3000` |

## Best Practices Implemented

- **Separation of Concerns** - Clear separation between controllers, services, and repositories
- **DTOs** - Data Transfer Objects for request/response consistency
- **Validation** - Input validation on all endpoints using Joi
- **Error Handling** - Centralized error middleware
- **Security** - Password hashing with bcrypt, JWT authentication
- **Scalability** - Modular structure ready for expansion