# Student-Course-Enroll

This repository provides a comprehensive guide on setting up and running a Node.js application in a Docker container with PostgreSQL and pgAdmin. This configuration allows for the development and execution of a student enrollment system. The project features include students and course CRUD operations and the ability for students to enroll in courses. You can also retrieve a list of students by course.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

- **Docker Compose:** If you don't have Docker Compose installed, follow the steps below to install it:

  - **Linux (Ubuntu 22.04):**

    For Ubuntu 22.04, you can follow this detailed tutorial on DigitalOcean to install and use Docker Compose: [How To Install and Use Docker Compose on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

  - **macOS:**

    Docker Compose is typically included with Docker Desktop on macOS. You don't need to install it separately.

  - **Windows:**

    Docker Compose is included with Docker Desktop on Windows. If you're using Docker Desktop for Windows, you should already have Docker Compose installed.

## Getting Started

Follow these steps to set up the environment and run the application:

### 1. Clone the Repository

Clone the repository that contains your Node.js application and the Docker configuration files.

```bash
sudo git clone https://github.com/rakeshreddy4741/student-course-enroll.git
cd student-course-enroll
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
sudo docker-compose up --build
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

---

## Project Features

### 1. Students and Course CRUD Operations

This project enables you to perform Create, Read, Update, and Delete (CRUD) operations for both students and courses. You can add, view, modify, and delete student and course records through the provided application.

### 2. Student Enrollment

Students can enroll in courses, allowing for a clear record of which students are taking which courses. This feature provides a streamlined way to manage student enrollment and course assignments.

### 3. Get Students List by Course

You have the ability to retrieve a list of students who are enrolled in a specific course. This feature is particularly useful for tracking the student composition of each course.

Enjoy using this student-course enrollment system, and feel free to explore and enhance its functionality as needed!
