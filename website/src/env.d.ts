/// <reference types="astro/client" />

interface Window {
  __auracalcTheme?: {
    get: () => string;
    set: (mode: string) => void;
  };
}