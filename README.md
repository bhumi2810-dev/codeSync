# CodeSync — Real-Time Collaborative Code Editor & Review Platform

> A unified platform where students and developers can code together in real time, review each other's work, chat, track versions, and safely run code — all in one place.

## Overview

**CodeSync** is a real-time collaborative coding platform that brings together live code editing, code review, chat, version history, and secure code execution in a single workspace.

The platform is designed to simplify collaborative development — from creating a coding room and inviting teammates, to editing code together live, reviewing code with inline comments, chatting with collaborators, and safely executing code.

---

## Key Features

### Authentication

* Secure signup and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Request validation and authentication middleware

### Coding Rooms

* Create coding rooms
* Join existing rooms using a room ID
* Room membership management
* Role-based access for collaborators

### Real-Time Collaborative Editing

* Multiple users can work in the same coding room
* Real-time synchronization using WebSockets
* Conflict-free collaboration using Yjs / CRDT
* Room-based collaboration
* User presence handling

### Code Review System

* Add comments to code
* Support for different comment types such as bugs, suggestions, and explanations
* Resolve and manage comments
* Review code collaboratively inside the coding workspace

### Real-Time Chat

* Dedicated chat for coding rooms
* Persistent chat messages
* Real-time message delivery using WebSockets
* Chat history management

### Version History

* Save code snapshots
* Retrieve previous snapshots
* Restore previous versions
* Track code changes over time

### Secure Code Execution

* Execute JavaScript and Python code
* Docker-based isolated execution
* Separate execution services for supported languages
* Execution timeout and resource-control mechanisms
* Backend execution service for handling code execution requests

---

## Tech Stack

### Frontend

* **React.js**
* **TypeScript**
* **Vite**
* **Monaco Editor**
* **Yjs**
* **WebSocket Client**
* **CSS**

### Backend

* **Node.js**
* **Express.js**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**

### Real-Time Layer

* **WebSockets**
* **Yjs**
* **CRDT-based synchronization**
* **Presence handling**

### Authentication & Security

* **JWT**
* **bcrypt**
* Authentication middleware
* Validation middleware
* Error-handling middleware

### Code Execution

* **Docker**
* **Dockerode**
* JavaScript execution
* Python execution

### Development Tools

* **Git**
* **GitHub**
* **VS Code**
* **npm**
* **Prisma CLI**

---

# Project Structure

