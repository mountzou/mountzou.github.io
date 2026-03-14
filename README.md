# mountzou.github.io

![Astro](https://img.shields.io/badge/Astro-5.18.0-orange) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-blue)

A static personal portfolio site built with Astro and Tailwind CSS.

## Project structure

The site is organized around **sections** — each section maps to a thematic area of a portfolio, including education, work experience, projects, repositories, and publications in journals and conference proceedings. Each section is implemented as a separate component under `src/sections/`.

All section content is sourced from dedicated JSON files under `src/content/` — no content is hard-coded in the components. To update a section's content, edit the corresponding JSON file.

## Data: content JSON files

| File | Used by | Purpose |
|------|---------|---------|
| `education.json` | `Education.astro` | Education |
| `work-experience.json` | `WorkExperience.astro` | Work Experience |
| `projects.json` | `Projects.astro` | Projects |
| `repos.json` | `Repos.astro` | GitHub (or other) repositories |
| `articles.json` | `Articles.astro` | Papers in journals |
| `conferences.json` | `Conferences.astro` | Papers in conference proceedings |

## JSON schemas

The structure of each .json file under `src/content/` is as follows:

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
      "specialization": "string"
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
      "url": "string"
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
      "year": "string"
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
| **tailwindcss**, **@tailwindcss/vite** | Tailwind CSS and Vite plugin |

## Setup

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build
