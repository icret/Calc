import type { Locale } from '~/i18n';
import type { ImageMetadata } from 'astro';

export interface GalleryItem {
  id: string;
  image: ImageMetadata;
  caption: Record<Locale, string>;
  alt: Record<Locale, string>;
}

const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.webp', {
  eager: true,
});

const captions: Record<string, Record<Locale, string>> = {
  'macos-01': { 'zh-Hans': '科学函数 · 深色', 'en': 'Scientific · Dark' },
  'macos-02': { 'zh-Hans': '常数库 · 深色', 'en': 'Constants · Dark' },
  'macos-03': { 'zh-Hans': '历史记录 · 深色', 'en': 'History · Dark' },
  'macos-04': { 'zh-Hans': '设置 · 深色', 'en': 'Settings · Dark' },
  'macos-05': { 'zh-Hans': '公式库 · 深色', 'en': 'Formulas · Dark' },
  'macos-06': { 'zh-Hans': '函数管理 · 深色', 'en': 'Functions · Dark' },
  'macos-07': { 'zh-Hans': '单位换算 · 深色', 'en': 'Units · Dark' },
  'macos-08': { 'zh-Hans': '货币换算 · 深色', 'en': 'Currency · Dark' },
  'macos-09': { 'zh-Hans': '变量与方程 · 深色', 'en': 'Variables · Dark' },
  'macos-10': { 'zh-Hans': '分组与小计 · 深色', 'en': 'Sections · Dark' },
  'macos-11': { 'zh-Hans': '滑块与函数表 · 深色', 'en': 'Sliders · Dark' },
  'macos-12': { 'zh-Hans': '侧边栏导航 · 深色', 'en': 'Sidebar · Dark' },
};

export const galleryItems: GalleryItem[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const id = path.split('/').pop()!.replace(/\.webp$/, '');
    const caption = captions[id] ?? { 'zh-Hans': `AuraCalc · ${id}`, 'en': `AuraCalc · ${id}` };
    return {
      id,
      image: mod.default,
      caption,
      alt: {
        'zh-Hans': `AuraCalc macOS 应用截图 · ${caption['zh-Hans']}`,
        'en': `AuraCalc macOS app screenshot · ${caption['en']}`,
      },
    };
  });