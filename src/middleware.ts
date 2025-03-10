import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const cookieLang = context.request.headers
    .get("cookie")
    ?.match(/lang=(en|es)/)?.[1];

  if (cookieLang) {
    (context.locals as { lang: string }).lang = cookieLang;
    return next();
  }

  const browserLang = context.request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];

  const lang = browserLang === "es" ? "es" : "en";
  (context.locals as { lang: string }).lang = lang;

  return next();
});
