# YouTube Clone MERN Project

This is a complete YouTube Clone Capstone Project built using the MERN stack, hardened for stability and designed for seamless academic evaluation.

##  Deployment Link (GitHub)

[https://github.com/gopu0106/Capstone-Project.git](https://github.com/gopu0106/Capstone-Project.git)

---

## Tech Stack

- **Frontend**: React, Vite, Axios, Lucide React, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, BcryptJS (Pure JS)
- **Styling**: Vanilla CSS (Modern Premium UI with Glassmorphism)

---

## Proper Running Instructions (Step-by-Step)

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

## 🔧 Troubleshooting (Smooth First-Try)

If you encounter issues on the first run, try these standard fixes:

### 1. "Cannot find module" or Architecture Mismatch (Mac/ARM64)

If either backend or frontend fails to start with a "missing binary" or "dlopen" error:

```bash
# In the project root, clean everything and reinstall
rm -rf backend/node_modules frontend/node_modules
cd backend && npm install
cd ../frontend && npm install
```

### 2. Port Conflicts

If port `5173` is busy, Vite might switch to `5174`. The backend is pre-configured to handle ports `5173`, `5174`, and `5175` via CORS automatically.

### 3. Database Connection

Ensure MongoDB is running locally before starting the backend. If you use MongoDB Atlas, update the `MONGODB_URI` in `.env`.

---

## Testing Guide for Evaluators

### 1. Public Features (No Login Required)

- **Home Page**: Browse the automatically seeded video grid.
- **Search**: Search for videos by title using the top bar.
- **Video Player**: Click any video to watch it.
- **Comments**: View existing comments under each video.

### 2. Authenticated Features

**Sample Credentials:**

- **Email**: `test@example.com`
- **Password**: `password123`

**Actions after login:**

- **Like/Dislike**: Toggle likes/dislikes on any video.
- **Comment CRUD**: Add, edit, or delete comments.
- **Channel Studio**: Upload or manage your own videos.

---

##  Hardening & Stability Features

- **Zero-Crash First Load**: Defensive coding (optional chaining/null checks) prevents "undefined" errors even on fresh machines.
- **Graceful Error Handling**: Handlers for database connection failures and malformed localStorage data.
- **ES Modules**: Modern code structure using `import/export`.

---

## Author

**Gopal Ramesh Tengale**
Project for Internshala MERN Stack Capstone.
