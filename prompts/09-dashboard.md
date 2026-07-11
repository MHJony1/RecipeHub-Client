# 📊 Phase 09 - User Dashboard

## Objective

Build a complete, modern and responsive User Dashboard for RecipeHub.

This dashboard should provide users with an overview of their activity, quick access to important features, and useful statistics.

Only authenticated users can access this page.

---

# Read First

Before writing any code, carefully read

- docs/PROJECT.md
- docs/API_SPEC.md
- docs/UI_GUIDE.md
- docs/COMPONENTS.md
- docs/RULES.md
- docs/TASKS.md
- docs/CLAUDE.md

Never skip documentation.

---

# Goal

Build a production-ready dashboard with reusable components and a clean user experience.

---

# Route

/dashboard

Protected Route

Unauthenticated users must be redirected to

/login

---

# Files to Create

Frontend

app/dashboard/page.tsx

components/dashboard/

features/dashboard/

components/charts/

components/stats/

components/sidebar/

components/quick-actions/

services/dashboard.service.ts

Backend

Create dashboard statistics endpoint if needed.

Example

GET

/api/v1/dashboard/overview

---

# Files to Reuse

Reuse

Navbar

Button

Card

Loading

Skeleton

Empty State

Recipe Card

Recipe Table

Container

---

# Dashboard Layout

Desktop

Sidebar + Main Content

Tablet

Collapsible Sidebar

Mobile

Drawer Navigation

Maintain consistent spacing.

---

# Sidebar

Display

Dashboard

Add Recipe

Manage Recipes

Explore

Profile (Placeholder)

Logout

Highlight active route.

---

# Welcome Card

Display

User Name

Welcome Message

Current Date

Quick Summary

---

# Statistics Cards

Display

Total Recipes

Categories Used

Average Cooking Time

Latest Recipe Date

Each card should include

Icon

Title

Value

Short Description

Hover Effect

---

# Charts

Use Recharts.

Create

Recipe Category Distribution

Bar Chart

Recipes Added Per Month

Line Chart

Both charts should use real API data.

---

# Recent Recipes

Display latest recipes created by the current user.

Each card includes

Image

Title

Category

Created Date

View Button

Maximum

5 Recipes

---

# Quick Actions

Display

Add Recipe

Manage Recipes

Explore Recipes

Buttons should navigate correctly.

---

# Dashboard API

Create reusable dashboard service.

Do not write fetch() directly inside components.

---

# Loading State

Create

Dashboard Skeleton

Statistics Skeleton

Chart Skeleton

Recent Recipes Skeleton

---

# Empty State

If the user has not created any recipes

Display

Friendly Message

Illustration/Icon

Add Recipe Button

---

# Error State

Handle API failures.

Display

Error Message

Retry Button

---

# Responsive Design

Optimize for

Mobile

Tablet

Desktop

Sidebar should automatically collapse on smaller screens.

---

# Accessibility

Ensure

Semantic HTML

Keyboard Navigation

Accessible Sidebar

Proper Heading Structure

Visible Focus States

---

# Performance

Use

Lazy Loading

next/image

Memoization where appropriate

Avoid unnecessary re-renders.

---

# Verification

Before stopping verify

✓ Protected Route works

✓ Dashboard loads successfully

✓ Sidebar responsive

✓ Statistics displayed

✓ Charts working

✓ Recent Recipes displayed

✓ Quick Actions work

✓ Loading state works

✓ Empty state works

✓ Error state works

✓ Responsive layout

✓ No TypeScript errors

✓ No ESLint errors

✓ Build passes

---

# Deliverables

Expected Output

Responsive Dashboard

Statistics Cards

Charts

Recent Recipes

Quick Actions

Sidebar Navigation

Production-ready Layout

---

# Update

Update

docs/TASKS.md

Mark Dashboard tasks as completed.

---

# Stop

Do not perform UI polish.

Do not deploy.

Wait for the next prompt.