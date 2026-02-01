# YouTube Clone MERN Project

This is a complete YouTube Clone Capstone Project built using the MERN stack, hardened for stability and designed for seamless academic evaluation.

## 🚀 Deployment Link (GitHub)

[https://github.com/gopu0106/Capstone-Project.git](https://github.com/gopu0106/Capstone-Project.git)

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Axios, Lucide React, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt
- **Styling**: Vanilla CSS (Modern Premium UI with Glassmorphism)

---

## 🏃‍♂️ Proper Running Instructions (Step-by-Step)

### 1. Prerequisites

- **Node.js**: Installed (v16.x or higher)
- **MongoDB**: Running locally (`mongodb://localhost:27017`) or an Atlas URI

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder and add:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/youtube_clone
JWT_SECRET=your_super_secret_jwt_key
```

- Start the backend server:

```bash
npm run dev
```

> **Note**: On the first start, the database will **automatically seed** with 6+ sample videos, sample users, and comments for immediate testing.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🧪 Testing Guide for Evaluators

### 1. Public Features (No Login Required)

- **Home Page**: Browse the automatically seeded video grid.
- **Search**: Search for videos by title using the top bar.
- **Video Player**: Click any video to watch it. The player uses HTML5 with dynamic sources.
- **Comments**: View existing comments under each video.

### 2. Authenticated Features

**Sample Credentials:**

- **Email**: `test@example.com`
- **Password**: `password123`

**Actions after login:**

- **Like/Dislike**: Toggle likes/dislikes on any video (persists to DB).
- **Comment CRUD**: Add new comments, edit your own comments, or delete them.
- **Channel Studio**: Upload your own videos or manage existing ones.

---

## 🛡️ Hardening & Stability Features

- **Zero-Crash First Load**: Defensive coding (optional chaining/null checks) prevents "undefined" errors even on fresh machines.
- **Graceful Error Handling**: Handlers for database connection failures and malformed localStorage data.
- **ES Modules**: Modern code structure using `import/export`.

---

## 👨‍💻 Author

**Gopal Ramesh Tengale**
Project for Internshala MERN Stack Capstone.
