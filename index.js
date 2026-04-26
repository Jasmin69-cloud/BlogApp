const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const { signupUser } = require('./auth');

app.post('/auth/signup', signupUser);
// Import route/controller
//const { signupUser } = require('./auth'); // or './routes/auth'

// Route
//app.post('/auth/signup', signupUser);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});