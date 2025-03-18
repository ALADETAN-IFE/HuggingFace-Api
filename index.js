const express = require('express')
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config()

// Import Routes
const route = require("./routes/routes")

// Initialize Express App
const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors(
  {
    origin: "*", // allow all origins
    credentials: true, // allow cookies
  }
));
// 🔍 Use Morgan for logging requests
app.use(morgan("dev")); // "dev" shows concise colored logs


// Connect Database
connectDB();

// Routes
app.use("/api", route);

// Root Route
app.get("/", (req, res) => {
    res.send("Welcome to Hugging API");
  });
  
  // Catch-all route handler for undefined routes
  app.use((req, res, next) => {
    res.status(404).json({ 
      message: "Route not found or wrong method used", 
      method: req.method, 
      url: req.originalUrl 
    });
  });
  const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))