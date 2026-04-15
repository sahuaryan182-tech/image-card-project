<<<<<<< HEAD
# image-card-project
=======
# Image Card Generator with Filename Preprocessing

## Overview

This project is a full-stack web application that allows users to upload an image along with their name and course details. The backend processes the uploaded image filename, generates a clean formatted version, and creates a card containing all the information. The data is stored in a JSON file and displayed dynamically on the frontend.

The project demonstrates file handling, backend API development, data preprocessing, and frontend-backend integration.

---

## Features

- Upload image from frontend  
- Input user name and course  
- Filename preprocessing (clean and formatted)  
- Generate and store card data  
- JSON-based storage (no database required)  
- Fetch and display all cards  
- Static image serving from backend  
- Error handling and validation  

---

## Tech Stack

### Frontend
- HTML  
- CSS  
- JavaScript  

### Backend
- Node.js  
- Express.js  
- Multer (file upload)  
- File System (fs)  
- CORS  

---

## Project Structure


image-card-project/
│
├── backend/
│ ├── server.js
│ ├── uploads/
│ ├── data/
│ │ └── cards.json
│ ├── package.json
│
├── frontend/
│ └── index.html


---

## Installation

### 1. Clone the repository

git clone https://github.com/your-username/image-card-project.git

cd image-card-project


### 2. Install backend dependencies

cd backend
npm install


### 3. Run the server

npm start


or (development mode)

npm run dev


Server will run on:

http://localhost:5000


---

## Frontend Setup

Open the following file in your browser:

frontend/index.html


Or use Live Server in VS Code.

---

## API Endpoints

### Create Card
**POST** `/upload`

Form Data:
- name (string)  
- course (string)  
- image (file)  

---

### Get All Cards
**GET** `/cards`

Returns all stored card data.

---

## Filename Preprocessing

The backend automatically formats uploaded filenames:

- Converts to lowercase  
- Replaces spaces with hyphens  
- Removes special characters  

Example:

My Photo 01.JPG → my-photo-01.jpg


---

## Deployment

### Backend (Render)
- Push project to GitHub  
- Go to Render  
- Create a new Web Service  
- Connect repository  
- Set:
  - Build Command: `npm install`  
  - Start Command: `node server.js`  
- Deploy  

---

### Frontend (Netlify)
- Go to Netlify  
- Drag and drop the frontend folder  
- Deploy instantly  

---

## Future Improvements

- Integrate MongoDB database  
- Add authentication (JWT)  
- Add edit and delete card functionality  
- Add image preview before upload  
- Convert frontend to React.js  
- Build admin dashboard  

---

## Author

Aryan Sahu  

---

## License

This project is licensed under the MIT License.


>>>>>>> 8a18c7c (Resolved README conflict)
