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
   git clone https://github.com/your-username/fullstack-todo-app.git
   cd fullstack-todo-app
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
   git clone https://github.com/your-username/fullstack-todo-app.git
   cd fullstack-todo-app
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

### Frontend `.env` example:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Authentication
- `POST /api/auth/signup`: Create a new user.
- `POST /api/auth/login`: Login and receive a JWT.

### Todos
- `GET /api/todos`: Get all todos for the logged-in user.
- `POST /api/todos`: Create a new todo.
- `PUT /api/todos/:id`: Update a todo.
- `DELETE /api/todos/:id`: Delete a todo.

---

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

## Screenshots

Include screenshots of your application to showcase features (e.g., login screen, todo list, etc.).

---

## Future Enhancements

- Add a search and filter feature for todos.
- Implement user roles (admin, user).
- Add unit and integration tests.
- Deploy the app to a cloud platform (e.g., AWS, Azure, or Heroku).

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any questions or feedback, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

