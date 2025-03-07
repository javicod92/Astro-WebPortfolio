import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const lang =
    context.request.headers.get("cookie")?.match(/lang=(en|es)/)?.[1] || "es";
  (context.locals as { lang: string }).lang = lang;
  return next();
});
