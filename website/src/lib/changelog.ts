import { format, parseISO, isValid } from 'date-fns';
import type { Locale } from '~/i18n';

export interface ReleaseSection {
  title: string;
  items: string[];
}

export interface Release {
  version: string;
  date: string;
  isUnreleased: boolean;
  locale: Locale;
  sections: ReleaseSection[];
  id: string;
}

export function slugify(version: string): string {
  return version === 'Unreleased' ? 'unreleased' : `v-${version.replaceAll('.', '-')}`;
}

export function escapeHtml(s: string): string {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

const CODE_RE = /`([^`]+)`/g;

export function renderInline(text: string): string {
  return escapeHtml(text).replace(
    CODE_RE,
    (_, code: string) =>
      `<code class="rounded bg-zinc-100 dark:bg-zinc-800/50 px-1.5 py-0.5 font-mono text-amber-600 dark:text-amber-400">${code}</code>`,
  );
}

export function parseReleaseBody(
  body: string,
  meta: { version: string; date: string; isUnreleased: boolean; locale: Locale },
): Release {
  const sections: ReleaseSection[] = [];
  let current: ReleaseSection | null = null;

  for (const line of body.split('\n')) {
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      current = { title: h3[1].trim(), items: [] };
      sections.push(current);
      continue;
    }
    const li = line.match(/^-\s+(.+)$/);
    if (li && current) current.items.push(li[1].trim());
  }

  return { ...meta, sections, id: slugify(meta.version) };
}

export function formatDate(
  dateStr: string,
  isUnreleased: boolean,
  locale: Locale,
  unreleasedLabel: string,
): string {
  if (isUnreleased) return unreleasedLabel;
  const date = parseISO(dateStr);
  if (!isValid(date)) return dateStr;
  if (locale === 'en') return format(date, 'MMM d, yyyy');
  return format(date, 'yyyy 年 M 月 d 日');
}

export function formatDateShort(dateStr: string): string {
  const date = parseISO(dateStr);
  if (!isValid(date)) return dateStr;
  return format(date, 'yyyy.MM.dd');
}

