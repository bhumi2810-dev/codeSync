# CodeSync — Real-Time Collaborative Code Editor & Review Platform

> A unified platform where students and developers can code together in real time, review each other's work, chat, track versions, and safely run code — all in one place.

## Overview

**CodeSync** is a real-time collaborative coding platform that brings together live code editing, code review, chat, version history, and secure code execution in a single workspace.

The platform is designed to simplify collaborative development — from creating a coding room and inviting teammates, to editing code together live, reviewing it with inline comments, and running it safely, all without switching between tools.

## Key Features

### Authentication

* Secure signup and login
* JWT-based session handling
* Password hashing with bcrypt
* Protected, role-aware routes

### Coding Rooms

* Create rooms and invite collaborators
* Join existing rooms via room ID
* Role-based access — Owner, Editor, Viewer

### Real-Time Collaborative Editing

* Multiple users editing the same code simultaneously
* Conflict-free synchronization using CRDTs (Yjs)
* Live cursor positions and presence indicators

### Code Review System

* Add inline comments on specific lines of code
* Comment types — Bug, Suggestion, Explanation
* Resolve or delete comments
* Works on manually written, pasted, or AI-generated code

### Real-Time Chat

* Dedicated chat per coding room
* Full message history
* Real-time delivery over WebSockets

### Version History

* Save snapshots of code at any point
* View and revisit previous versions
* Restore older versions when needed

### Secure Code Execution

* Run JavaScript and Python code directly in the platform
* Execution happens inside isolated Docker containers
* No internet access, memory/CPU limits, and execution timeouts

---

## Tech Stack

### Frontend

* **React.js (TypeScript)**
* **Monaco Editor**
* **WebSocket Client / Yjs**

### Backend

* **Node.js**
* **Express.js (TypeScript)**
* **Prisma ORM**
* **PostgreSQL**

### Real-Time Layer

* **WebSockets**
* **Yjs (CRDT-based collaboration)**

### Authentication

* **JWT**
* **bcrypt**

### Code Execution

* **Docker**
* **Dockerode**

### Development Tools

* **Git**
* **GitHub**
* **VS Code**
* **npm**

---

## Project Structure

```text
codesync/
│
├── codesync-server/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── docker/
│   │   ├── javascript/
│   │   └── python/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── websocket/
│   │   ├── execution/
│   │   ├── validators/
│   │   ├── lib/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
├── codesync-client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/codesync.git
```

Navigate to the backend:

```bash
cd codesync/codesync-server
npm install
```

Set up the database:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Build the Docker images used for code execution:

```bash
docker build -t codesync-js -f docker/javascript/Dockerfile docker/javascript
docker build -t codesync-python -f docker/python/Dockerfile docker/python
```

Start the backend server:

```bash
npm run dev
```

The backend will be available at `http://localhost:5000`.

Navigate to the frontend:

```bash
cd ../codesync-client
npm install
npm run dev
```

The application will be available at the local development URL provided by the frontend dev server.

---

## Environment Variables

Create a `.env` file inside the `codesync-server` directory:

```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/codesync"
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

> Never commit sensitive credentials, API keys, or secrets to GitHub.

---

## Application Modules

| Module              | Description                                     |
| ------------------- | ------------------------------------------------ |
| Authentication       | Signup, login, and protected route access        |
| Rooms                 | Create and join collaborative coding rooms       |
| Real-Time Editing     | Live, conflict-free collaborative code editing   |
| Presence              | Track online users and cursor positions          |
| Code Review           | Inline comments on code with resolve/delete      |
| Chat                    | Real-time messaging per room                    |
| Version History      | Save, list, and restore code snapshots           |
| Code Execution        | Run code safely inside isolated Docker containers |

---

## Future Enhancements

* Redis integration for presence and session scaling
* Rate limiting on the code execution endpoint
* Automated testing (unit and integration)
* Support for additional programming languages
* CI/CD-based deployment
* Mobile-responsive UI improvements

---

## Project Status

**Backend fully implemented. Frontend in final stages of development.**

All core backend modules — authentication, rooms, real-time collaboration, code review, chat, version history, and secure code execution — are complete and tested. Frontend integration is in progress.

---

## Team

Built as a team project as part of Back-end Engineering coursework at Chitkara University.

---

## License

This project is currently intended for educational purposes.
