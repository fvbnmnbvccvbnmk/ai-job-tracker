# AI-Powered Job Tracker with Smart Matching

A full-stack web application that helps job seekers track jobs, upload resumes, and get AI-powered job match scores.  
Built with **React**, **Node.js (Fastify)**, and simple AI-style matching logic.

---

## 🔗 Live Demo
👉 (Add your deployed link here – Render / Vercel / Netlify)

## 📦 GitHub Repository
👉 (This repository)

---

## 🧠 Architecture Overview

Frontend (React)
- Job Feed UI
- Resume Upload UI
- Apply Button & Popup
- Application Tracking Dashboard

⬇️ HTTP Requests (Fetch API)

Backend (Node.js + Fastify)
- Job APIs
- Resume Upload & Text Extraction
- Match Score Calculation
- Application Tracking Logic

⬇️ In-Memory Storage (Mock Redis)

Data Stores
- Resume Text (in-memory)
- Jobs (mock data)
- Applications (status + timeline)

---

## 🏗️ Architecture Diagram (Textual)

[ React Frontend ]
        |
        |  fetch (/jobs, /resume, /apply)
        v
[ Fastify Backend ]
        |
        |-- Resume Text (Memory)
        |-- Jobs Data
        |-- Applications Data
        |
        v
[ AI Match Logic ]

---

## ⚙️ Tech Stack

**Frontend**
- React
- HTML / CSS
- Fetch API

**Backend**
- Node.js
- Fastify
- @fastify/cors
- @fastify/multipart

**AI / Logic**
- Resume keyword matching
- Score calculation (0–100%)

**Storage**
- In-memory (can be replaced with Redis / DB)

---

## 🚀 Features Implemented

### ✅ Job Feed
- Job title, company, location, type
- Apply button on each job

### ✅ Resume Upload
- Upload PDF or TXT resume
- Resume text extracted and stored

### ✅ AI-Powered Job Matching
- Resume vs Job Title matching
- Match Score (0–100%)
- Color badges:
  - Green (>70%)
  - Yellow (40–70%)
  - Gray (<40%)

### ✅ Smart Application Tracking
- On Apply → Job opens in new tab
- Popup: “Did you apply?”
- Status saved as Applied
- Application timeline shown

---

## 🧪 How to Run Locally

### 1️⃣ Clone Repository
```bash
git clone <repo-url>
cd ai-job-tracker
