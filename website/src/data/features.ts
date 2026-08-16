import type { Locale } from '~/i18n';

export interface Feature {
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
}

export const features: Feature[] = [
  {
    title: { 'zh-Hans': '草稿纸式推算', 'en': 'Notepad-style' },
    desc: { 'zh-Hans': '多行互相引用，自由推算', 'en': 'Lines reference each other' },
  },
  {
    title: { 'zh-Hans': '38 位高精度', 'en': '38-digit Precision' },
    desc: { 'zh-Hans': 'Decimal 引擎，远超 Double', 'en': 'Decimal engine, beyond Double' },
  },
  {
    title: { 'zh-Hans': '变量与方程', 'en': 'Variables & Equations' },
    desc: { 'zh-Hans': '变量、行引用 L1/Ans、方程求解', 'en': 'Variables, line refs, equations' },
  },
  {
    title: { 'zh-Hans': '四种计算模式', 'en': 'Four Modes' },
    desc: { 'zh-Hans': '基础 / 科学 / 程序员 / 精简', 'en': 'Basic / Scientific / Prog / Minimal' },
  },
  {
    title: { 'zh-Hans': '单位 / 货币换算', 'en': 'Unit / Currency' },
    desc: { 'zh-Hans': '16 类单位 + 汇率 + 中文大写', 'en': '16 units + FX + CNY uppercase' },
  },
  {
    title: { 'zh-Hans': '分组与小计', 'en': 'Sections & Subtotals' },
    desc: { 'zh-Hans': '分组、折叠、小计、总计 Σ', 'en': 'Group, fold, subtotal, total Σ' },
  },
  {
    title: { 'zh-Hans': '滑块与函数表', 'en': 'Sliders & Function Table' },
    desc: { 'zh-Hans': '滑块实时调参 + 函数表', 'en': 'Sliders + function table' },
  },
  {
    title: { 'zh-Hans': '全 Apple 生态', 'en': 'Full Apple Ecosystem' },
    desc: { 'zh-Hans': '灵动岛 / Widget / Siri…', 'en': 'Dynamic Island / Widget / Siri…' },
  },
  {
    title: { 'zh-Hans': '隐私优先', 'en': 'Privacy First' },
    desc: { 'zh-Hans': '零收集，无追踪，无广告', 'en': 'Zero collection, no tracking, no ads' },
  },
];