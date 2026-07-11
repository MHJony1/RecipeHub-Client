# 🧩 COMPONENTS.md

# RecipeHub Component Architecture

> This document defines the complete component architecture of the RecipeHub application.
>
> Every UI element should be reusable.
>
> Avoid duplicate components.
>
> Components should be small, modular, and maintainable.

---

# Component Design Rules

Every component must have a single responsibility.

Every component should be reusable.

Never duplicate UI.

Never mix business logic with UI.

Components should receive data through props whenever possible.

Large pages should be composed of small reusable components.

---

# Project Component Structure

src/

components/

common/

layout/

home/

recipe/

dashboard/

forms/

ui/

---

# Common Components

These components are used everywhere.

Navbar

Footer

Container

SectionTitle

LoadingSpinner

Skeleton

EmptyState

Modal

Pagination

Breadcrumb

ProtectedRoute

NotFound

---

# UI Components

PrimaryButton

SecondaryButton

DangerButton

InputField

TextAreaField

SelectField

SearchInput

FilterDropdown

SortDropdown

Badge

Avatar

Card

Toast

Tooltip

Divider

---

# Layout Components

MainLayout

DashboardLayout

Container

Sidebar

DashboardHeader

MobileDrawer

PageHeader

SectionWrapper

---

# Home Components

Hero

HeroContent

HeroImage

FeaturedRecipes

RecipeGrid

RecipeCard

Categories

CategoryCard

WhyChooseUs

FeatureCard

Statistics

StatisticCard

ChartCard

Testimonials

TestimonialCard

FAQ

AccordionItem

Newsletter

FooterCTA

---

# Recipe Components

RecipeGrid

RecipeCard

RecipeMeta

RecipeImage

RecipeBadge

RecipeActions

RecipeDetails

RecipeHeader

IngredientList

InstructionList

RelatedRecipes

RecipeAuthor

RecipeInfo

RecipeStats

---

# Authentication Components

LoginForm

RegisterForm

AuthCard

PasswordInput

RememberMe

AuthHeader

AuthFooter

---

# Dashboard Components

DashboardOverview

DashboardStats

DashboardChart

RecentRecipes

SidebarNavigation

DashboardHeader

DashboardCard

ManageRecipeTable

RecipeRow

DeleteRecipeModal

AddRecipeForm

---

# Form Components

RecipeForm

FormInput

FormTextarea

FormSelect

ImageUploadField

SubmitButton

ResetButton

ValidationMessage

---

# About Components

AboutHero

Mission

Vision

TechnologyStack

DeveloperSection

---

# Contact Components

ContactForm

ContactInformation

SocialLinks

LocationCard

MapSection

---

# Page Structure

## Home Page

MainLayout

│

├── Navbar

├── Hero

├── FeaturedRecipes

├── Categories

├── WhyChooseUs

├── Statistics

├── Testimonials

├── FAQ

├── Newsletter

└── Footer

---

## Explore Recipes

MainLayout

│

├── Navbar

├── PageHeader

├── SearchBar

├── FilterBar

├── SortDropdown

├── RecipeGrid

├── Pagination

└── Footer

---

## Recipe Details

MainLayout

│

├── Navbar

├── RecipeHeader

├── RecipeImage

├── RecipeInfo

├── IngredientList

├── InstructionList

├── RelatedRecipes

└── Footer

---

## Dashboard

DashboardLayout

│

├── Sidebar

├── DashboardHeader

├── DashboardOverview

├── DashboardStats

├── DashboardChart

└── RecentRecipes

---

## Add Recipe

DashboardLayout

│

├── Sidebar

├── DashboardHeader

└── RecipeForm

---

## Manage Recipes

DashboardLayout

│

├── Sidebar

├── DashboardHeader

├── ManageRecipeTable

└── DeleteRecipeModal

---

# Component Responsibilities

## Navbar

Display navigation links.

Handle mobile navigation.

Display authentication buttons.

---

## Footer

Display useful links.

Contact information.

Social links.

Copyright.

---

## RecipeCard

Display recipe summary.

Never fetch data.

Receive recipe through props.

---

## RecipeGrid

Receive recipe array.

Render RecipeCard list.

Handle empty state.

---

## SearchInput

Manage search keyword.

Debounced input.

---

## FilterDropdown

Filter by category.

Filter by difficulty.

---

## SortDropdown

Sort recipes.

Never fetch directly.

---

## Pagination

Display pages.

Handle page change.

---

## RecipeForm

Used for:

Add Recipe

Future Edit Recipe

Reusable.

---

## DashboardCard

Display dashboard statistics.

No API calls.

---

## StatisticCard

Display numeric statistics.

Optional animation.

---

## ChartCard

Render Recharts graph.

Receive chart data via props.

---

## EmptyState

Reusable everywhere.

Props

Title

Description

Button

Illustration

---

## LoadingSpinner

Reusable.

Centered.

---

## Skeleton

Reusable.

Recipe Skeleton

Dashboard Skeleton

Table Skeleton

---

# Component Communication

Pages

↓

Containers

↓

Components

↓

UI Components

Data should always flow downward.

Avoid prop drilling where possible.

---

# State Management

Use local state whenever possible.

Use Context only for authentication.

Use TanStack Query for server state.

Do not use unnecessary global state.

---

# Reusable Principles

Every Button

↓

Same Component

Every Input

↓

Same Component

Every Card

↓

Same Component

Every Modal

↓

Same Component

Never duplicate.

---

# Component Naming Convention

PascalCase

Examples

RecipeCard

RecipeGrid

DashboardCard

SearchInput

PrimaryButton

DeleteRecipeModal

IngredientList

InstructionList

---

# File Naming

RecipeCard.tsx

RecipeGrid.tsx

DashboardCard.tsx

SearchInput.tsx

Never use lowercase component names.

---

# Props Rules

Always define interfaces.

Example

interface RecipeCardProps

interface ButtonProps

interface ModalProps

Never use "any".

---

# Component Size Rules

Simple Components

<100 lines

Medium Components

100–200 lines

Large Components

Split into smaller components.

Never create a component larger than 250 lines.

---

# Acceptance Criteria

✅ Components are reusable.

✅ No duplicate UI.

✅ Every component has one responsibility.

✅ Proper TypeScript interfaces.

✅ Clean component hierarchy.

✅ Responsive components.

✅ Maintainable architecture.
