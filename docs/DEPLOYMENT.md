** Part-1 
# 🚀 DEPLOYMENT.md

# RecipeHub Deployment Guide

> This document defines the complete deployment process for the RecipeHub application.

The RecipeHub project consists of two separate applications:

- RecipeHub Client (Next.js)
- RecipeHub Server (Express.js)

Both applications will be deployed separately on **Vercel**.

MongoDB Atlas will be used as the production database.

---

# Deployment Architecture

GitHub Repository

↓

RecipeHub-Client

↓

Vercel

↓

https://recipehub.vercel.app

↓

API Requests

↓

RecipeHub-Server

↓

Vercel

↓

https://recipehub-api.vercel.app

↓

MongoDB Atlas

---

# Production Stack

## Frontend

Framework

Next.js

Hosting

Vercel

Language

TypeScript

---

## Backend

Framework

Express.js

Hosting

Vercel

Language

TypeScript

---

## Database

MongoDB Atlas

Cloud Database

---

# Deployment Strategy

There will be two independent deployments.

Repository

RecipeHub-Client

Deployment

Vercel Project 1

---

Repository

RecipeHub-Server

Deployment

Vercel Project 2

---

Database

MongoDB Atlas

---

Deployment Order

1.

MongoDB Atlas

↓

2.

Backend API

↓

3.

Frontend

↓

4.

Production Testing

---

# Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://recipehub-api.vercel.app/api/v1
```

---

## Backend (.env)

```env
PORT=5000

NODE_ENV=production

CLIENT_URL=https://recipehub.vercel.app

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_key
```

---

Never commit

.env

to GitHub.

Always use

.gitignore

---

# GitHub Preparation

Before deployment verify

- Latest code pushed
- No build errors
- No TypeScript errors
- No console errors
- README updated
- Environment variables removed from code

---

# Build Verification

## Frontend

Run

```bash
npm run build
```

Expected Result

- Build succeeds
- No TypeScript errors
- No ESLint errors

---

## Backend

Run

```bash
npm run build
```

Expected Result

- TypeScript Compiles
- No Errors

---

# Frontend Deployment

Platform

Vercel

---

## Steps

Step 1

Push the latest frontend code to GitHub.

---

Step 2

Login to Vercel.

---

Step 3

Import Git Repository.

---

Step 4

Select

RecipeHub-Client

as Root Directory.

---

Step 5

Framework

Next.js

Automatically detected.

---

Step 6

Add Environment Variable

```env
NEXT_PUBLIC_API_URL=https://recipehub-api.vercel.app/api/v1
```

---

Step 7

Deploy.

---

## Verification

Homepage loads.

Navigation works.

Images load.

Authentication pages work.

API requests succeed.

No console errors.

Responsive on all devices.

---

# Backend Deployment

Platform

Vercel

---

## Steps

Step 1

Push backend repository.

---

Step 2

Create another Vercel Project.

---

Step 3

Import Git Repository.

---

Step 4

Select

RecipeHub-Server

as Root Directory.

---

Step 5

Configure Environment Variables.

```env
MONGODB_URI=

JWT_SECRET=

CLIENT_URL=

