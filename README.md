# User Management Dashboard

A full-stack web application for managing users stored in an MS SQL Server database. Features include listing, searching, paginating, adding, editing, and deleting users, with support for toggling admin status and blocking access.

---

## Tech Stack

| Layer    | Technology                                                    |
|----------|---------------------------------------------------------------|
| Frontend | React 19, TypeScript, React Hook Form, Zod, Styled Components |
| Table    | TanStack React Table v8                                       |
| Backend  | Node.js, Express 5                                            |
| Database | Microsoft SQL Server (mssql)                                  |
| Notify   | react-hot-toast                                               |

---

## Prerequisites

- Node.js >= 18
- Access to an MS SQL Server instance with a `Users` table

### Expected Database Schema

The application expects a `Users` table with at least the following columns:

```sql
CREATE TABLE Users (
  UserID                INT IDENTITY PRIMARY KEY,
  DisplayName           NVARCHAR(256),
  Email                 NVARCHAR(256),
  MFA_Mobile            NVARCHAR(50),
  AdminUser             BIT,
  O365Email             NVARCHAR(256),
  BlockAccess           BIT,
  IsOSPAdmin            BIT,
  Status                NVARCHAR(50),
  FunctionalUser        BIT,
  ColourMode            CHAR(1),
  HierarchyMaintenance  BIT
);
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/VicTyslenko/users-table-task.git
cd users-table-task
```

### 2. Configure environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then fill in your values:

```env
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_SERVER=your-server.database.windows.net
DB_DATABASE=your_database_name
PORT=3001
CORS_ORIGIN=http://localhost:3000
REACT_APP_API_URL=http://localhost:3001/api
```

### 3. Install dependencies

**Backend** (from root):

```bash
npm install
```

**Frontend**:

```bash
cd client
# If you hit peer dependency conflicts (TS version):
npm install --legacy-peer-deps
```

### 4. Start the app

**Backend** (from root):

```bash
npm start        # production
npm run dev      # development with nodemon
```

**Frontend** (from `client/`):

```bash
npm start
```

The frontend runs on `http://localhost:3000` and the API on `http://localhost:3001`.

---

## API Endpoints

| Method | Endpoint                    | Description       |
|--------|-----------------------------|-------------------|
| GET    | `/api/users`                | Fetch all users   |
| POST   | `/api/users/create-user`    | Create a new user |
| PUT    | `/api/users/edit-user/:id`  | Update a user     |
| DELETE | `/api/users/:id`            | Delete a user     |

---

## Project Structure

```
users-table-task/
├── config/          # DB connection config
├── controllers/     # Express route handlers
├── routes/          # API routes
├── index.js         # Express entry point
└── client/          # React frontend
    └── src/
        ├── mods/    # Feature modules (table, forms, etc.)
        ├── pages/   # Page-level components & hooks
        ├── services/api/  # Axios instance & API calls
        └── shared/  # Reusable components & models
```
