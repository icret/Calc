import type { Locale } from '~/i18n';

export interface MathItem {
  sym: string;
  name: Record<Locale, string>;
  val: string;
}

export const constants: MathItem[] = [
  { sym: 'π', name: { 'zh-Hans': '圆周率', 'en': 'Pi' }, val: '3.14159265358979323846264338327950288' },
  { sym: 'e', name: { 'zh-Hans': '自然常数', 'en': "Euler's number" }, val: '2.71828182845904523536028747135266250' },
  { sym: 'φ', name: { 'zh-Hans': '黄金比例', 'en': 'Golden ratio' }, val: '1.61803398874989484820458683436563812' },
  { sym: 'γ', name: { 'zh-Hans': '欧拉常数', 'en': 'Euler–Mascheroni' }, val: '0.57721566490153286060651209008240243' },
  { sym: 'G', name: { 'zh-Hans': 'Catalan常数', 'en': 'Catalan' }, val: '0.91596559417721901505560215405389528' },
  { sym: 'τ', name: { 'zh-Hans': '圆周倍数', 'en': 'Tau' }, val: '6.28318530717958647692528676655900577' },
  { sym: 'ln2', name: { 'zh-Hans': '二自然对数', 'en': 'ln 2' }, val: '0.69314718055994530941723212145817657' },
  { sym: '√2', name: { 'zh-Hans': '根号二', 'en': 'sqrt 2' }, val: '1.41421356237309504880168872420969808' },
  { sym: '√3', name: { 'zh-Hans': '根号三', 'en': 'sqrt 3' }, val: '1.73205080756887729352744634150587237' },
  { sym: '√5', name: { 'zh-Hans': '根号五', 'en': 'sqrt 5' }, val: '2.23606797749978969640917366873127624' },
  { sym: '³√2', name: { 'zh-Hans': '二立方根', 'en': 'cbrt 2' }, val: '1.25992104989487316476721060727822835' },
  { sym: 'ζ(3)', name: { 'zh-Hans': '阿培里常数', 'en': "Apéry's" }, val: '1.20205690315959428539973816151144999' },
];

export const functions: MathItem[] = [
  { sym: 'sin', name: { 'zh-Hans': '正弦', 'en': 'Sine' }, val: 'sin(π/6)=0.5' },
  { sym: 'cos', name: { 'zh-Hans': '余弦', 'en': 'Cosine' }, val: 'cos(0)=1' },
  { sym: 'tan', name: { 'zh-Hans': '正切', 'en': 'Tangent' }, val: 'tan(π/4)=1' },
  { sym: 'log', name: { 'zh-Hans': '常用对数', 'en': 'Log10' }, val: 'log₁₀(100)=2' },
  { sym: 'ln', name: { 'zh-Hans': '自然对数', 'en': 'Natural log' }, val: 'ln(e)=1' },
  { sym: 'exp', name: { 'zh-Hans': '指数', 'en': 'Exponential' }, val: 'exp(1)=e' },
  { sym: '√x', name: { 'zh-Hans': '平方根', 'en': 'Square root' }, val: '√2≈1.414' },
  { sym: 'xⁿ', name: { 'zh-Hans': '幂运算', 'en': 'Power' }, val: '2¹⁰=1024' },
  { sym: 'n!', name: { 'zh-Hans': '阶乘', 'en': 'Factorial' }, val: '5!=120' },
  { sym: '|x|', name: { 'zh-Hans': '绝对值', 'en': 'Absolute' }, val: '|-3|=3' },
  { sym: '⌊x⌋', name: { 'zh-Hans': '向下取整', 'en': 'Floor' }, val: '⌊3.7⌋=3' },
  { sym: '⌈x⌉', name: { 'zh-Hans': '向上取整', 'en': 'Ceil' }, val: '⌈3.2⌉=4' },
];

export const formulas: MathItem[] = [
  { sym: 'a²+b²', name: { 'zh-Hans': '勾股定理', 'en': 'Pythagorean' }, val: 'a²+b²=c²' },
  { sym: 'eⁱᵖ', name: { 'zh-Hans': '欧拉恒等式', 'en': "Euler's identity" }, val: 'eⁱᵖ+1=0' },
  { sym: 'x²', name: { 'zh-Hans': '二次求根', 'en': 'Quadratic' }, val: '(-b±√Δ)/2a' },
  { sym: 'πr²', name: { 'zh-Hans': '圆面积', 'en': 'Circle area' }, val: 'A=πr²' },
  { sym: '⁴⁄₃πr³', name: { 'zh-Hans': '球体积', 'en': 'Sphere volume' }, val: 'V=⁴⁄₃πr³' },
  { sym: 'Fₙ', name: { 'zh-Hans': '斐波那契', 'en': 'Fibonacci' }, val: 'Fₙ=Fₙ₋₁+Fₙ₋₂' },
  { sym: 'sin²θ', name: { 'zh-Hans': '三角恒等', 'en': 'Trig identity' }, val: 'sin²θ+cos²θ=1' },
  { sym: 'Σk', name: { 'zh-Hans': '等差求和', 'en': 'Arithmetic sum' }, val: 'n(n+1)/2' },
  { sym: 'c²', name: { 'zh-Hans': '余弦定理', 'en': 'Cosine law' }, val: 'a²+b²-2ab·cosC' },
  { sym: '(a+b)ⁿ', name: { 'zh-Hans': '二项式', 'en': 'Binomial' }, val: '∑Cₙₖaⁿ⁻ᵏbᵏ' },
  { sym: 'd/dx', name: { 'zh-Hans': '微分', 'en': 'Derivative' }, val: "f′(x)" },
  { sym: '∫', name: { 'zh-Hans': '积分', 'en': 'Integral' }, val: '∫f(x)dx' },
];

export interface MathTab {
  key: 'constants' | 'functions' | 'formulas';
  label: Record<Locale, string>;
  items: MathItem[];
}

export const mathTabs: MathTab[] = [
  { key: 'constants', label: { 'zh-Hans': '常数', 'en': 'Constants' }, items: constants },
  { key: 'functions', label: { 'zh-Hans': '函数', 'en': 'Functions' }, items: functions },
  { key: 'formulas', label: { 'zh-Hans': '公式', 'en': 'Formulas' }, items: formulas },
];