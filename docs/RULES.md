# 📏 RULES.md

# RecipeHub Development Rules

> This document defines all coding standards, architecture rules, UI rules, backend rules, and development guidelines for the RecipeHub project.
>
> Every implementation must follow these rules.
>
> Never ignore these rules.

---

# Core Principles

The project must be:

- Production Ready
- Type Safe
- Maintainable
- Reusable
- Scalable
- Responsive
- Secure

Always prioritize code quality over speed.

---

# TypeScript Rules

TypeScript is mandatory.

Never use JavaScript files.

Allowed

.ts

.tsx

Not Allowed

.js

.jsx

---

## Strict Typing

Always define types.

Always define interfaces.

Always define return types when needed.

Example

```ts
interface Recipe {
  id: string;
  title: string;
}
```

---

## Forbidden

```ts
const data: any = {};
```

Never use:

- any
- @ts-ignore
- unnecessary type assertions

---

# Component Rules

Components must be:

- Reusable
- Small
- Focused

One component = One responsibility

---

## Component Naming

Use PascalCase.

Correct

```tsx
RecipeCard.tsx
DashboardCard.tsx
```

Wrong

```tsx
recipecard.tsx
dashboardcard.tsx
```

---

## Component Size

Simple Component

< 100 lines

Medium Component

100–200 lines

Large Component

Split into smaller components

Maximum

250 lines

---

# UI Rules

Follow UI_GUIDE.md strictly.

Never create a different design language.

Use:

- Same Colors
- Same Radius
- Same Typography
- Same Shadows
- Same Spacing

---

## Buttons

Always use reusable button components.

Do not create random button styles.

---

## Forms

Use React Hook Form.

Use Zod Validation.

Display validation messages.

Disable submit button while submitting.

Show loading state.

---

## Loading States

Every page must have:

- Loading State
- Error State
- Empty State

Never show blank screens.

---

## Skeleton Rules

Recipe Cards

Dashboard

Tables

Details Page

Must have skeleton loaders.

---

# Responsive Rules

Mobile First.

Support:

- Mobile
- Tablet
- Desktop

Never break layout on smaller screens.

---

## Required Breakpoints

```txt
Mobile   < 768px
Tablet   >= 768px
Desktop  >= 1024px
```

---

# Accessibility Rules

Every image must have alt text.

Every input must have label.

Keyboard navigation must work.

Visible focus state required.

Use semantic HTML.

Examples

```html
<header>
<nav>
<main>
<section>
<footer>
```

---

# State Management Rules

Local State First.

Use Context only for authentication.

Use TanStack Query for server data.

Avoid unnecessary global state.

---

# Data Fetching Rules

Never fetch data directly inside UI components.

Create service functions.

Example

services/
recipe.service.ts

auth.service.ts

---

# API Rules

All APIs must follow API_SPEC.md.

Use consistent response structure.

Always validate input.

Never trust client data.

---

## Error Handling

Handle:

400

401

403

404

500

Database Errors

Validation Errors

Network Errors

---

# Authentication Rules

JWT Authentication

HTTP Only Cookies

Password Hashing

bcrypt

Never store plain text passwords.

---

## Protected Routes

Dashboard

Add Recipe

Manage Recipes

Must require authentication.

---

# Database Rules

Follow DATABASE.md.

Use Mongoose Models.

Enable timestamps.

Use indexes.

Validate schema fields.

Never duplicate models.

---

# Folder Structure Rules

Follow feature-based architecture.

Do not place everything inside one folder.

---

## Frontend Structure

```txt
src/

app/

components/

features/

hooks/

services/

types/

utils/
```

---

## Backend Structure

```txt
src/

controllers/

routes/

services/

models/

middleware/

validators/

utils/
```

---

# Reusability Rules

Never duplicate:

Buttons

Inputs

Cards

Modals

Tables

Pagination

Create reusable components.

---

# Naming Conventions

## Variables

camelCase

```ts
recipeData
userProfile
```

---

## Components

PascalCase

```tsx
RecipeCard
DashboardLayout
```

---

## Constants

UPPER_CASE

```ts
MAX_RECIPE_LIMIT
JWT_SECRET
```

---

# Import Rules

Use absolute imports when possible.

Keep imports organized.

Order

1. External Libraries

2. Internal Modules

3. Relative Imports

---

# Security Rules

Validate all inputs.

Validate ObjectId.

Sanitize user data.

Hash passwords.

Hide secrets in env variables.

Never expose:

- JWT Secret
- Database URI
- Password Hash

---

# Performance Rules

Use next/image.

Use lazy loading.

Avoid unnecessary re-renders.

Memoize expensive computations.

Optimize large lists.

---

# SEO Rules

Every page must have:

- Title
- Description
- Metadata

Recipe Details page should have dynamic metadata.

---

# Git Rules

Commit after every completed phase.

Commit format

```txt
feat:
fix:
refactor:
style:
docs:
chore:
```

Examples

```txt
feat: implement authentication

feat: create recipe crud

refactor: optimize dashboard
```

---

# Code Quality Rules

Readable code.

Meaningful names.

Small functions.

No dead code.

No commented-out code.

Refactor when needed.

---

# Testing Rules

Before completing any phase verify:

- Build Success
- TypeScript Success
- Responsive Design
- No Console Errors
- No Runtime Errors

---

# Before Moving To Next Phase

Checklist

□ TypeScript passes

□ Build passes

□ UI responsive

□ No duplicate code

□ No console errors

□ API works

□ Validation works

□ Authentication works

Only then continue.

---

# Acceptance Criteria

✅ Strict TypeScript

✅ Reusable Components

✅ Responsive UI

✅ Secure Authentication

✅ Clean Architecture

✅ Consistent Design

✅ No Duplicate Code

✅ Proper Error Handling

✅ Production Ready Code
