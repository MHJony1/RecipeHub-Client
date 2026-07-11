# 🚀 Phase 02 - Backend Foundation

## Objective

Build the complete backend foundation for the RecipeHub project.

This phase only prepares the backend architecture.

Do NOT implement authentication.

Do NOT implement recipe CRUD.

Do NOT implement business logic.

---

# Read First

Before writing any code, carefully read:

- docs/PROJECT.md
- docs/ROADMAP.md
- docs/DATABASE.md
- docs/API_SPEC.md
- docs/RULES.md
- docs/TASKS.md
- docs/CLAUDE.md

Do not skip any document.

---

# Goal

Create a clean, scalable, production-ready Express + TypeScript backend.

The backend should be ready for future feature implementation.

---

# Tasks

## 1. Configure Project

Verify

- Express
- TypeScript
- ts-node-dev
- ESLint
- Prettier
- dotenv
- cors
- helmet
- morgan

---

## 2. Folder Structure

Create the complete backend folder structure.

Example

src/

config/

controllers/

middlewares/

models/

routes/

services/

validators/

interfaces/

types/

utils/

lib/

app.ts

server.ts

---

## 3. Environment Configuration

Configure

.env

.env.example

Environment loader

Configuration helper

Do not hardcode any secrets.

---

## 4. Database Connection

Create MongoDB connection.

Use Mongoose.

Create reusable database configuration.

Connection should

- connect
- disconnect safely
- handle errors

---

## 5. Express App

Configure

Express

JSON parser

URL Encoded parser

Helmet

CORS

Morgan

Error middleware

404 middleware

---

## 6. API Versioning

All APIs must begin with

/api/v1

Example

/api/v1/recipes

/api/v1/auth

---

## 7. Health Route

Create

GET

/api/v1

Response

```json
{
    "success": true,
    "message": "RecipeHub API Running"
}
```

---

## 8. Global Error Handler

Create reusable error middleware.

Handle

Validation Error

Cast Error

Unknown Error

Server Error

Never expose stack trace in production.

---

## 9. Utilities

Create reusable utilities

Response Helper

Async Handler

Error Class

---

## 10. TypeScript

Strict mode enabled.

No

any

No

ts-ignore

No

ts-nocheck

---

## 11. Code Quality

Follow

docs/RULES.md

Use clean architecture.

Keep files small.

Avoid duplicate code.

---

# Verification

Before stopping verify

✓ Server starts

✓ MongoDB connects

✓ API works

✓ No TypeScript errors

✓ No ESLint errors

✓ No build errors

✓ Folder structure complete

---

# Deliverables

Expected output

Backend foundation

MongoDB connection

Express configuration

Reusable architecture

Middleware

Utilities

---

# Update

After completion

Update

docs/TASKS.md

Mark completed tasks.

---

# Stop

Do not continue.

Do not implement authentication.

Do not implement recipes.

Wait for the next prompt.