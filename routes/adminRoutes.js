const express = require("express");
const multer = require("multer");
const Document = require("../models/Document");
const { cloudinary , storage } = require("../helpers/uploads");

const router = express.Router();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowed = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, JPG, and PNG allowed"));
    }
  },
});

// Admin can upload document
router.post("/upload", upload.array("files", 10), async (req, res) => {
  console.log("Upload request received");
  console.log("Request body:", req.body);
  console.log("Files received:", req.files);
  try {
    const { name, passportNumber, referenceNumber } = req.body;
    const files = req.files;
    console.log("Uploaded files:", files); // Debug log
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    // const fileUrls = files.map(file => file.path.replace('/image/upload/', '/raw/upload/'));
      // Get Cloudinary URLs (don't modify them)
    //const fileUrls = files.map(file => file.path);
    const fileUrls = files.map(file => file.path || file.secure_url || file.url);


    // Check for duplicate referenceNumber
    const existingDoc = await Document.findOne({ referenceNumber });
    if (existingDoc) {
      return res.status(400).json({ error: "Reference number already exists" });
    }

    const newDoc = new Document({
      name,
      passportNumber,
      referenceNumber,
      file: fileUrls,
    });

    await newDoc.save();
    console.log("Saved document:", newDoc); // Debug log
    res.status(201).json({ message: "Document uploaded successfully", files: fileUrls });
  } catch (err) {
    console.error("Upload error:", err); // Debug log
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File size should not exceed 2MB" });
    }
    if (err.name === "MongoServerError" && err.code === 11000) {
      return res.status(400).json({ error: "Reference number already exists" });
    }
    res.status(500).json({ error: "Upload failed: " + err.message });
  }
});

// Fetch all documents
router.get("/", async (req, res) => {
  try {
    const docs = await Document.find();
    console.log("Fetched documents:", docs); // Debug log
    res.json(docs);
  } catch (err) {
    console.error("Fetch error:", err); // Debug log
    res.status(500).json({ error: "Failed to fetch documents: " + err.message });
  }
});

// DELETE document by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = await Document.findByIdAndDelete(id);

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error); // Debug log
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;