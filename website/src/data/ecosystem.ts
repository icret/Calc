import type { Locale } from '~/i18n';

export interface EcosystemItem {
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
  icon: string;
}

export const ecosystem: EcosystemItem[] = [
  {
    name: { 'zh-Hans': '灵动岛', 'en': 'Dynamic Island' },
    desc: { 'zh-Hans': '实时显示计算', 'en': 'Live calculation' },
    icon: '<rect x="2" y="6" width="20" height="12" rx="6"/>',
  },
  {
    name: { 'zh-Hans': '小组件', 'en': 'Widget' },
    desc: { 'zh-Hans': '桌面快速计算', 'en': 'Quick on desktop' },
    icon: '<rect x="3" y="3" width="18" height="18" rx="4"/>',
  },
  {
    name: { 'zh-Hans': 'Siri', 'en': 'Siri' },
    desc: { 'zh-Hans': '语音快捷指令', 'en': 'Voice shortcuts' },
    icon: '<path d="M2 12h2M6 8v8M10 5v14M14 8v8M18 6v12M22 12h-2"/>',
  },
  {
    name: { 'zh-Hans': 'Spotlight', 'en': 'Spotlight' },
    desc: { 'zh-Hans': '主屏搜索历史', 'en': 'Search history' },
    icon: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  },
  {
    name: { 'zh-Hans': 'Handoff', 'en': 'Handoff' },
    desc: { 'zh-Hans': '跨设备接力', 'en': 'Cross-device' },
    icon: '<rect x="2" y="7" width="8" height="10" rx="2"/><rect x="14" y="7" width="8" height="10" rx="2"/><path d="M10 12h4"/>',
  },
  {
    name: { 'zh-Hans': '菜单栏', 'en': 'Menu Bar' },
    desc: { 'zh-Hans': '常驻状态栏计算器', 'en': 'Always-on status calculator' },
    icon: '<rect x="2" y="3" width="20" height="3" rx="1.5"/><rect x="4" y="9" width="10" height="11" rx="1.5"/>',
  },
];