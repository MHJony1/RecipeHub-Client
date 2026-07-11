# 🏠 Phase 06 - Home Page

## Objective

Build a modern, responsive and production-ready Home Page for RecipeHub.

This page should create a strong first impression while fulfilling all assignment requirements.

Use only real API data.

Never use dummy or placeholder content.

---

# Read First

Before writing any code, carefully read

- docs/PROJECT.md
- docs/UI_GUIDE.md
- docs/COMPONENTS.md
- docs/RULES.md
- docs/TASKS.md
- docs/CLAUDE.md

Never skip documentation.

---

# Goal

Build a beautiful landing page with premium UI and smooth user experience.

The Home Page should be fully responsive and optimized.

---

# Navbar

Build a responsive sticky navigation bar.

Requirements

- Logo
- Home
- Explore Recipes
- About
- Contact

Guest User

- Login
- Register

Authenticated User

- Dashboard
- Add Recipe
- Manage Recipes
- Logout

Navbar should collapse into a mobile menu.

---

# Hero Section

Height

60–70vh

Include

- Main Heading
- Short Description
- Primary CTA
- Secondary CTA
- Hero Image
- Decorative Background
- Smooth Animation

CTA Buttons

- Explore Recipes
- Add Recipe (Logged In)

---

# Section 1 - Featured Recipes

Fetch latest featured recipes from API.

Display

- Image
- Title
- Short Description
- Category
- Cooking Time
- Difficulty
- View Details Button

Desktop

4 cards per row

Tablet

2 cards

Mobile

1 card

Show Skeleton Loader while loading.

---

# Section 2 - Recipe Categories

Display recipe categories.

Example

- Breakfast
- Lunch
- Dinner
- Dessert
- Snacks
- Drinks

Each category card should be clickable.

---

# Section 3 - Why Choose RecipeHub

Display feature cards.

Example

- Easy Recipes
- Healthy Meals
- Quick Cooking
- Community Driven

Each feature should include

- Icon
- Title
- Description

---

# Section 4 - Latest Recipes

Fetch newest recipes.

Display as responsive cards.

Each card includes

- Image
- Title
- Category
- Cooking Time
- View Details

---

# Section 5 - Cooking Statistics

Use Recharts.

Display statistics such as

- Total Recipes
- Categories
- Average Cooking Time
- Community Contributions

Use API data where possible.

---

# Section 6 - Testimonials

Display real testimonial content stored in static data or database.

Each testimonial should include

- Avatar
- Name
- Comment
- Rating

Responsive slider or grid.

---

# Section 7 - FAQ

Accordion layout.

Minimum 5 questions.

Smooth open/close animation.

---

# Section 8 - Newsletter

Simple subscription section.

Fields

- Email

Button

Subscribe

Validation required.

---

# Call To Action

Create a full-width CTA section.

Heading

Encourage users to share recipes.

Buttons

- Start Cooking
- Explore Recipes

---

# Footer

Responsive footer.

Include

- Logo
- Navigation Links
- Contact Information
- Social Links
- Copyright

Only working links.

---

# API Integration

Fetch data using reusable services.

Never write fetch() inside components.

Use loading states.

Handle errors gracefully.

---

# UI Requirements

Use consistent

- Colors
- Typography
- Card Design
- Border Radius
- Shadows
- Button Styles

No inconsistent spacing.

---

# Animations

Use Framer Motion where appropriate.

Examples

- Hero Fade In
- Card Hover
- Section Reveal
- Button Hover

Keep animations subtle.

---

# Accessibility

Ensure

- Semantic HTML
- Keyboard Navigation
- Accessible Buttons
- Proper Headings
- Alt Text

---

# Performance

Use

next/image

Lazy loading

Optimized assets

Avoid unnecessary Client Components.

---

# Verification

Before stopping verify

✓ Navbar responsive

✓ Hero responsive

✓ Minimum 7 sections completed

✓ Footer working

✓ Featured recipes loaded

✓ Statistics rendered

✓ Newsletter working

✓ Skeleton loaders working

✓ Responsive design

✓ No console errors

✓ No TypeScript errors

✓ No ESLint errors

✓ Build passes

---

# Deliverables

Expected Output

Professional Landing Page

Responsive Navbar

Premium Hero Section

7+ Meaningful Sections

Footer

Real API Integration

Charts

Animations

Responsive Layout

Production-ready UI

---

# Update

Update

docs/TASKS.md

Mark Home Page tasks as completed.

---

# Stop

Do not build Explore Page.

Do not build Recipe Details.

Do not build Dashboard.

Wait for the next prompt.