```text
codeSync/
│
├── backend/
│   │
│   ├── .agents/
│   │   └── skills/
│   │       ├── prisma-cli/
│   │       ├── prisma-client-api/
│   │       ├── prisma-compute/
│   │       ├── prisma-database-setup/
│   │       ├── prisma-driver-adapter-implementation/
│   │       ├── prisma-mongodb-upgrade/
│   │       ├── prisma-postgres/
│   │       ├── prisma-postgres-setup/
│   │       └── prisma-upgrade-v7/
│   │
│   ├── prisma/
│   │   ├── migrations/
│   │   │   ├── 20260729073038_init/
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── config.ts
│   │   │   └── env.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── chat.controller.ts
│   │   │   ├── comment.controller.ts
│   │   │   ├── membership.controller.ts
│   │   │   ├── room.controller.ts
│   │   │   └── snapshot.controller.ts
│   │   │
│   │   ├── execution/
│   │   │   ├── docker.service.ts
│   │   │   ├── execution.service.ts
│   │   │   └── languages/
│   │   │       ├── javascript.executor.ts
│   │   │       └── python.executor.ts
│   │   │
│   │   ├── lib/
│   │   │   ├── jwt.ts
│   │   │   ├── prisma.ts
│   │   │   └── redis.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── validation.middleware.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── chat.routes.ts
│   │   │   ├── comment.routes.ts
│   │   │   ├── membership.routes.ts
│   │   │   ├── room.routes.ts
│   │   │   └── snapshot.routes.ts
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── chat.service.ts
│   │   │   ├── comment.service.ts
│   │   │   ├── membership.service.ts
│   │   │   ├── room.service.ts
│   │   │   └── snapshot.service.ts
│   │   │
│   │   ├── types/
│   │   │   ├── auth.types.ts
│   │   │   ├── chat.types.ts
│   │   │   ├── comment.types.ts
│   │   │   ├── room.types.ts
│   │   │   └── snapshot.types.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── errors.ts
│   │   │   ├── password.ts
│   │   │   └── response.ts
│   │   │
│   │   ├── validators/
│   │   │   ├── auth.validator.ts
│   │   │   ├── chat.validator.ts
│   │   │   ├── comment.validator.ts
│   │   │   └── room.validator.ts
│   │   │
│   │   ├── websocket/
│   │   │   ├── presence.handler.ts
│   │   │   ├── room.handler.ts
│   │   │   ├── websocket.server.ts
│   │   │   └── yjs.handler.ts
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── CodeSync/
│   │   └── README.md
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   ├── tsconfig.json
│   ├── README.md
│   └── skills-lock.json
│
├── frontend/
│   │
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   └── hero.png
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── chat/
│   │   │   │   └── ChatPanel.tsx
│   │   │   │
│   │   │   ├── common/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Loader.tsx
│   │   │   │   └── Logo.tsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── ActionCard.tsx
│   │   │   │   ├── CreateRoomModal.tsx
│   │   │   │   ├── DashboardHeader.tsx
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   ├── JoinRoomModal.tsx
│   │   │   │   ├── RecentRooms.tsx
│   │   │   │   ├── RoomCard.tsx
│   │   │   │   └── WelcomeBanner.tsx
│   │   │   │
│   │   │   ├── editor/
│   │   │   │   ├── CodeEditor.tsx
│   │   │   │   ├── CollaboratorsPanel.tsx
│   │   │   │   ├── EditorHeader.tsx
│   │   │   │   ├── EditorLayout.tsx
│   │   │   │   ├── FileExplorer.tsx
│   │   │   │   └── OutputConsole.tsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── AuthLayout.tsx
│   │   │   │   └── MainLayout.tsx
│   │   │   │
│   │   │   └── review/
│   │   │       └── CodeReviewPanel.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── EditorPage.tsx
│   │   │   ├── ForgotPasswordPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── ProfilePage.tsx
│   │   │   └── SignupPage.tsx
│   │   │
│   │   ├── styles/
│   │   │   └── theme.css
│   │   │
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── .gitignore
│   ├── .oxlintrc.json
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
└── README.md
```

> **Note:** `node_modules/` directories are intentionally excluded from the project structure because they are generated automatically by npm and should not be committed to GitHub.

---

# Backend Architecture

The backend follows a modular architecture where responsibilities are separated into controllers, services, routes, middleware, validation, execution, and real-time communication layers.

### `src/config/`

Contains application configuration and environment-variable handling.

* `config.ts` — application configuration
* `env.ts` — environment variable management

### `src/controllers/`

Handles incoming API requests and communicates with the service layer.

* `auth.controller.ts`
* `chat.controller.ts`
* `comment.controller.ts`
* `membership.controller.ts`
* `room.controller.ts`
* `snapshot.controller.ts`

### `src/services/`

Contains the main business logic.

* `auth.service.ts`
* `chat.service.ts`
* `comment.service.ts`
* `membership.service.ts`
* `room.service.ts`
* `snapshot.service.ts`

### `src/routes/`

Defines backend API routes.

* `auth.routes.ts`
* `chat.routes.ts`
* `comment.routes.ts`
* `membership.routes.ts`
* `room.routes.ts`
* `snapshot.routes.ts`

### `src/middleware/`

Provides reusable middleware for authentication, validation, and error handling.

* `auth.middleware.ts`
* `error.middleware.ts`
* `validation.middleware.ts`

### `src/execution/`

Responsible for secure code execution.

* `docker.service.ts` — Docker-related execution management
* `execution.service.ts` — execution orchestration
* `languages/javascript.executor.ts` — JavaScript execution
* `languages/python.executor.ts` — Python execution

### `src/websocket/`

Handles real-time communication.

* `websocket.server.ts`
* `room.handler.ts`
* `presence.handler.ts`
* `yjs.handler.ts`

### `src/lib/`

Contains shared infrastructure utilities.

* `jwt.ts`
* `prisma.ts`
* `redis.ts`

### `src/validators/`

Contains request validation logic.

