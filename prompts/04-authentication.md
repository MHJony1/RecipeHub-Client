# 🔐 Phase 04 - Authentication System

## Objective

Build a complete production-ready authentication system for RecipeHub.

This phase includes both backend and frontend authentication.

Authentication must be secure, scalable, and reusable.

Do NOT implement Recipe CRUD.

Do NOT implement Dashboard.

Do NOT implement Home Page.

---

# Read First

Before writing any code, carefully read

- docs/PROJECT.md
- docs/DATABASE.md
- docs/API_SPEC.md
- docs/RULES.md
- docs/TASKS.md
- docs/CLAUDE.md

Never skip documentation.

---

# Goal

Implement a complete JWT Authentication System.

The authentication should be production-ready.

---

# Backend Tasks

## User Model

Create User schema.

Fields

- name
- email
- password
- avatar (optional)
- createdAt
- updatedAt

Requirements

- Email must be unique.
- Password must be hashed.
- Enable timestamps.

---

## Authentication Routes

Create

POST

/api/v1/auth/register

POST

/api/v1/auth/login

GET

/api/v1/auth/me

POST

/api/v1/auth/logout

---

## Validation

Validate all request bodies.

Validate

- Name
- Email
- Password

Never trust frontend validation.

---

## Password Hashing

Use

bcrypt

Never store plain text passwords.

---

## JWT

Generate JWT after successful login.

Store secret in

.env

Set expiration time.

Never expose secret.

---

## Authentication Middleware

Create reusable middleware.

Responsibilities

- Verify JWT
- Decode user
- Attach user to request
- Reject invalid token

---

## Error Handling

Handle

- Invalid credentials
- Duplicate email
- Missing token
- Expired token
- Unauthorized access

Return consistent API responses.

---

# Frontend Tasks

## Pages

Create

/login

/register

---

## Forms

Use

React Hook Form

+

Zod

Validation

Required fields

Register

- Name
- Email
- Password

Login

- Email
- Password

---

## Demo Login

Create a Demo Login button.

The button should automatically fill demo credentials.

Do not hardcode credentials inside components.

---

## Authentication Service

Create reusable authentication service.

Functions

- Register
- Login
- Logout
- Get Current User

---

## Authentication Context

Create global Auth Provider.

Responsibilities

- Store current user
- Store loading state
- Store authentication state
- Handle logout
- Refresh session

Do not store unnecessary server data.

---

## Protected Routes

Protect

/dashboard

/items/add

/items/manage

Redirect unauthenticated users to

/login

---

## Navbar

Update navigation dynamically.

Guest

- Home
- Explore
- Login
- Register

Authenticated

- Home
- Explore
- Dashboard
- Add Recipe
- Manage Recipes
- Logout

---

## User Experience

Provide

Loading States

Error Messages

Success Toasts

Form Validation

Disabled Submit Button

Password Visibility Toggle

---

## Accessibility

Ensure

- Labels
- Keyboard Navigation
- Focus States
- Proper Error Messages

---

## Security

Never expose

JWT Secret

Password

Sensitive Information

Always validate authentication before accessing protected pages.

---

# Verification

Before stopping verify

✓ Registration works

✓ Login works

✓ Logout works

✓ JWT generated

✓ Password hashed

✓ Protected routes working

✓ Invalid login handled

✓ Duplicate email handled

✓ Auth Context working

✓ Navbar updates correctly

✓ No TypeScript errors

✓ No ESLint errors

✓ No build errors

---

# Deliverables

Expected Output

Complete Authentication System

JWT Authentication

Protected Routes

Authentication Context

Secure Backend

Professional Login & Registration UI

Reusable Authentication Services

---

# Update

Update

docs/TASKS.md

Mark authentication tasks as completed.

---

# Stop

Do not implement Recipe CRUD.

Do not implement Dashboard.

Do not implement Home Page.

Wait for the next prompt.