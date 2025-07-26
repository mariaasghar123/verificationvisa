// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // to access uploaded files

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://www.googlevisa.com", "https://verifypassword-ai7r.vercel.app/"], // frontend ka URL
     methods: ['GET','POST','PUT','DELETE'],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.get('/api/test', (req, res) => res.json({message:'Backend working!'}));
  })
  .catch((err) => console.error("DB Connection Error:", err));

  // export server for Vercel
module.exports = app;