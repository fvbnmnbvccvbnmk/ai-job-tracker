const Fastify = require("fastify");
const cors = require("@fastify/cors");

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: true });

// 🔹 SIMPLE JOB DATA
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

// 🔹 HEALTH CHECK
fastify.get("/", async () => {
  return { status: "Backend running" };
});

// 🔹 JOBS API
fastify.get("/jobs", async () => {
  return jobs;
});

// 🔹 START SERVER (RENDER SAFE)
const PORT = process.env.PORT || 5000;

fastify.listen({ port: PORT, host: "0.0.0.0" }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
