const Fastify = require("fastify");
const cors = require("@fastify/cors");
const multipart = require("@fastify/multipart");
const pdfParse = require("pdf-parse");

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: true });
fastify.register(multipart);

// In-memory stores
let resumeText = "";
let applications = [];

// Mock jobs
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Bangalore",
    type: "Full-time",
    link: "https://example.com/job/frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CloudWorks",
    location: "Remote",
    type: "Contract",
    link: "https://example.com/job/backend",
  },
  {
    id: 3,
    title: "React Intern",
    company: "Startup Hub",
    location: "Chennai",
    type: "Internship",
    link: "https://example.com/job/react",
  },
];

// Match score
function calculateMatchScore(resume, jobTitle) {
  if (!resume) return 0;
  const resumeLower = resume.toLowerCase();
  const words = jobTitle.toLowerCase().split(" ");
  let count = 0;
  words.forEach(w => resumeLower.includes(w) && count++);
  return Math.min(100, count * 30);
}

// Jobs API
fastify.get("/jobs", async () => {
  return jobs.map(job => ({
    ...job,
    matchScore: calculateMatchScore(resumeText, job.title),
  }));
});

// Resume upload
fastify.post("/resume", async (request) => {
  const file = await request.file();
  const buffer = await file.toBuffer();

  if (file.mimetype === "application/pdf") {
    const parsed = await pdfParse(buffer);
    resumeText = parsed.text;
  } else {
    resumeText = buffer.toString();
  }

  return { message: "Resume uploaded successfully" };
});

// Save application
fastify.post("/apply", async (request) => {
  const { jobId, status } = request.body;

  const job = jobs.find(j => j.id === jobId);
  if (!job) return { error: "Job not found" };

  applications.push({
    jobId,
    title: job.title,
    company: job.company,
    status,
    time: new Date().toLocaleString(),
  });

  return { message: "Application saved" };
});

// Get applications
fastify.get("/applications", async () => {
  return applications;
});

// Health
fastify.get("/", async () => ({ status: "Backend running" }));

fastify.listen({ port: 5000, host: "0.0.0.0" }, err => {
  if (err) throw err;
});
