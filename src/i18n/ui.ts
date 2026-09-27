export const translations = {
  en: {
    brand: "Athene Noctua Digital",
    home: "Home",
    about: "About",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    footerDescription: "Digital services based in Greece.",
    footerNavigation: "Footer navigation",
    country: "Greece",
  },
  el: {
    brand: "Athene Noctua Digital",
    home: "Αρχική",
    about: "Σχετικά με εμάς",
    darkMode: "Σκοτεινή λειτουργία",
    lightMode: "Φωτεινή λειτουργία",
    footerDescription: "Ψηφιακές υπηρεσίες με έδρα την Ελλάδα.",
    footerNavigation: "Πλοήγηση υποσέλιδου",
    country: "Ελλάδα",
  },
} as const;

export const languages = [
  { locale: "en", name: "English", flag: "🇬🇧" },
  { locale: "el", name: "Ελληνικά", flag: "🇬🇷" },
] as const;

export const navigationItems = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
] as const;

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] ?? translations.en;
}
