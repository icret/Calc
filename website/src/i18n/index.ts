export type Locale = 'zh-Hans' | 'en';

export const DEFAULT_LOCALE: Locale = 'zh-Hans';
export const LOCALES: Locale[] = ['zh-Hans', 'en'];

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  'zh-Hans': 'zh-Hans',
  'en': 'en',
};

export const LOCALE_OG: Record<Locale, string> = {
  'zh-Hans': 'zh_CN',
  'en': 'en_US',
};

const BASE = ((import.meta.env.BASE_URL as string) ?? '/').replace(/\/$/, '');

export function localePath(locale: Locale, path: string = ''): string {
  let p: string;
  if (locale === DEFAULT_LOCALE) {
    p = path === '' ? '/' : path;
  } else {
    const enBase = '/en';
    if (path === '' || path === '/') p = enBase;
    else p = enBase + (path.startsWith('/') ? path : '/' + path);
  }
  if (!p.endsWith('/')) p += '/';
  return (BASE === '' ? '' : BASE) + p;
}

export function alternatePath(locale: Locale, path: string = ''): string {
  return localePath(locale, path);
}

export function isEn(locale: Locale): boolean {
  return locale === 'en';
}