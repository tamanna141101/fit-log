# 🏋️ FitLog — Workout Library

FitLog is a modern, responsive workout library and workout planning web application built with Next.js. It allows users to explore workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and track their workout progress.

The application features a clean, dark, fitness-focused interface and is designed to work smoothly across mobile, tablet, and desktop devices.

---

## 🔗 Live & Repository

### 🌐 Live Website

https://fit-log-ruddy.vercel.app

### 💻 GitHub Repository

https://github.com/tamanna141101/fit-log

---

## ✨ Key Features

### 🏋️ Workout Library

- Browse all available workouts from the FitLog API
- Responsive workout card grid
- Workout image/illustration
- Workout name
- Category tags
- Equipment information
- Duration
- Calories
- Rating

### 📋 Today's Plan

- Add workouts to Today's Plan
- Maximum of five workouts can be added to today's plan
- Plan counter updates automatically
- View all planned workouts from the My Plan page
- Track total exercises
- Track total workout duration
- Track total calories

### 💾 Save for Later

- Save workouts for later
- Saved counter updates automatically
- Manage saved workouts from the My Plan page

### 📖 Workout Details

Each workout has a dedicated detail page containing:

- Workout image
- Workout title
- Description
- Category tags
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can add a workout to Today's Plan or save it for later directly from the details page.

### ✅ Workout Progress

- Mark planned workouts as Done
- Remove workouts from Today's Plan
- Toast notifications for actions
- Live metrics update when workouts are added or removed

### 🔎 Sort Workouts

The workout library can be sorted by:

- Duration
- Calories
- Rating

### 🔔 Toast Notifications

Toast notifications are displayed for important user actions, including:

- Adding a workout to Today's Plan
- Saving a workout
- Marking a workout as Done
- Removing a workout

### ⏳ Loading States

Loading indicators are displayed while workout data is being fetched from the API.

### 🚫 Custom 404 Page

A custom 404 page is included for invalid or unknown routes with an option to return to the Home page.

### 💾 Local Storage

Today's Plan and Saved workouts are stored in localStorage so that the selected workouts can remain available after refreshing the page.

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Architecture

- Next.js App Router
- React Context API
- Dynamic Routing
- Client Components

### Data & State Management

- REST API
- Fetch API
- React Hooks
- React Context API
- LocalStorage

### UI

- Tailwind CSS
- Lucide React / React Icons
- Responsive CSS

### Deployment

- Vercel

---
## 🔌 API

FitLog uses REST APIs to fetch workout data.

### All Workout Data

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

### Alternative API — All Workout Data

https://api.api-store.workers.dev/api/fitlog

### Alternative API — Single Workout

https://api.api-store.workers.dev/api/fitlog/:id




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## 👩‍💻 Developer

### Tamanna Islam