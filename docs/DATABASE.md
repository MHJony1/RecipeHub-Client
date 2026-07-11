# 🗄️ DATABASE.md

# RecipeHub Database Documentation

> This document defines the complete database structure for the RecipeHub application.

---

# Database

Database Name

recipehub

Database

MongoDB Atlas

ODM

Mongoose

Collections

1. users

2. recipes

No additional collections should be created unless explicitly required.

---

# Collection: Users

## Purpose

Stores registered user information.

---

## Schema

_id

MongoDB ObjectId

Automatically generated.

---

name

Type

String

Required

Yes

Minimum Length

3

Maximum Length

50

---

email

Type

String

Required

Yes

Unique

Yes

Lowercase

Yes

Trim

Yes

---

password

Type

String

Required

Yes

Store only hashed password using bcrypt.

Never store plain text passwords.

---

photoURL

Type

String

Required

No

Default

User Avatar

---

createdAt

Date

Automatically generated.

---

updatedAt

Date

Automatically generated.

---

# User Example

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2b$10$xxxxxxxxxxxx",
  "photoURL": "https://...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

# Collection: Recipes

## Purpose

Stores all recipe information.

---

## Schema

_id

ObjectId

---

title

String

Required

Maximum 100 characters.

---

slug

String

Automatically generated.

Unique

Required

Example

chicken-fried-rice

---

shortDescription

String

Required

Maximum

150 characters.

---

description

String

Required

Full recipe description.

---

category

String

Required

Allowed Values

Breakfast

Lunch

Dinner

Dessert

Fast Food

Healthy

Seafood

Vegetarian

---

difficulty

String

Required

Allowed

Easy

Medium

Hard

---

cookingTime

Number

Required

Store minutes only.

Example

25

---

ingredients

Array<String>

Required

Example

```json
[
 "Chicken",
 "Garlic",
 "Salt",
 "Pepper"
]
```

---

instructions

Array<String>

Required

Example

```json
[
 "Heat oil",
 "Cook chicken",
 "Serve hot"
]
```

---

image

String

Recipe Cover Image

Optional

---

rating

Number

Default

0

Minimum

0

Maximum

5

---

author

Object

```json
{
   "name":"",
   "email":"",
   "photoURL":""
}
```

---

createdBy

MongoDB ObjectId

Reference

User

Required

---

createdAt

Automatically generated.

---

updatedAt

Automatically generated.

---

# Recipe Example

```json
{
   "_id":"...",
   "title":"Chicken Pasta",
   "slug":"chicken-pasta",
   "shortDescription":"Creamy chicken pasta.",
   "description":"Full recipe...",
   "category":"Dinner",
   "difficulty":"Easy",
   "cookingTime":30,
   "ingredients":[
      "Chicken",
      "Salt",
      "Butter"
   ],
   "instructions":[
      "Heat pan",
      "Cook chicken",
      "Serve"
   ],
   "image":"https://...",
   "rating":4.8,
   "author":{
      "name":"John",
      "email":"john@example.com",
      "photoURL":"..."
   },
   "createdBy":"ObjectId",
   "createdAt":"...",
   "updatedAt":"..."
}
```

---

# Relationships

One User

↓

Can Create

↓

Many Recipes

Relationship

1:N

---

# Indexes

Users

email

Unique

Recipes

slug

Unique

Recipes

category

Index

Recipes

title

Text Index

Recipes

createdAt

Descending

---

# Validation Rules

Users

Name Required

Email Required

Password Required

Password Minimum 6 Characters

---

Recipes

Title Required

Short Description Required

Description Required

Category Required

Difficulty Required

Cooking Time Required

Ingredients Required

Instructions Required

---

# Slug Generation

Generate automatically.

Example

Chicken Fried Rice

↓

chicken-fried-rice

Rules

Lowercase

Replace spaces with "-"

Remove special characters

Unique

---

# Query Requirements

Support

Search

Filter

Sorting

Pagination

---

# Search

Search by

Recipe Title

Case insensitive

MongoDB Regex

---

# Filter

Category

Difficulty

---

# Sort

Newest

Oldest

Highest Rating

Cooking Time

---

# Pagination

Default

8 Recipes

Parameters

?page=1

&limit=8

---

# Security

Never expose password.

Always hash password.

Validate ObjectId.

Validate all inputs.

Never trust frontend data.

---

# Environment Variables

Backend

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLIENT_URL=
```

Frontend

```env
NEXT_PUBLIC_API_URL=
```

---

# Acceptance Criteria

✅ MongoDB Connected

✅ User Model Created

✅ Recipe Model Created

✅ Validation Added

✅ Slug Generated

✅ Password Hashed

✅ Indexes Added

✅ Timestamps Enabled

✅ Relationship Implemented
