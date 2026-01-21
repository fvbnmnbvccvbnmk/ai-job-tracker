const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Jobs data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Bangalore",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CloudWorks",
    location: "Remote",
  },
  {
    id: 3,
    title: "React Intern",
    company: "Startup Hub",
    location: "Chennai",
  },
];

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

// Jobs API
app.get("/jobs", (req, res) => {
  res.json(jobs);
});

// Start server (Render safe)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
