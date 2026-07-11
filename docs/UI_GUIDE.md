# 🎨 UI_GUIDE.md

# RecipeHub UI & Design System

> This document defines the complete UI/UX design system for the RecipeHub project.
>
> Every page, component, spacing, color, typography, animation, and layout must follow this guide.
>
> Do not invent a different design language.

---

# Design Philosophy

RecipeHub should look like a modern production-ready SaaS application.

The design should be:

- Clean
- Modern
- Premium
- Minimal
- Professional
- User Friendly

Avoid unnecessary decorations.

Avoid too many colors.

Avoid inconsistent spacing.

Avoid oversized components.

Everything should feel connected.

---

# Color Palette

Use a maximum of 3 primary colors.

## Primary

Orange

HEX

#F97316

Use For

- Primary Button
- CTA
- Links
- Active Menu
- Icons

---

## Secondary

Green

HEX

#22C55E

Use For

- Success
- Healthy Recipes
- Positive Status

---

## Accent

Yellow

HEX

#FACC15

Use For

- Ratings
- Highlights
- Featured Labels

---

## Neutral Colors

White

Gray-50

Gray-100

Gray-300

Gray-600

Gray-900

Background

White

Cards

White

Text

Gray-900

Secondary Text

Gray-600

Borders

Gray-200

---

# Typography

Google Font

Poppins

Fallback

sans-serif

---

# Font Sizes

Hero Title

48px

Desktop

36px

Tablet

28px

Mobile

---

Heading 1

36px

Heading 2

30px

Heading 3

24px

Heading 4

20px

Body

16px

Small Text

14px

Caption

12px

Button

16px

---

# Font Weight

Hero

700

Heading

700

Body

400

Button

600

---

# Container

Maximum Width

1280px

Center

mx-auto

Padding

Desktop

px-8

Tablet

px-6

Mobile

px-4

---

# Spacing System

Section Gap

80px

Card Gap

24px

Grid Gap

24px

Input Gap

20px

Button Gap

16px

Paragraph Gap

12px

---

# Border Radius

Buttons

12px

Inputs

12px

Cards

20px

Images

20px

Modal

20px

---

# Shadow

Default

shadow-lg

Hover

shadow-xl

No heavy shadows.

---

# Buttons

## Primary Button

Background

Orange

Text

White

Height

48px

Padding

16px 24px

Radius

Rounded-xl

Hover

Darker Orange

Scale 1.02

---

## Secondary Button

White

Orange Border

Orange Text

Hover

Orange Background

White Text

---

## Danger Button

Red

Only for Delete actions.

---

## Disabled Button

Gray

Cursor Not Allowed

---

# Forms

Every form must be inside a centered card.

Maximum Width

700px

Padding

32px

Gap

20px

---

# Inputs

Height

48px

Radius

Rounded-xl

Border

Gray-300

Focus

Orange Ring

Always show labels.

Never use floating labels.

---

# Textarea

Minimum Height

140px

Resizable

No

---

# Select

Same style as Input.

---

# Recipe Card

Fixed Height

Consistent Width

Image Height

220px

Image

Object Cover

Information

Recipe Name

Category Badge

Difficulty Badge

Cooking Time

Rating

Short Description

Button

View Details

Hover Animation

Lift

Shadow

---

# Category Card

Image

Icon

Category Name

Recipe Count

Hover Scale

---

# Statistic Card

Large Number

Icon

Description

Mini Trend Indicator

---

# Dashboard Card

Title

Value

Icon

Small Description

---

# Testimonial Card

Avatar

Name

Occupation

Rating

Review

---

# FAQ

Accordion

Rounded

Orange Icon

Smooth Transition

---

# Navbar

Height

72px

Sticky

Blur Background

Logo Left

Menu Center

Buttons Right

Responsive Drawer

---

# Hero Section

Height

70vh

Left Side

Heading

Paragraph

Buttons

Right Side

Large Food Image

Background

Light Pattern

Optional Floating Icons

---

# Featured Recipes

Grid

Desktop

4 Columns

Tablet

2 Columns

Mobile

1 Column

Gap

24px

---

# Categories

Desktop

4 Columns

Tablet

2 Columns

Mobile

2 Columns

---

# Statistics

Four Statistic Cards

One Recharts Graph

---

# Testimonials

Three Cards

Responsive

---

# Newsletter

Centered Card

Email Input

Subscribe Button

---

# Footer

Four Columns

Logo

Quick Links

Support

Social Links

Bottom Copyright

---

# Explore Recipes Page

Search Bar

Filter Row

Sort Dropdown

Recipe Grid

Pagination

Skeleton

Empty State

---

# Recipe Details Page

Large Cover Image

Recipe Information

Ingredients

Cooking Instructions

Related Recipes

---

# Dashboard

Desktop

Sidebar Left

Content Right

Mobile

Drawer Sidebar

---

# Sidebar

Dashboard

Add Recipe

Manage Recipes

Logout

Highlight Active Route

---

# Tables

Desktop

Responsive Table

Mobile

Cards

Hover Effect

Striped Rows

---

# Modal

Centered

Rounded-xl

Dark Overlay

Scale Animation

Used For

Delete Confirmation

---

# Toast Notifications

Top Right

Success

Green

Error

Red

Warning

Yellow

Info

Blue

---

# Skeleton Loader

Recipe Card Skeleton

Dashboard Skeleton

Table Skeleton

Details Skeleton

---

# Empty State

Illustration

Title

Description

Primary Action Button

---

# Loading

Centered Spinner

Button Loading

Page Loading

---

# Animations

Library

Framer Motion

Allowed

Fade

Slide

Scale

Hover Lift

Accordion

Counter Animation

Not Allowed

Heavy Motion

Continuous Floating

Large Parallax

---

# Icons

Lucide React

Single Icon Style

No mixed libraries.

---

# Images

Use next/image

Lazy Loading

Rounded

Object Cover

Fallback Image

---

# Responsive Rules

Mobile

1 Column

Tablet

2 Columns

Desktop

4 Columns

Sidebar

Desktop Fixed

Mobile Drawer

Navbar

Desktop Menu

Mobile Drawer

Tables

Desktop Table

Mobile Cards

---

# Accessibility

Keyboard Navigation

Visible Focus

Proper Labels

Alt Text

ARIA Labels

Readable Contrast

---

# Empty Content

Never use

Lorem Ipsum

Dummy Text

Broken Images

Placeholder Buttons

Every page should contain meaningful content.

---

# Design Consistency

Every page must use:

- Same colors
- Same spacing
- Same radius
- Same typography
- Same shadows
- Same animations
- Same buttons
- Same cards

The user should feel like they are using one single application.

---

# Acceptance Criteria

✅ Consistent Color System

✅ Responsive Layout

✅ Same Card Design

✅ Same Button Design

✅ Accessible UI

✅ Professional Typography

✅ Responsive Navigation

✅ Consistent Spacing

✅ Premium User Experience

✅ Modern SaaS Style