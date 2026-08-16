const siteEnv = import.meta.env.SITE as string | undefined;
export const SITE = (siteEnv ?? 'https://icret.github.io').replace(/\/$/, '');
export const BASE = ((import.meta.env.BASE_URL as string) ?? '/').replace(/\/$/, '');

export function pageUrl(path: string): string {
  const p = path === '/' || path === '' ? '/' : (path.endsWith('/') ? path : path + '/');
  return SITE + BASE + p;
}