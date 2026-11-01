import { getCollection, type CollectionEntry } from 'astro:content';
import { nav } from '../data/site';

const isPublished = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

/** Published projects, sorted by `order` then newest first. */
export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const entries = await getCollection('projects', isPublished);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

// Querying an empty collection logs a warning on every page, so check for files first.
const labFiles = import.meta.glob('../content/lab/**/*.{md,mdx}');

/** Published lab entries, newest first. */
export async function getLabEntries(): Promise<CollectionEntry<'lab'>[]> {
  if (Object.keys(labFiles).length === 0) return [];
  const entries = await getCollection('lab', isPublished);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Navigation items, leaving out Lab while it has no published entries. */
export async function getNav() {
  const hasLab = (await getLabEntries()).length > 0;
  return nav.filter((item) => item.href !== '/lab' || hasLab);
}

export const categoryLabel = {
  'analytics-engineering': 'Analytics engineering',
  'data-science': 'Data science',
  bi: 'BI & reporting',
} as const;

export const statusLabel = {
  active: 'In progress',
  paused: 'Paused',
  shipped: 'Shipped',
} as const;

export const formatYear = (date: Date) => date.getUTCFullYear().toString();

/** A project's period if it has one, otherwise its year. */
export const projectWhen = (data: { date: Date; period?: string }) =>
  data.period ?? formatYear(data.date);

export const formatMonthYear = (date: Date) =>
  date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
