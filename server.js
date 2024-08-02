const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Define port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sync database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database:", err));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Todo API" });
});

// Routes
const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");

app.use("/api", authRoutes);
app.use("/api/todo", todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
