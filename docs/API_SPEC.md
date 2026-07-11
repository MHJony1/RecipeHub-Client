# 🌐 API_SPEC.md

# RecipeHub API Specification

> This document defines all REST APIs required for the RecipeHub project.

---

# API Information

Base URL

Development

http://localhost:5000/api/v1

Production

https://your-api-url.com/api/v1

---

# Response Format

Every API must return the same response structure.

## Success Response

```json
{
  "success": true,
  "message": "Success",
  "data": {},
  "pagination": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Something went wrong",
  "errors": []
}
```

---

# Status Codes

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

500 Internal Server Error

---

# Authentication APIs

## Register

POST

/api/v1/auth/register

### Description

Create a new user account.

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123",
  "photoURL": "https://..."
}
```

### Validation

- Name required
- Email required
- Valid email
- Password minimum 6 characters
- Email must be unique

### Success

201 Created

---

## Login

POST

/api/v1/auth/login

### Description

Authenticate user.

### Request Body

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

### Success

- Generate JWT
- Store JWT in HTTP Only Cookie
- Return user information

---

## Logout

POST

/api/v1/auth/logout

### Description

Clear authentication cookie.

---

## Get Current User

GET

/api/v1/auth/me

### Protected

Yes

### Description

Return currently logged in user.

---

# Recipe APIs

## Get All Recipes

GET

/api/v1/recipes

### Description

Return paginated recipe list.

### Query Parameters

?page=1

&limit=8

&search=pasta

&category=Dinner

&difficulty=Easy

&sort=newest

---

### Supported Search

Recipe Title

---

### Supported Filter

Category

Difficulty

---

### Supported Sort

Newest

Oldest

Highest Rating

Cooking Time

---

### Success

Returns

- Recipe List
- Pagination Information

---

## Get Single Recipe

GET

/api/v1/recipes/:id

### Description

Return recipe details.

---

## Create Recipe

POST

/api/v1/recipes

### Protected

Yes

### Request Body

```json
{
  "title": "",
  "shortDescription": "",
  "description": "",
  "category": "",
  "difficulty": "",
  "cookingTime": 25,
  "ingredients": [],
  "instructions": [],
  "image": ""
}
```

### Validation

Title Required

Description Required

Category Required

Difficulty Required

Cooking Time Required

Ingredients Required

Instructions Required

---

## Delete Recipe

DELETE

/api/v1/recipes/:id

### Protected

Yes

### Rules

Only recipe owner can delete.

Return

403 if user is not owner.

---

# Middleware

Authentication Middleware

Verify JWT

Attach user to request

Reject unauthorized requests

---

Authorization Middleware

Verify ownership

Allow only owner to delete recipe

---

# Pagination Rules

Default Limit

8

Maximum Limit

20

Default Page

1

---

Pagination Response

```json
{
  "pagination": {
    "page": 1,
    "limit": 8,
    "total": 50,
    "totalPages": 7
  }
}
```

---

# Validation

Use Zod on frontend.

Validate again on backend.

Never trust frontend validation.

---

# Error Handling

Return meaningful error messages.

Example

```json
{
  "success": false,
  "message": "Recipe not found"
}
```

---

# Security

Use bcrypt.

Use JWT.

Use HTTP Only Cookie.

Validate ObjectId.

Sanitize user input.

Never expose password.

Never expose JWT secret.

---

# API Folder Structure

src/

controllers/

auth.controller.ts

recipe.controller.ts

routes/

auth.routes.ts

recipe.routes.ts

services/

auth.service.ts

recipe.service.ts

middleware/

auth.middleware.ts

validators/

auth.validation.ts

recipe.validation.ts

---

# Acceptance Criteria

✅ Register API

✅ Login API

✅ Logout API

✅ Current User API

✅ Get Recipes API

✅ Get Single Recipe API

✅ Create Recipe API

✅ Delete Recipe API

✅ Pagination

✅ Search

✅ Filter

✅ Sorting

✅ Validation

✅ Authentication

✅ Authorization

✅ Consistent Response Format