* `auth.validator.ts`
* `chat.validator.ts`
* `comment.validator.ts`
* `room.validator.ts`

### `src/types/`

Contains TypeScript type definitions used throughout the backend.

### `src/utils/`

Contains reusable utilities for errors, passwords, and API responses.

---

# Database

CodeSync uses **PostgreSQL** as its database and **Prisma ORM** for database access.

The Prisma setup is located inside:

```text
backend/
└── prisma/
    ├── schema.prisma
    └── migrations/
```

### Prisma

* `schema.prisma` — database schema and models
* `migrations/` — database migration history
* `prisma.config.ts` — Prisma configuration

---

# Frontend Architecture

The frontend is built using **React + TypeScript + Vite**.

### Pages

The application currently contains:

* `LoginPage.tsx`
* `SignupPage.tsx`
* `ForgotPasswordPage.tsx`
* `DashboardPage.tsx`
* `EditorPage.tsx`
* `ProfilePage.tsx`

### Components

The UI is divided into reusable component groups.

#### Common Components

* Button
* Card
* Input
* Loader
* Logo

#### Dashboard Components

* Action Card
* Create Room Modal
* Join Room Modal
* Dashboard Header
* Empty State
* Recent Rooms
* Room Card
* Welcome Banner

#### Editor Components

* Code Editor
* Collaborators Panel
* Editor Header
* Editor Layout
* File Explorer
* Output Console

#### Chat

* Chat Panel

#### Review

* Code Review Panel

#### Layout

* Authentication Layout
* Main Layout

---

# Getting Started

## Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* Git
* VS Code

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/codesync.git
cd codesync
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/codesync"
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

> Never commit `.env` files, passwords, database credentials, JWT secrets, or other sensitive information to GitHub.

---

## 4. Setup Prisma

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

---

## 5. Start the Backend

```bash
npm run dev
```

The backend server will run on the configured local port, typically:

```text
http://localhost:5000
```

---

## 6. Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

# Application Modules

| Module            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| Authentication    | Signup, login, JWT authentication and protected routes |
| Rooms             | Create and join collaborative coding rooms             |
| Membership        | Manage users and room roles                            |
| Real-Time Editing | Collaborative code editing using WebSockets and Yjs    |
| Presence          | Track connected collaborators                          |
| Code Review       | Code comments and review management                    |
| Chat              | Real-time room-based messaging                         |
| Version History   | Store and restore code snapshots                       |
| Code Execution    | Execute JavaScript and Python code through the backend |
| Database          | PostgreSQL database managed using Prisma ORM           |

---

# API & Real-Time Communication

CodeSync uses two communication mechanisms:

### REST APIs

Used for operations such as:

* Authentication
* Room management
* Membership management
* Chat history
* Comments
* Snapshots

### WebSockets

Used for real-time operations such as:

* Collaborative editing
* Room events
* User presence
* Real-time chat
* Yjs synchronization

---

# Code Execution Architecture

Code execution is handled by the backend execution module.

```text
User
  │
  ▼
Frontend
  │
  ▼
Backend Execution Service
  │
  ▼
Docker Service
  │
  ├── JavaScript Executor
  │
  └── Python Executor
```

The execution layer is designed to isolate submitted code from the main backend application.

---

# Security

CodeSync includes multiple security mechanisms:

* JWT-based authentication
* Password hashing using bcrypt
* Protected API routes
* Request validation
* Centralized error handling
* Isolated code execution
* Docker-based execution environment
* Environment variables for sensitive configuration

---

# Future Enhancements

* Redis-based presence scaling
* Rate limiting for code execution
* Automated unit and integration testing
* Support for additional programming languages
* CI/CD deployment
* Cloud deployment
* Improved code-review workflows
* Mobile-responsive improvements
* Advanced room permissions
* Collaborative file management

---

# Project Status

**Backend:** Core backend modules are implemented, including authentication, rooms, memberships, chat, code review, snapshots, WebSocket communication, and code execution services.

**Frontend:** Core pages and reusable UI components are implemented. Frontend-backend integration and real-time feature integration are in progress.

**Overall:** Active development.

---

# Team

Built as a team project as part of **Back-end Engineering coursework at Chitkara University**.

---

# License

This project is currently intended for **educational purposes**.
