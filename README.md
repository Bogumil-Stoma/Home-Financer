# Home-Financer

A full-stack application built with NestJS and React to track household expenses, manage investments, and monitor currency markets.

---

## 🚀 Quick Start (Docker)

The easiest way to get the entire stack (Database, Backend, Frontend) running is via Docker Compose.

### 1. Environment Setup

Copy the default environment variables to a local `.env` file:

```bash
cp .env.default .env
````

> Make sure to update the values in `.env` if necessary.

---

### 2. Run Everything (Full Stack)

Use the dev compose file to build and start all services:

```bash
docker compose -f docker-compose-dev.yml up --build
```

---

### 3. Run Database Only

If you want to run the apps locally but use a Dockerized database:

```bash
docker compose up -d
```

---

## 🛠 Local Development

If you prefer to run the services outside of Docker for better Hot Module Replacement (HMR) performance:

### Prerequisites

* Node.js (v20+ recommended)
* Docker (for the database)

---

### Installation

```bash
# Install Backend dependencies
cd backend && npm install

# Install Frontend dependencies
cd ../frontend && npm install
```

---

### Running the Apps

Start the database:

```bash
docker compose up -d
```

Start Backend (Dev mode):

```bash
cd backend
npm run start:dev
```

Start Frontend (Vite):

```bash
cd frontend
npm run dev
```

---

## 🏗 Database & Migrations

The project uses TypeORM (or Prisma) for database management.

### Run Migrations

```bash
cd backend
npm run migration:run
```

### Generate Migration (after entity changes)

```bash
npm run migration:generate -- name=MigrationName
```

### Revert Migration

```bash
npm run migration:revert
```


