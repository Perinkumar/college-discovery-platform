# College Discovery Platform

A production-style full-stack College Discovery Platform inspired by Careers360 and Collegedunia.

This platform allows users to:

* Browse colleges
* Search and filter colleges
* View detailed college information
* Access backend APIs
* Interact with PostgreSQL database-driven content

---

# Features

## College Listing

* Dynamic college cards
* College name
* Location
* Fees
* Ratings

## Search & Filter

* Search colleges dynamically
* Filter by location
* API-based filtering

## College Detail Page

* Dedicated dynamic route for each college
* Detailed college information
* Fees, courses, ratings, and location

## Backend APIs

* REST API architecture
* Dynamic data fetching
* Validation and error handling

## Database Integration

* PostgreSQL database
* Prisma ORM integration
* Persistent data storage

## Responsive Design

* Mobile-friendly UI
* Responsive layouts using Tailwind CSS

---

# Tech Stack

## Frontend

* Next.js
* React.js
* Tailwind CSS

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* PostgreSQL
* Prisma ORM

## Deployment

* Frontend deployed on Vercel

---

# Project Structure

```bash
college-discovery-platform/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Backend API Endpoints

## Get All Colleges

```http
GET /colleges
```

## Get Single College

```http
GET /colleges/:id
```

## Create College

```http
POST /colleges
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Perinkumar/college-discovery-platform.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Environment Variables

## Backend `.env`

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
```

---

# Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run Prisma Studio:

```bash
npx prisma studio
```

---

# Edge Cases Handled

* Empty search results
* Invalid college IDs
* Error handling
* Responsive UI
* Loading states
* Missing data handling

---

# Challenges Faced

* TypeScript deployment configuration
* Prisma production setup
* Backend deployment integration

---

# Future Improvements

* Authentication system
* Saved colleges
* College comparison
* Pagination
* Reviews and ratings
* Advanced filtering

---

# Author

Perinkumar Jagdishbhai Chaudhari

---

# Submission Details

## GitHub Repository

https://github.com/Perinkumar/college-discovery-platform

## Frontend Deployment

(https://college-discovery-platform-red.vercel.app/)

## Loom Video
https://drive.google.com/file/d/1E7ACOtDLdD3juuWW6xZYYeTXOt0Q-Dcv/view?usp=drive_link

(Add your Loom video link here)
