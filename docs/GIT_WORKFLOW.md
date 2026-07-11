# 🌿 GIT_WORKFLOW.md

# RecipeHub Git Workflow

This document defines the Git workflow for the project.

---

# Branch Strategy

main

Production-ready code only.

develop

Active development.

Feature Branches

feature/authentication

feature/home-page

feature/explore

feature/dashboard

feature/ui-polish

Fix Branches

fix/login

fix/navbar

fix/filter

---

# Commit Convention

Use Conventional Commits.

Examples

feat:

New Feature

Example

feat: implement recipe authentication

fix:

Bug Fix

Example

fix: resolve pagination issue

refactor:

Code Improvement

Example

refactor: optimize recipe service

docs:

Documentation

Example

docs: update API specification

style:

Formatting

Example

style: improve dashboard spacing

chore:

Maintenance

Example

chore: update dependencies

---

# Commit Rules

Each commit should contain

One logical change only.

Do not mix

Bug Fix

New Feature

Refactoring

into one commit.

---

# Before Commit

Verify

TypeScript

↓

ESLint

↓

Build

↓

Manual Testing

Only commit if everything passes.

---

# Pull Request Checklist

Verify

✓ Feature Completed

✓ Responsive

✓ No Console Errors

✓ TypeScript Pass

✓ Build Pass

✓ Documentation Updated

---

# Merge Rules

Never merge broken code.

Always verify

Build

TypeScript

Lint

before merge.

---

# Versioning

Major

Breaking Changes

Minor

New Features

Patch

Bug Fixes

---

# Release Checklist

Verify

Frontend Works

Backend Works

Authentication

CRUD

Dashboard

Responsive Layout

Deployment

README Updated

---

# Final Rule

Keep Git history clean.

Every commit should explain

WHAT

was changed.

Commit messages should be short, clear and meaningful.