import AboutDescriptionEn from "./about/AboutDescriptionEn.astro";
import AboutDescriptionEs from "./about/AboutDescriptionEs.astro";
import H3En from "./about/H3En.astro";
import H3Es from "./about/H3Es.astro";
import DescriptionEn from "./home/DescriptionEn.astro";
import DescriptionEs from "./home/DescriptionEs.astro";
import H1En from "./home/H1En.astro";
import H1Es from "./home/H1Es.astro";

export const translations = {
  //Header and nav bar
  Header: {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      projects: "Projects",
      contact: "Contact",
    },

    es: {
      home: "Inicio",
      about: "Sobre",
      skills: "Habilidades",
      portfolio: "Portafolio",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },

  // Home section
  Home: {
    en: {
      h3: "Hey, this is my web portfolio. 👋",
      h1: H1En,
      description: DescriptionEn,
      resume: "Download Resume",
      cv: "Download CV",
      discover: "Discover me",
    },

    es: {
      h3: "Hola, este es mi portafolio web. 👋",
      h1: H1Es,
      description: DescriptionEs,
      resume: "Descargar Resume",
      cv: "Descargar CV",
      discover: "Descúbreme",
    },
  },

  //About me section
  ABOUT: {
    en: {
      h2: "About me",
      h3: H3En,
      description: AboutDescriptionEn,
    },

    es: {
      h2: "Sobre mi",
      h3: H3Es,
      description: AboutDescriptionEs,
    },
  },
};
