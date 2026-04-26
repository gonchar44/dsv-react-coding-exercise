# DSV React Coding Exercise

A small Vite + React coding exercise focused on local data transformation, user
list interactions, and reducer-based counter logic.

## Tech Stack

- Vite 6
- React 19
- TypeScript 5
- Material UI 6
- Emotion
- ESLint and Prettier

## Requirements

- Node.js 18 or newer
- npm

The project CI uses Node.js `20.10.0`, so that version is recommended if you
want to match the automated checks exactly.

## Getting Started

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint for the `src` directory
- `npm run format:check` - check formatting with Prettier
- `npm run format:fix` - format supported project files with Prettier

## What Was Implemented

- Migrated the exercise from Create React App to Vite and upgraded it to React 19.
- Added strict TypeScript types for raw and processed user data.
- Implemented user data processing: adult users only, generated six-character
  IDs, selected display fields, and sorting by age and company name.
- Added a Material UI user interface with user cards, username search, remove,
  and restore behavior.
- Added a reducer-based counter with increment, random increment, next odd,
  decrement, decrement by value, and reset actions.
- Added ESLint, Prettier, and GitHub Actions checks for pull requests.
