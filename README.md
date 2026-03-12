# Dashboard Task with TypeScript

A server-side rendered dashboard application built with **Express.js**, **TypeScript**, and **EJS** templates, using **MongoDB** (via Mongoose) as the database. This project implements a member management dashboard with full CRUD operations.

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js v5
- **Template Engine:** EJS
- **Database:** MongoDB (Mongoose ODM)
- **HTTP Method Override:** method-override
- **Environment Variables:** dotenv

## Project Structure

```
├── src/
│   ├── app.ts                # Application entry point
│   ├── controllers/          # Route controllers / request handlers
│   ├── models/               # Mongoose models / database schemas
│   ├── routes/               # Express route definitions
│   └── views/                # EJS templates
│       ├── index.ejs          # Home / dashboard page
│       ├── add-member.ejs     # Add new member form
│       ├── modify-member.ejs  # Edit member form
│       ├── error.ejs          # Error page
│       └── parts/             # Reusable EJS partials
├── package.json
├── tsconfig.json
└── .gitignore
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahmed8-6/Dashboard-Task-with-TypeScript.git
   cd Dashboard-Task-with-TypeScript
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```env
   DB_LOCAL=mongodb://localhost:27017/dashboard
   PORT=3000
   ```

## Usage

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Features

- **Member Management Dashboard** — View all members in a dashboard interface
- **Add Members** — Create new member entries via a form
- **Edit Members** — Modify existing member information
- **Delete Members** — Remove members from the database
- **Error Handling** — Custom error pages with http-errors

## Scripts

| Script         | Command                | Description                              |
| -------------- | ---------------------- | ---------------------------------------- |
| `npm run dev`  | `tsx watch src/app.ts` | Start development server with hot-reload |
| `npm run build`| `tsc -p tsconfig.json` | Compile TypeScript to JavaScript         |
| `npm start`    | `node dist/app.js`     | Start the production server              |

## License

ISC