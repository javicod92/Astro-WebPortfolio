export function switchLanguage(lang: string) {
  const newLang = lang === "en" ? "es" : "en";
  document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
  location.reload(); // Recargar para aplicar cambios
}
