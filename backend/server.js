const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();

const uploadPath = path.join(__dirname, "uploads");
const dataPath = path.join(__dirname, "data");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

app.use(cors());
app.use(express.json());

//  Static file access
app.use("/uploads", express.static("uploads"));

console.log(" Server starting...");

// folders check
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
  console.log(" uploads folder created");
}

if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
  console.log(" data folder created");
}

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("📤 Uploading file...");
    cb(null, "uploads/");  //FIXED
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname;
    console.log("📄 File name:", filename);
    cb(null, filename);
  },
});

const upload = multer({ storage });

//  name preprocessing
function preprocessName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.-]/g, "");
}

/* =========================
   📌 UPLOAD API
========================= */
app.post("/upload", upload.single("image"), (req, res) => {
  try {
    console.log(" Request received");

    const { name, course } = req.body;

    //  VALIDATION DEBUG
    if (!name) {
      console.log("❌ Name missing");
      return res.status(400).json({ error: "Name is required" });
    }

    if (!course) {
      console.log("❌ Course missing");
      return res.status(400).json({ error: "Course is required" });
    }

    if (!req.file) {
      console.log("❌ Image missing");
      return res.status(400).json({ error: "Image is required" });
    }

    console.log(" Data received:", { name, course });

    const originalName = req.file.originalname;
    const cleanName = preprocessName(originalName);

    const card = {
      id: Date.now(),
      name,
      course,
      originalName,
      cleanName,
      image: req.file.filename,
      createdAt: new Date(),
    };

    const filePath = "data/cards.json";

    let data = [];

    //  safe JSON read
    if (fs.existsSync(filePath)) {
      try {
        data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch (err) {
        console.log(" JSON corrupted, resetting file");
        data = [];
      }
    }

    data.push(card);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(" Card created:", card);

    res.json({
      message: "Card created successfully ",
      card,
    });

  } catch (error) {
    console.log(" Server Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* =========================
    GET CARDS
========================= */
app.get("/cards", (req, res) => {
  try {
    //const filePath = "data/cards.json";
    const filePath = path.join(dataPath, "cards.json");

    if (!fs.existsSync(filePath)) {
      console.log(" No cards found");
      return res.json([]);
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    console.log(` Sending ${data.length} cards`);

    res.json(data);

  } catch (error) {
    console.log(" GET error:", error.message);
    res.status(500).json({ error: "Failed to load cards" });
  }
});

/* =========================
    404 HANDLER
========================= */
app.use((req, res) => {
  console.log(" Route not found:", req.url);
  res.status(404).json({ error: "Route not found" });
});

/* =========================
    START SERVER
========================= */
app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});