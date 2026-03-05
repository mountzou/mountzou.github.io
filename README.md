# Chris Mountzouris – Portfolio

Personal portfolio site built with [Astro](https://astro.build), Tailwind CSS, and shadcn/ui.

## Project structure

The site is organized around **sections**: each visible block on the page (Education, Work, Projects, Repos, Articles, Conferences) is a separate section component under `src/sections/`. The homepage (`src/pages/index.astro`) composes these sections in order.

All section **data** is driven by JSON files in `src/content/`. The section components import the corresponding JSON and render it—no content is hard-coded in the section components. To update the site, edit the JSON files; adding or removing a section is done by changing the homepage and, if needed, adding a new section component and content file.

## Data: content JSON files

| File | Used by | Purpose |
|------|---------|---------|
| `education.json` | `Education.astro` | Education history |
| `work-experience.json` | `WorkExperience.astro` | Jobs and roles |
| `projects.json` | `Projects.astro` | Projects |
| `repos.json` | `Repos.astro` | GitHub (or other) repositories |
| `articles.json` | `Articles.astro` | Journal/publication articles |
| `conferences.json` | `Conferences.astro` | Conference papers/talks |

## JSON schemas

### `src/content/education.json`

```json
{
  "items": [
    {
      "degree": "string",
      "university": "string",
      "school": "string",
      "department": "string",
      "location": "string",
      "dateRange": "string",
      "specialization": "string (optional)"
    }
  ]
}
```

### `src/content/work-experience.json`

```json
{
  "items": [
    {
      "role": "string",
      "organization": "string",
      "locationType": "string",
      "relationshipType": "string",
      "dateRange": "string",
      "description": "string",
      "project": "string | null"
    }
  ]
}
```

### `src/content/projects.json`

```json
{
  "items": [
    {
      "title": "string",
      "description": "string",
      "url": "string",
      "tags": ["string"]
    }
  ]
}
```

### `src/content/repos.json`

```json
{
  "owner": "string",
  "items": [
    {
      "name": "string",
      "description": "string",
      "url": "string",
      "language": "string",
      "languageColor": "string",
      "stars": "number",
      "forks": "number"
    }
  ]
}
```

### `src/content/articles.json`

```json
{
  "highlightAuthor": "string",
  "items": [
    {
      "title": "string",
      "authors": "string",
      "journal": "string",
      "publisher": "string",
      "specialIssue": "string | null",
      "year": "string",
      "impactFactor": "string",
      "url": "string",
      "doi": "string (optional)"
    }
  ]
}
```

### `src/content/conferences.json`

```json
{
  "highlightAuthor": "string",
  "items": [
    {
      "title": "string",
      "authors": "string",
      "conferenceName": "string",
      "conferenceLocation": "string",
      "conferenceDate": "string",
      "year": "string",
      "url": "string | null"
    }
  ]
}
```

## Dependencies

All dependencies are declared in `package.json`. Install them with `npm install` (see [Setup](#setup)).

### Runtime

| Package | Purpose |
|--------|---------|
| **astro** | Static site framework |
| **@astrojs/react** | React integration for Astro |
| **react**, **react-dom** | React (for UI components) |
| **tailwindcss**, **@tailwindcss/vite** | Tailwind CSS and Vite plugin |
| **radix-ui** | Primitives for the shadcn Button component |
| **class-variance-authority**, **clsx**, **tailwind-merge** | Styling utilities (used by `src/lib/utils.ts` and UI components) |

### Development

| Package | Purpose |
|--------|---------|
| **shadcn** | CLI to add and manage shadcn/ui components |
| **tw-animate-css** | Animation utilities (imported in `src/styles/global.css`) |
| **@types/react**, **@types/react-dom** | TypeScript types for React |

## Setup

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build
