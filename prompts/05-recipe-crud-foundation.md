# 🍳 Phase 05 - Recipe CRUD Foundation

## Objective

Build the complete Recipe Management backend and frontend foundation.

This phase implements the Recipe model and CRUD APIs.

Only build Add Recipe and Manage Recipes pages.

Do NOT build the Home Page.

Do NOT build Explore Page.

Do NOT build Recipe Details Page.

Do NOT build Dashboard.

---

# Read First

Before writing any code, carefully read

- docs/PROJECT.md
- docs/DATABASE.md
- docs/API_SPEC.md
- docs/COMPONENTS.md
- docs/RULES.md
- docs/TASKS.md
- docs/CLAUDE.md

Never skip documentation.

---

# Goal

Implement the complete Recipe CRUD system using clean architecture.

The implementation must be production-ready and reusable.

---

# Backend Tasks

## Recipe Model

Create a Recipe schema.

Fields

- title
- slug
- shortDescription
- description
- category
- cuisine
- difficulty
- cookingTime
- servings
- image
- ingredients
- instructions
- author (User Reference)
- createdAt
- updatedAt

Requirements

- Enable timestamps
- Validate required fields
- Generate unique slug
- Store author ID
- Prevent invalid data

---

## API Routes

Create

POST

/api/v1/recipes

GET

/api/v1/recipes

GET

/api/v1/recipes/:slug

PUT

/api/v1/recipes/:id

DELETE

/api/v1/recipes/:id

---

## Business Rules

Only authenticated users can create recipes.

Only recipe owners can

Update

Delete

Always verify ownership before modification.

---

## Search

Support search by

- title

---

## Filtering

Support

- category
- difficulty

---

## Sorting

Support

- newest
- oldest
- cookingTime

---

## Pagination

Support

page

limit

Return

- totalRecipes
- totalPages
- currentPage

---

## Slug Generation

Automatically generate unique slug from title.

Example

Chicken Fried Rice

↓

chicken-fried-rice

---

## Services

Create reusable Recipe Service.

Responsibilities

- Create Recipe
- Get Recipes
- Get Single Recipe
- Update Recipe
- Delete Recipe

Do not write business logic inside controllers.

---

## Validation

Validate

Title

Description

Category

Cooking Time

Difficulty

Ingredients

Instructions

---

# Frontend Tasks

## Create Recipe Page

Route

/items/add

Protected Route

Use

React Hook Form

+

Zod

Fields

- Title
- Short Description
- Full Description
- Category
- Cuisine
- Difficulty
- Cooking Time
- Servings
- Image URL
- Ingredients
- Instructions

Submit button

Loading state

Validation

Toast messages

---

## Manage Recipes Page

Route

/items/manage

Protected Route

Display recipes created by the logged-in user.

Use responsive table or card layout.

Each item should include

- Image
- Title
- Category
- Cooking Time
- Created Date

Actions

- View
- Delete

Delete should require confirmation.

---

## Reusable Components

Create

Recipe Card

Recipe Form

Delete Confirmation Modal

Empty State

Recipe Table

Loading Skeleton

---

## API Integration

Create reusable service methods.

Do not call fetch directly inside components.

---

## User Experience

Provide

Loading state

Success toast

Error toast

Confirmation dialog

Empty state

Responsive layout

---

## Security

Never allow users to

Delete another user's recipe.

Update another user's recipe.

Validate ownership on backend.

---

# Verification

Before stopping verify

✓ Recipe model created

✓ CRUD APIs working

✓ Slug generation working

✓ Authentication applied

✓ Ownership validation working

✓ Create Recipe page working

✓ Manage Recipes page working

✓ Delete confirmation working

✓ Validation working

✓ Responsive layout

✓ TypeScript passes

✓ ESLint passes

✓ Build passes

---

# Deliverables

Expected Output

Recipe Model

Recipe CRUD APIs

Recipe Services

Recipe Form

Manage Recipes

Reusable Components

Protected CRUD Operations

Production-ready Foundation

---

# Update

Update

docs/TASKS.md

Mark Recipe CRUD tasks as completed.

---

# Stop

Do not build the Home Page.

Do not build Explore Page.

Do not build Details Page.

Do not build Dashboard.

Wait for the next prompt.