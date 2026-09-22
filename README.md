# User Registration System (Full Stack) 🚀🔐

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

## About the Project ✨

This project, developed as part of my learning journey at [DevClub](https://www.devclub.com.br/), has been **significantly enhanced and expanded** to become a robust **full-stack user registration system**. Going **far beyond the initial scope**, it features a modern frontend built with **React and Vite**, and a powerful backend powered by **Node.js, Prisma, and MongoDB**.

My primary goal was to create a secure, efficient, and user-friendly registration process. Key improvements include a **highly refined user interface** with a thematic SVG image, and **robust client-side validations** ensuring all required fields are completely filled, email formats are valid, and age inputs are positive integers. The backend handles data persistence and API logic, providing a complete end-to-end solution.

With this project, I demonstrate strong skills in both frontend and backend development, database integration, API communication, and a keen focus on user experience and data integrity.

---

## 💻 Technologies Used

Here are the technologies I used to build this project:

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/axios-6710F5?style=for-the-badge&logo=axios&logoColor=white)
![Prop-Types](https://img.shields.io/badge/Prop--Types-000000?style=for-the-badge&logo=react&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### General
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

## ✨ Features

*   **User Registration:** Allows new users to register with name, email, and age.

*   **Robust Client-Side Validation:** Ensures all fields are completely filled, email is in a valid format, and age is a positive integer (greater than 0).

*   **Modern Frontend with React:** Interactive and dynamic user interface for a smooth experience.

*   **Backend API (Node.js/Express):** Handles registration requests and interacts with the database.

*   **Database Persistence (MongoDB with Prisma):** Stores user data securely and efficiently.

*   **Thematic UI Enhancements:** Includes a relevant SVG image to improve the interface aesthetics.

*   **Responsive Design:** Adapts to different screen sizes for optimal viewing on various devices.

---

## 📸 Project Visualization

Check out the design and functionality of the registration system:

<p align="center">
   <img src="https://raw.githubusercontent.com/lucaspalmasanches/User_Registration/main/React/src/assets/User_Registration-Video.gif" alt="User Registration System Demo" width="80%">
</p>

---

## 🚀 How to Run the Project (Locally)

To run this full-stack project on your local machine, follow the steps below. You will need to set up both the backend and frontend.

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)

*   [Yarn](https://yarnpkg.com/) (for frontend dependencies)

*   [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud instance like MongoDB Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/lucaspalmasanches/User_Registration.git
cd User_Registration
````

### 2. Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd node
    ```

2.  **Install dependencies (using npm):**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    *   **Create a `.env` file** in the `backend` directory.
    *   Add your MongoDB connection string and any other necessary backend variables.
    *   Example `.env`:
        ```
        DATABASE_URL="mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/YOUR_DATABASE?retryWrites=true&w=majority"
        PORT=3000 # Or any preferred port
        ```
        *   **Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, `YOUR_CLUSTER`, and `YOUR_DATABASE` with your actual MongoDB credentials.**
    *   **Important:** Ensure `backend/.gitignore` includes `.env` to prevent committing sensitive information.

4.  **Generate Prisma Client and Push Schema to Database:**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Start the Backend Server:**
    *   For **development with auto-reload** (recommended):
        ```bash
        node --watch server.js
        ```
    *   Alternatively, for a standard run (or if `server.js` is not your entry point, adjust command as needed):
        ```bash
        npm start # Or 'npm run dev' if you have a dev script
        ```
    *   The backend server should start, usually on `http://localhost:3000`.
      
### 3. Frontend Setup

1.  **Navigate to the frontend directory (from the root of the project):**
    ```bash
    cd ../react
    ```

2.  **Install dependencies (using Yarn):**
    ```bash
    yarn install
    ```

3.  **Configure Environment Variables (if needed):**
    *   If your frontend needs to know the backend API URL (e.g., `http://localhost:3000`), you might need a `.env` file in the `frontend` directory.
    *   **Create a `.env` file** in the `frontend` directory.
    *   Example `.env` (for Vite, variables usually start with `VITE_`):
        ```
        VITE_API_URL="http://localhost:3000"
        ```
    *   **Important:** Ensure `frontend/.gitignore` includes `.env`.

4.  **Start the Frontend Development Server:**
    ```bash
    yarn dev
    ```
    *   The frontend application should open in your browser, usually on `http://localhost:5173`.

Now you can interact with the full-stack user registration system locally!

---

## 📚 Learnings

This project was an incredibly challenging and rewarding experience, consolidating and expanding my knowledge in:

*   **Full-Stack Development:** Integrating frontend (React/Vite) and backend (Node.js/Prisma/MongoDB) for a complete application.

*   **React.js and Vite:** Building modern, component-based user interfaces with a fast development setup.

*   **Node.js and Express.js:** Developing robust server-side APIs.

*   **Prisma ORM:** Efficiently managing database interactions and schema with an Object-Relational Mapper.

*   **MongoDB Database:** Working with NoSQL databases for flexible data storage.

*   **Robust Client-Side Validation:** Implementing comprehensive form validations (email format, age constraints, required fields) for improved user experience and data integrity.

*   **API Integration (Axios):** Consuming backend APIs from the frontend for data exchange.

*   **DOM Manipulation (React Context):** Managing UI updates and component states effectively.

*   **User Experience (UX) and UI Enhancements:** Focusing on intuitive design, clear feedback, and aesthetic improvements (e.g., SVG image).

*   **Package Managers:** Utilizing both `npm` (for backend) and `yarn` (for frontend) effectively.

*   **Responsive Design:** Ensuring the application adapts to various screen sizes.

*   **Security in Development:** Proper management of sensitive information using `.env` and `.gitignore`.

*   **Version Control:** Efficient code management with Git and GitHub.

---

## Let's Connect! 🤝

I'm always open to new connections, opportunities, and challenges. Feel free to reach out!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-palma-sanches-dev)
[![E-mail](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lucaspalma331@gmail.com)
