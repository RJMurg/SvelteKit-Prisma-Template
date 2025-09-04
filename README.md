# RJM SvelteKit Template - Prisma

This is a GitHub template repository for a SvelteKit Web App running with Prisma.
It is licensed under GNU's GPL V3.0, but is primarily for personal use.
This template is modified to have the Prisma ORM installed and given initial configuration. Changes to the Docker files were made to support this

A three-stage docker build is used to build the final container. Node packages, a build step, and the final distribution layer.

For the template without Prisma, look [here](https://github.com/RJMurg/SvelteKit-Template).

## Project Features

- TailwindCSS v4
- ShadCN (Next)
- Node Adapter
- Prisma
- Built in Containerisation (With Container Health Check)

## Dev Features

- Vitest
- Playwright E2E Testing
- ESLint
- Prettier
- PR Checks (Vitest, E2E & Test container build)
- Container build on push to master

## Setup:

1. Clone the repository

```bash
git clone https://github.com/RJMurg/SvelteKit-Prisma-Template.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

You are now ready to develop!
