import { coursesCardEn } from "./portfolio/coursesCardEn";
import { coursesCardEs } from "./portfolio/coursesCardEs";
import { projectsCardsEn } from "./projects/projectsCardsEn";
import { projectsCardsEs } from "./projects/projectsCardsEs";

export const translations = {
  // Page title
  ROOT: {
    en: {
      title:
        "Web Portfolio | Javier Codutti - Developer & Programmer with 2+ Years of Experience",
    },

    es: {
      title:
        "Portafolio Web | Javier Codutti - Desarrollador & Programador con +2 Años de Experiencia",
    },
  },

  // Header and nav bar
  HEADER: {
    Navigation: {
      en: [
        { item: "Home", href: "home" },
        { item: "About", href: "about" },
        { item: "Skills", href: "skills" },
        { item: "Portfolio", href: "portfolio" },
        { item: "Projects", href: "projects" },
        { item: "Contact", href: "contact" },
      ],

      es: [
        { item: "Inicio", href: "home" },
        { item: "Sobre", href: "about" },
        { item: "Habilidades", href: "skills" },
        { item: "Portafolio", href: "portfolio" },
        { item: "Proyectos", href: "projects" },
        { item: "Contacto", href: "contact" },
      ],
    },
  },

  // Home section
  HOME: {
    en: {
      h3: "Hey, this is my web portfolio. 👋",
      h1: `I'm <span class="text-cyan-500">Javier Codutti</span>`,
      badge: "Available to work",
      description: `<span class="text-white font-semibold">Aspiring Frontend Developer</span><span class="text-amber-200 font-semibold"> with 2+ years of experience</span> building Web Applications. Passionate about clean code, UX/UI, and scalable solutions. From Argentina, always learning and improving. 🙂`,
      resume: "Download Resume",
      cv: "Download CV",
      discover: "Discover me",
      download: {
        resume: "/Resume-Cv/Aldo Javier Codutti - Resume (en).pdf",
        name: "Codutti, Aldo Javier - Resume.pdf",
      },
    },

    es: {
      h3: "Hola, este es mi portafolio web. 👋",
      h1: `Soy <span class="text-cyan-500">Javier Codutti</span>`,
      badge: "Disponible para trabajar",
      description: `<span class="text-white font-semibold">Aspirante a Desarrollador Frontend</span><span class="text-amber-200 font-semibold"> con +2 años de experiencia</span> construyendo aplicaciones web. Apasionado por el código limpio, UX/UI y soluciones escalables. Desde Argentina, siempre aprendiendo y mejorando. 🙂`,
      resume: "Descargar Resume",
      cv: "Descargar CV",
      discover: "Descúbreme",
      download: {
        resume: "/Resume-Cv/Aldo Javier Codutti - Resume (es).pdf",
        name: "Codutti, Aldo Javier - Resume.pdf",
      },
    },
  },

  // About me section
  ABOUT: {
    en: {
      h2: "About me",
      h3: `This is a little bit <span class="text-cyan-500">about me</span>`,
      description: [
        `I'm <span class="text-cyan-500 font-semibold">Javier Codutti</span>, a web developer with <span class="text-cyan-500 font-semibold">2+ years of experience</span> crafting modern, scalable, and high-performance applications. I specialize in <span class="text-cyan-500 font-semibold">React, Next.js, and Astro</span >, focusing on UX/UI.`,

        `Passionate about learning, I’ve worked with <span class="text-cyan-500 font-semibold">JWT, NextAuth</span>, and database integration like <span class="text-cyan-500 font-semibold" >MongoDB</span>. My projects include <span class="text-amber-200 font-semibold">Podcast Music</span> (a YouTube Music-inspired app) and an <span class="text-amber-200 font-semibold">E-commerce</span>, prioritizing performance and accessibility.`,

        `Looking for a developer who values <span class="text-amber-200 font-semibold">quality, scalability, and innovation?</span> <span class="text-amber-200 font-semibold">Let's talk! 🙂</span>`,
      ],
    },

    es: {
      h2: "Sobre mi",
      h3: `Esto es un poco <span class="text-cyan-500">sobre mi</span>`,
      description: [
        `Soy <span class="text-cyan-500 font-semibold">Javier Codutti</span>, un desarrollador web con <span class="text-cyan-500 font-semibold">+2 años de experiencia</span> creando aplicaciones web modernas, escalables y de alta performance. Me especializo en <span class="text-cyan-500 font-semibold">React, Next.js y Astro</span>, enfocado en UX/UI.`,

        `Apasionado por aprender, trabajé con <span class="text-cyan-500 font-semibold" >JWT, NextAuth,</span > e integré base de datos como <span class="text-cyan-500 font-semibold" >MongoDB</span >. Mis proyectos incluyen un <span class="text-amber-200 font-semibold" >Podcast Music</span > (una aplicación inspirada en YouTube Music) y un <span class="text-amber-200 font-semibold">E-commerce</span >, priorizando performance y accesibilidad.`,

        `¿Estas buscando un desarrollador que valore <span class="text-amber-200 font-semibold" >calidad, escalabilidad e innovación?</span > <span class="text-amber-200 font-semibold">¡Hablemos! 🙂</span>`,
      ],
    },
  },

  // Skills section
  SKILLS: {
    en: {
      h2: "My Skills",
      h3: `Let's explore my most popular<span class="text-cyan-500"> skills and experience </span>`,
      description: [
        `I'm a developer with experience in <span class="HighLight">React, Next.js,</span> and <span class="HighLight">Astro,</span> using <span class="HighLight">Tailwind CSS</span> and <span class="HighLight">Modules CSS</span > for styling.`,

        `On the backend, I work with <span class="HighLight">MongoDB</span > and integrate tools like <span class="HighLight">Axios, Zod, Resend,</span> and <span class="HighLight">Framer Motion</span>.`,

        `I manage <span class="HighLight">Git / GitHub</span> and deploy projects in <span class="HighLight">Vercel,</span><span class="HighLight"> prioritizing modular and scalable code.</span>`,
      ],
    },

    es: {
      h2: "Mis Habilidades",
      h3: `Conoce mis mejores<span class="text-cyan-500"> habilidades y experiencias </span>`,
      description: [
        `Soy un desarrollador con experiencia en <span class="HighLight">React, Next.js</span > y <span class="HighLight">Astro,</span> usando <span class="HighLight">Tailwind CSS</span> y <span class="HighLight">Modules CSS</span> para estilizar.`,

        `En Backend, trabajo con <span class="HighLight">MongoDB</span > e integro herramientas como <span class="HighLight">Axios, Zod, Resend,</span> y <span class="HighLight">Framer Motion.</span>`,

        `Me manejo con <span class="HighLight">Git / GitHub</span> y despliego proyectos en <span class="HighLight">Vercel,</span> <span class="HighLight" >priorizando el código modular y escalable.</span>`,
      ],
    },
  },

  // Portfolio section
  PORTFOLIO: {
    en: {
      h2: "Courses and Certifications",
      h3: `These are some of my most relevant <span class="text-cyan-500"> courses and certifications </span>`,
      coursesCards: coursesCardEn,
      certificationButton: "View Certification",
      showButton: ["Show More", "Show Less"],
    },

    es: {
      h2: "Cursos y Certificaciones",
      h3: `Estos son algunos de mis <span class="text-cyan-500"> cursos y certificaciones más relevantes</span>`,
      coursesCards: coursesCardEs,
      certificationButton: "Ver Certificación",
      showButton: ["Ver Más", "Ver Menos"],
    },
  },

  // Projects section
  PROJECTS: {
    en: {
      h2: "Projects",
      h3: `These are some of my <span class="text-cyan-500">most relevant projects</span>`,
      projectsCards: projectsCardsEn,
      clickToSee: "Click to see the image",
      viewOnGithub: "View on GitHub",
      viewOnVercel: "View on Vercel",
      gotoGithub: "Go to GitHub",
    },

    es: {
      h2: "Proyectos",
      h3: `Estos son algunos de mis <span class="text-cyan-500">proyectos más relevantes</span>`,
      projectsCards: projectsCardsEs,
      clickToSee: "Click para ver la imagen",
      viewOnGithub: "Ver en GitHub",
      viewOnVercel: "Ver en Vercel",
      gotoGithub: "Ir a GitHub",
    },
  },

  // Contact Section
  CONTACT: {
    en: {
      h2: "Contact Me! 😀",
      h3: `Do you like what you see? <span class="text-cyan-500">Let's work together!</span>`,
      networks: "NETWORKS",
      phone: "PHONE",
      email: "E-MAIL",
      copyEmail: "Copy email",
      copyEmailAlert: "E-mail address copied to clipboard",
      FORM: {
        fullname: {
          title: "Full Name",
          placeholder: "Enter your full name here",
        },
        email: { title: "E-mail", placeholder: "Enter your email here" },
        subject: { title: "Subject", placeholder: "Enter your subject here" },
        message: { title: "Message", placeholder: "Enter your message here" },
        sendButton: "Send",
        emailSent: {
          error: "Error when sending mail",
          success: "Mail sent successfully",
        },
      },
    },

    es: {
      h2: "¡Contáctame! 😀",
      h3: `¿Te gusta lo que ves? <span class="text-cyan-500">¡Trabajemos juntos!</span>`,
      networks: "REDES",
      phone: "TELÉFONO",
      email: "CORREO",
      copyEmail: "Copiar correo",
      copyEmailAlert: "Dirección de correo copiada al portapapeles",
      FORM: {
        fullname: {
          title: "Nombre Completo",
          placeholder: "Ingrese su nombre aquí",
        },
        email: { title: "Correo", placeholder: "Ingrese su correo aquí" },
        subject: { title: "Asunto", placeholder: "Ingrese el asunto aquí" },
        message: { title: "Mensaje", placeholder: "Ingrese su mensaje aquí" },
        sendButton: "Enviar",
        emailSent: {
          error: "Error al enviar el mensaje",
          success: "Éxito al enviar el mensaje",
        },
      },
    },
  },

  // Footer Section
  FOOTER: {
    en: {
      findme: "Find me on:",
      navigation: {
        title: "Navigation",
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        projects: "Projects",
        contact: "contact",
      },
      built: "Built with:",
    },

    es: {
      findme: "Encuéntrame en:",
      navigation: {
        title: "Navegación",
        home: "Inicio",
        about: "Sobre",
        skills: "Habilidades",
        portfolio: "Portafolio",
        projects: "Proyectos",
        contact: "Contacto",
      },
      built: "Construido con:",
    },
  },
};
