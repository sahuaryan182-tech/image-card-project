
# 🖼️ Image Card Generator with Filename Preprocessing

### A full-stack web app that turns image uploads into beautifully formatted cards — with smart filename preprocessing, JSON storage, and a dynamic frontend display.

[Features](#-features) · [Tech Stack](#-tech-stack) · [Project Structure](#-project-structure) · [Installation](#-installation) · [API Reference](#-api-reference) · [Deployment](#-deployment) · [Roadmap](#-roadmap)

</div>

---

## 📌 Overview

**Image Card Generator** is a full-stack web application that lets users upload a profile image along with their **name** and **course details**. The backend intelligently preprocesses the uploaded filename (cleaning, formatting, and normalizing it), generates a structured card entry, and stores it in a lightweight JSON file — no database required.

Cards are then fetched and rendered dynamically on the frontend in a clean, responsive layout.

> This project demonstrates real-world concepts including **file handling**, **REST API development**, **data preprocessing pipelines**, and **frontend-backend integration** — all without any external database dependency.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📤 Image Upload | Upload any image directly from the browser |
| 👤 User Details | Capture name and course information per card |
| 🧹 Filename Preprocessing | Automatically cleans and normalizes uploaded filenames |
| 🗂️ JSON Storage | Stores all card data in a flat JSON file — zero DB setup |
| 📋 Dynamic Card Display | Fetches and renders all cards on the frontend in real time |
| 🖼️ Static File Serving | Backend serves uploaded images as static assets |
| ✅ Validation & Error Handling | Graceful error responses for invalid inputs or missing files |

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** — Semantic structure
- **CSS3** — Styling and responsive layout
- **Vanilla JavaScript** — DOM manipulation, Fetch API

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — REST API framework
- **Multer** — Multipart form-data / file upload middleware
- **fs (File System)** — JSON read/write operations
- **CORS** — Cross-Origin Resource Sharing

---

## 📁 Project Structure

```
image-card-project/
│
├── backend/
│   ├── server.js            # Main Express server & API routes
│   ├── package.json         # Backend dependencies
│   ├── uploads/             # Stores uploaded image files
│   └── data/
│       └── cards.json       # JSON file storing all card entries
│
└── frontend/
    └── index.html           # Single-page frontend (HTML + CSS + JS)
```

---

## 🚀 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/sahuaryan182-tech/image-card-project.git
cd image-card-project
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Start the Server

```bash
# Production mode
npm start

# Development mode (with auto-restart via nodemon)
npm run dev
```

The server will start at:

```
http://localhost:5000
```

### 4. Open the Frontend

Open `frontend/index.html` directly in your browser, or use the **Live Server** extension in VS Code for the best experience.

---

## 🔌 API Reference

### `POST /upload` — Create a New Card

Uploads an image and creates a new card entry.

**Content-Type:** `multipart/form-data`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Full name of the user |
| `course` | `string` | ✅ | Course or program name |
| `image` | `file` | ✅ | Profile image to upload |

**Success Response:**
```json
{
  "message": "Card created successfully",
  "card": {
    "id": "1718000000000",
    "name": "Aryan Sahu",
    "course": "Full Stack Development",
    "image": "aryan-sahu.jpg"
  }
}
```

---

### `GET /cards` — Fetch All Cards

Returns an array of all stored card entries.

**Response:**
```json
[
  {
    "id": "1718000000000",
    "name": "Aryan Sahu",
    "course": "Full Stack Development",
    "image": "aryan-sahu.jpg"
  }
]
```

---

## 🧹 Filename Preprocessing

The backend automatically sanitizes uploaded filenames before storing them to ensure consistency and avoid file system issues.

**Rules Applied:**
- Convert to **lowercase**
- Replace **spaces** with hyphens (`-`)
- Remove **special characters** (`@`, `#`, `!`, etc.)
- Normalize **multiple hyphens**

**Example:**

```
My Photo 01.JPG   →   my-photo-01.jpg
Aryan@Image!.PNG  →   aryanimage.png
Course FINAL.jpeg →   course-final.jpeg
```

---

## ☁️ Deployment

### Backend → [Render](https://render.com)

1. Push project to GitHub
2. Go to [Render](https://render.com) → **New Web Service**
3. Connect your repository
4. Configure the service:

| Setting | Value |
|---|---|
| Build Command | `npm install` |
| Start Command | `node server.js` |
| Root Directory | `backend` |

5. Click **Deploy**

---

### Frontend → [Netlify](https://netlify.com)

1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `frontend/` folder into the deploy zone
3. Your site is live instantly ⚡

> **Note:** After deploying the backend, update the API base URL in `index.html` to point to your Render deployment URL instead of `localhost:5000`.

---

## 🗺️ Roadmap

- [ ] Integrate **MongoDB** for scalable persistent storage
- [ ] Add **JWT-based authentication**
- [ ] Edit and delete card functionality
- [ ] Image preview before upload
- [ ] Migrate frontend to **React.js**
- [ ] Build an **admin dashboard**
- [ ] Add **pagination** for large card collections
- [ ] Support drag-and-drop image upload

---

## 👨‍💻 Author

**Aryan Sahu**

GITHUB -> sahuaryan182-tech
---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

