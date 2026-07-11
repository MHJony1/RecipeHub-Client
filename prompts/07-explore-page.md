# 🔍 Phase 07 - Explore Recipes Page

## Objective

Build the complete Explore Recipes page.

This page should allow users to discover recipes using searching, filtering, sorting and pagination.

Use only real API data.

Do NOT use dummy data.

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

Build a professional recipe listing page with modern filtering experience.

The page should be fast, responsive and user-friendly.

---

# Route

/explore

Public Route

Everyone can access this page.

---

# API Integration

Use the Recipe API created in the previous phase.

Use reusable API service functions.

Never call fetch() directly inside components.

---

# Search

Create a search bar.

Users should be able to search recipes by

- Title

Search should update the recipe list.

Provide a loading state while fetching.

---

# Filtering

Implement the following filters

## Category

Examples

- Breakfast
- Lunch
- Dinner
- Dessert
- Snacks
- Drinks

---

## Difficulty

- Easy
- Medium
- Hard

---

## Cooking Time

Examples

- Under 15 Minutes
- 15 - 30 Minutes
- 30 - 60 Minutes
- 60+ Minutes

---

## Cuisine

Examples

- Bangladeshi
- Indian
- Chinese
- Italian
- Mexican

---

Multiple filters should work together.

---

# Sorting

Create sorting options.

Examples

- Newest
- Oldest
- Cooking Time (Low → High)
- Cooking Time (High → Low)
- Alphabetical (A → Z)

Sorting should update results immediately.

---

# Pagination

Implement server-side pagination.

Display

- Current Page
- Total Pages
- Previous Button
- Next Button

Disable navigation buttons when necessary.

---

# Recipe Grid

Display recipes using reusable Recipe Cards.

Each card should include

- Image
- Title
- Short Description
- Category
- Cooking Time
- Difficulty
- View Details Button

Desktop

4 Cards

Tablet

2 Cards

Mobile

1 Card

Maintain equal card heights.

---

# Loading State

Display Skeleton Cards while data is loading.

Avoid layout shifting.

---

# Empty State

If no recipes match

Display

- Friendly illustration or icon
- Message
- Reset Filters Button

---

# Error State

Handle API failures gracefully.

Provide

- Error Message
- Retry Button

Never crash the application.

---

# URL Synchronization

Synchronize

- Search
- Filters
- Sorting
- Pagination

with URL query parameters.

Example

/explore?category=dessert&difficulty=easy&page=2

Refreshing the page should preserve the state.

---

# Responsive Design

Optimize layouts for

- Mobile
- Tablet
- Desktop

Filters should collapse into a drawer on mobile.

---

# Accessibility

Ensure

- Semantic HTML
- Keyboard Navigation
- Proper Labels
- Accessible Filter Controls
- Focus States

---

# Performance

Use

- Debounced Search
- next/image
- Lazy Loading

Avoid unnecessary re-renders.

---

# Verification

Before stopping verify

✓ Search works

✓ Category filter works

✓ Difficulty filter works

✓ Cooking Time filter works

✓ Cuisine filter works

✓ Multiple filters work together

✓ Sorting works

✓ Pagination works

✓ URL query parameters work

✓ Skeleton loader works

✓ Empty state works

✓ Error state works

✓ Responsive layout

✓ No TypeScript errors

✓ No ESLint errors

✓ Build passes

---

# Deliverables

Expected Output

Complete Explore Recipes Page

Advanced Search

Multiple Filters

Sorting

Pagination

Responsive Grid

Skeleton Loader

Empty State

Error Handling

Production-ready UX

---

# Update

Update

docs/TASKS.md

Mark Explore Page tasks as completed.

---

# Stop

Do not build Recipe Details.

Do not build Dashboard.

Wait for the next prompt.