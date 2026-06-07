import articlesData from "../../data/portfolio/articles.json";
import conferencesData from "../../data/portfolio/conferences.json";
import educationData from "../../data/portfolio/education.json";
import projectsData from "../../data/portfolio/projects.json";
import reposData from "../../data/portfolio/repos.json";
import workExperienceData from "../../data/portfolio/work-experience.json";

const hasText = (value: unknown): value is string =>
  typeof value === "string" && value.trim() !== "";

const trimText = (value: unknown) => (hasText(value) ? value.trim() : "");

export const educationItems = educationData.items
  .filter((item) => hasText(item.degree))
  .map((item) => ({
    ...item,
    degree: trimText(item.degree),
    university: trimText(item.university),
    school: trimText(item.school),
    department: trimText(item.department),
    location: trimText(item.location),
    dateRange: trimText(item.dateRange),
    specialization: trimText(item.specialization),
    thesis: trimText(item.thesis),
    ects: trimText(item.ects),
    gpa: trimText(item.gpa),
    ongoing: typeof item.ongoing === "boolean" ? item.ongoing : undefined,
  }));

export const workExperienceItems = workExperienceData.items
  .filter((item) => hasText(item.role))
  .map((item) => ({
    ...item,
    role: trimText(item.role),
    organization: trimText(item.organization),
    locationType: trimText(item.locationType),
    relationshipType: trimText(item.relationshipType),
    dateRange: trimText(item.dateRange),
    description: trimText(item.description),
    project: trimText(item.project),
    highlights: Array.isArray(item.highlights)
      ? item.highlights.filter(hasText).map((highlight) => highlight.trim())
      : [],
  }));

export const projectItems = projectsData.items
  .filter((item) => hasText(item.title))
  .map((item) => ({
    ...item,
    title: trimText(item.title),
    description: trimText(item.description),
    url: trimText(item.url),
    tags: Array.isArray(item.tags)
      ? item.tags.filter(hasText).map((tag) => tag.trim())
      : [],
  }));

export const repoOwner = trimText(reposData.owner);

export const repoItems = reposData.items
  .filter((item) => hasText(item.name))
  .map((item) => ({
    ...item,
    name: trimText(item.name),
    description: trimText(item.description),
    url: trimText(item.url),
    language: trimText(item.language),
    languageColor: trimText(item.languageColor),
    status: trimText(item.status) || "active",
    license: trimText(item.license),
    updatedAt: trimText(item.updatedAt),
    stars: typeof item.stars === "number" ? item.stars : 0,
    forks: typeof item.forks === "number" ? item.forks : 0,
    issues: typeof item.issues === "number" ? item.issues : 0,
    tags: Array.isArray(item.tags)
      ? item.tags.filter(hasText).map((tag) => tag.trim().replace(/^#/, ""))
      : [],
  }));

export const articleHighlightAuthor = trimText(articlesData.highlightAuthor);

export const articleItems = articlesData.items
  .filter((item) => hasText(item.title))
  .map((item) => ({
    ...item,
    title: trimText(item.title),
    authors: trimText(item.authors),
    journal: trimText(item.journal),
    publisher: trimText(item.publisher),
    specialIssue: trimText(item.specialIssue),
    year: trimText(item.year),
    impactFactor: trimText(item.impactFactor),
    quartile: trimText(item.quartile),
    citations: trimText(item.citations),
    url: trimText(item.url),
  }))
  .sort((a, b) => Number(b.year) - Number(a.year));

export const conferenceHighlightAuthor = trimText(conferencesData.highlightAuthor);

export const conferenceItems = conferencesData.items
  .filter((item) => hasText(item.title))
  .map((item) => ({
    ...item,
    title: trimText(item.title),
    authors: trimText(item.authors),
    conferenceName: trimText(item.conferenceName),
    conferenceLocation: trimText(item.conferenceLocation),
    conferenceDate: trimText(item.conferenceDate),
    year: trimText(item.year),
    url_doi: trimText(item.url_doi),
    url_researchgate: trimText(item.url_researchgate),
    url_google_scholar: trimText(item.url_google_scholar),
    citations: trimText(item.citations),
  }))
  .sort((a, b) => Number(b.year) - Number(a.year));
