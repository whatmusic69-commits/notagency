import type { Lang } from "./language";

export const appStoreLabel: Record<Lang, string> = {
  en: "View in App Store",
  ru: "Открыть в App Store",
  lv: "Atvērt App Store",
};

export function isAppStoreUrl(url: string) {
  return url.startsWith("https://apps.apple.com/");
}