NODE_ENV=production
```

---

Step 6

Deploy API.

---

## API URL

Example

```
https://recipehub-api.vercel.app
```

---

## Verification

Database Connected

Authentication Works

CRUD Works

JWT Works

No Server Errors

---

# MongoDB Atlas

## Create Cluster

Create one free cluster.

---

## Create Database

Database Name

recipehub

---

## Create User

Create Database User.

Store Username.

Store Password.

---

## Network Access

Allow

0.0.0.0/0

or

Current IP

---

## Connection String

Copy MongoDB URI.

Paste into

Backend Environment Variable

---

## Verification

Database Connected

Collections Created

Read Works

Write Works

Delete Works

---

# CORS Configuration

Allow

Development

```
http://localhost:3000
```

Production

```
https://recipehub.vercel.app
```

Reject unknown origins.

Enable credentials if JWT is stored in cookies.

---

# Security Checklist

Password Hashing

JWT Secret

Environment Variables

HTTPS Enabled

MongoDB Protected

No Secrets in GitHub

Validate Inputs

Validate ObjectId

Never expose password hashes.

Never expose JWT Secret.

Never expose MongoDB URI.

---



** Part-2

# Production Testing

Before submitting the project, test every major feature in the production environment.

---

## Authentication

Verify

- Register
- Login
- Logout
- Protected Routes
- Invalid Login
- Duplicate Registration

---

## Recipe Features

Verify

- Add Recipe
- View Recipe
- Delete Recipe
- Recipe Details
- Recipe Images

---

## Explore Page

Verify

- Search
- Category Filter
- Difficulty Filter
- Sorting
- Pagination

---

## Dashboard

Verify

- Dashboard Statistics
- Charts
- Recent Recipes
- Manage Recipes
- Delete Confirmation

---

## Responsive Testing

Test on

Desktop

Laptop

Tablet

Mobile

Verify

Navbar

Cards

Forms

Tables

Dashboard

Footer

Buttons

Images

---

# Performance Checklist

Frontend

- Images optimized
- next/image used
- Lazy loading enabled
- No unnecessary re-renders
- No unused components

---

Backend

- API response under acceptable time
- Database queries optimized
- Proper indexes created
- Error handling implemented

---

# Accessibility Checklist

Verify

- All images have alt text
- Inputs have labels
- Keyboard navigation works
- Buttons are accessible
- Good color contrast
- Semantic HTML tags used

---

# SEO Checklist

Every public page should include

- Title
- Description
- Open Graph Image (optional)
- Proper Heading Structure
- Clean URL

Recipe Details pages should use dynamic metadata.

---

# Browser Compatibility

Verify the application works correctly in

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

(Optional)

Safari

---

# Error Handling

Verify

- 404 Page
- Invalid Route
- Invalid API Request
- Network Error
- Database Error
- Validation Error

The application should never crash unexpectedly.

---

# README.md Checklist

The repository README should include

## Project Information

- Project Name
- Project Overview
- Live Demo
- Backend API URL

---

## Features

- Authentication
- Recipe Management
- Search
- Filter
- Pagination
- Dashboard
- Responsive Design

---

## Technology Stack

Frontend

- Next.js
- TypeScript
- Tailwind CSS
- React Hook Form
- TanStack Query
- Recharts

Backend

- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## Installation

Frontend

```bash
npm install

npm run dev
```

Backend

```bash
npm install

npm run dev
```

---

## Environment Variables

Frontend

```env
NEXT_PUBLIC_API_URL=
```

Backend

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLIENT_URL=
```

---

# GitHub Repository Checklist

Before submission verify

- Clean commit history
- Meaningful commit messages
- No unnecessary files
- .env ignored
- README completed
- Screenshots added (optional)

---

# Final Assignment Checklist

Verify all assignment requirements

## Home Page

- Sticky Navbar
- Hero Section
- Minimum 7 Sections
- Responsive Footer

---

## Explore Recipes

- Search
- Filter
- Sorting
- Pagination

---

## Recipe Details

- Public Access
- Recipe Information
- Ingredients
- Instructions
- Related Recipes

---

## Authentication

- Register
- Login
- Logout
- Protected Routes

---

## Dashboard

- Add Recipe
- Manage Recipes
- Dashboard Overview
- Statistics
- Charts

---

## UI Requirements

- Responsive Design
- Consistent Cards
- Consistent Buttons
- Professional Layout
- No Placeholder Content

---

# Final Verification

Before deployment ensure

- Build succeeds
- TypeScript passes
- No ESLint errors
- No console errors
- API works
- Database connected
- Authentication works
- CRUD works
- Search works
- Filter works
- Sorting works
- Pagination works
- Dashboard works
- Mobile responsive
- Tablet responsive
- Desktop responsive

---

# Production Ready Checklist

Frontend

- Deployed to Vercel
- Environment Variables Added
- API Connected

Backend

- Deployed to Vercel
- MongoDB Connected
- JWT Working

Database

- MongoDB Atlas Connected
- Collections Created
- CRUD Verified

---

# Deployment Summary

Frontend

RecipeHub-Client

↓

Vercel

Backend

RecipeHub-Server

↓

Vercel

Database

MongoDB Atlas

Both frontend and backend should communicate securely using HTTPS.

---

# Acceptance Criteria

✅ Frontend deployed successfully on Vercel.

✅ Backend deployed successfully on Vercel.

✅ MongoDB Atlas connected.

✅ Environment variables configured correctly.

✅ Authentication working.

✅ CRUD operations working.

✅ Search, Filter, Sorting and Pagination working.

✅ Responsive design verified.

✅ No TypeScript errors.

✅ No build errors.

✅ Project is production-ready.

---

# 🚀 Deployment Complete

After completing every step in this document, the RecipeHub application should be fully deployed, tested, and ready for portfolio showcase and assignment submission.