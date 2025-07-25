// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // for static file serving

// Routes
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// CORS origin setting
app.use(
  cors({
    origin: "http://localhost:5173", // ya production frontend domain
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Connect DB only once
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("DB Connection Error:", err));

// No need to call app.listen()

module.exports = app;
