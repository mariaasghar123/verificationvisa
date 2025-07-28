const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const uploadRoutes = require('./routes/upload');
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

// Single CORS configuration - place BEFORE routes
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://www.googlevisa.com",
    "https://verifypassword-ai7r.vercel.app",
    "https://verifypassword-yegn.vercel.app",
    "https://verificationvisafrontend.vercel.app",
    "https://verificationvisafrontend-rn1q.vercel.app/"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json())

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use('/api', uploadRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", db: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});

// DB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");
  
  // Only listen locally, Vercel will use the exported app
  app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
})
.catch(err => console.error("DB Connection Error:", err));

module.exports = app;