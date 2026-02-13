require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Uirouter } = require("../routes/Uiroutes");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/ui", Uirouter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Server info
app.get("/api/info", (req, res) => {
  res.json({
    name: "AI UI Generator Backend",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    timestamp: new Date().toISOString()
  });
});

// For local development
if (require.main === module) {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
