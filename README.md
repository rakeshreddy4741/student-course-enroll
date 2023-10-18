# student-course-enroll


This readme provides information on how to set up and run a Node.js application in a Docker container with PostgreSQL and pgAdmin. This configuration allows you to easily develop and run a student enrollment system. 

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

Follow these steps to set up the environment and run the application:

### 1. Clone the Repository

Clone the repository that contains your Node.js application and the Docker configuration files.

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Docker Compose Configuration

A `docker-compose.yml` file is provided to manage your application, PostgreSQL, and pgAdmin containers. Ensure that your `docker-compose.yml` file is correctly configured. 

In this file, you have three services:

- **app**: This is your Node.js application.
- **postgres**: This is the PostgreSQL database.
- **pgadmin-compose**: This is the pgAdmin container for database management.

### 3. Building the Docker Containers

Use the following commands to build and run your containers:

```bash
docker-compose up --build
```

This command will build the images, start the containers, and map the necessary ports. You will have your Node.js application running at port 6070, PostgreSQL running at port 8990, and pgAdmin running at port 3434.

### 4. Accessing the Application

Once the containers are up and running, you can access your Node.js application in your web browser at [http://localhost:6070](http://localhost:6070).

### 5. PostgreSQL Database

The PostgreSQL database is running in its own container. You can connect to it from your Node.js application using the following connection details:

- Host: `postgres` (the name of the PostgreSQL service in Docker Compose)
- User: `root`
- Password: `root`
- Database: `root`
- Port: `8990`

### 6. Accessing pgAdmin

To manage your PostgreSQL database, you can access pgAdmin in your web browser at [http://localhost:3434](http://localhost:3434). Use the following credentials to log in:

- Email: `db@rakesh.com`
- Password: `student_enrollment@db@23`

## Developing and Debugging

You can develop and debug your Node.js application as you normally would. Any changes made to your application code will be automatically reflected in the running container.

## Docker Commands

Here are some useful Docker commands for managing your containers:

- Start the containers: `docker-compose up`
- Start the containers in detached mode: `docker-compose up -d`
- Stop the containers: `docker-compose down`

## Additional Configuration

If you need to make additional configurations, please refer to the `Dockerfile` and `docker-compose.yml` for your application and PostgreSQL container.

That's it! You now have a Dockerized Node.js application with a PostgreSQL database and pgAdmin for easy development and management of your student enrollment system. Enjoy developing your application!
