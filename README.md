# FullStack-Todo-MERN-Application-with-DOCKER

This is a **Full-Stack Todo Application** built using the MERN stack (MongoDB, Express, React, Node.js). The application is fully containerized using Docker and includes features like user authentication, creating, updating, and deleting todos. The backend is written in TypeScript, and the frontend is built with React.

## Features

- **User Authentication**: Signup and login with JWT authentication.
- **Todo Management**: Create, retrieve, update, and delete todos.
- **Multi-User Support**: Each user can manage their own todos.
- **Fully Containerized**: Dockerized frontend, backend, and database services for easy deployment.
- **RESTful API**: Backend services exposed via a REST API.

---

## Technologies Used

### Frontend:
- **React**: UI development.
- **Vite**: Fast development server.
- **TypeScript**: Type-safe development.
- **Tailwind CSS**: For styling.

### Backend:
- **Node.js**: JavaScript runtime.
- **Express.js**: Backend framework.
- **TypeScript**: Type-safe server logic.
- **MongoDB**: NoSQL database.

### DevOps:
- **Docker**: Containerization for all services.
- **Docker Compose**: Multi-container orchestration.

---

## Project Structure

```
project-root/
|-- web/                # Frontend code
|   |-- src/            # React components, hooks, etc.
|-- api/                # Backend code
|   |-- src/            # API routes, models, controllers, etc.
|-- docker-compose.yml  # Multi-container setup
|-- README.md           # Project documentation
```

---

## Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/) (and Docker Compose)
- Node.js and npm (if running without Docker)
- MongoDB (if running without Docker)

---

## Setup and Installation

### Using Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/FaizanQureshi1220/FullStack-Todo-MERN-Application-with-DOCKER.git
   cd FullStack-Todo-MERN-Application-with-DOCKER
   ```

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000/api](http://localhost:5000/api)

### Without Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/FaizanQureshi1220/FullStack-Todo-MERN-Application-with-DOCKER.git
   cd FullStack-Todo-MERN-Application-with-DOCKER
   ```

2. Set up the backend:
   ```bash
   cd api
   npm install
   npm run dev
   ```

3. Set up the frontend:
   ```bash
   cd web
   npm install
   npm run dev
   ```

4. Start MongoDB (if not running via Docker).

---

## Environment Variables

Create `.env` files for both frontend and backend to configure environment-specific variables.

### Backend `.env` example:
```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/todo-app
JWT_SECRET=your_secret_key
```

## Docker Compose Configuration

Here is an overview of the `docker-compose.yml` configuration:

```yaml
version: '3.8'
services:
  backend:
    build: ./api
    ports:
      - "5000:5000"
    env_file:
      - ./api/.env
    depends_on:
      - mongo

  frontend:
    build: ./web
    ports:
      - "3000:3000"
    env_file:
      - ./web/.env

  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

---
