import Zod from "../../icons/Zod.astro";
import Cloudinary from "../../icons/Cloudinary.astro";
import CSS3 from "../../icons/CSS3.astro";
import FramerMotion from "../../icons/FramerMotion.astro";
import MongoDB from "../../icons/MongoDB.astro";
import Nextjs from "../../icons/Nextjs.astro";
import React from "../../icons/React.astro";
import Stripe from "../../icons/Stripe.astro";
import TailwindCSS from "../../icons/TailwindCSS.astro";
import TypeScript from "../../icons/TypeScript.astro";
import Vite from "../../icons/Vite.astro";
import Resend from "../../icons/Resend.astro";
import JWT from "../../icons/JWT.astro";
import Sass from "../../icons/Sass.astro";
import SQLite from "../../icons/SQLite.astro";
import JavaScript from "../../icons/JavaScript.astro";
import Django from "../../icons/Django.astro";
import HTML from "../../icons/HTML.astro";
import Python from "../../icons/Python.astro";
import AstroIcon from "../../icons/AstroIcon.astro";
import Axios from "../../icons/Axios.astro";

type ProjectsType = Array<{
  src: string;
  imageSm: string;
  title: string;
  date: string;
  technologies: Array<Record<string, any>>;
  github: string;
  live?: string;
  youtube?: Record<string, string>;
  description: string;
}>;

export const projectsCardsEs: ProjectsType = [
  // Astro Portfolio
  {
    src: "/Projects/Astro-PortfolioSm.webp",
    imageSm: "/Projects/Astro-Portfolio.webp",
    title: "Portafolio Web - Astro",
    date: "2025",
    technologies: [
      { name: "Astro", icon: AstroIcon },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "CSS", icon: CSS3 },
      { name: "Resend", icon: Resend },
      { name: "Axios", icon: Axios },
    ],
    github: "https://github.com/javicod92/next-fullstack-ecommerce",
    live: "https://next-fullstack-ecommerce-1rpa.vercel.app",
    description: `<span class="text-gray-200 text-pretty">Desarrollé mi portafolio con <span class="HighLight">Astro</span>, optimizando la <span class="HighLight">traducción</span> sin duplicar código, añadiendo un nuevo enfoque a la solución oficial. Implementé un <span class="HighLight">formulario de contacto</span> con <span class="HighLight">Resend</span> y utilicé <span class="HighLight">Axios</span> para solicitudes HTTP. La página está optimizada para una <span class="HighLight">alta performance</span> y <span class="HighLight">fluidez</span>, con imágenes optimizadas y una estructura basada en <span class="HighLight">componentes reutilizables</span>. </span>`,
  },

  // E-commerce Frontend
  {
    src: "/Projects/ecommerce-frontSm.webp",
    imageSm: "/Projects/ecommerce-front.webp",
    title: "Fullstack E-commerce (Frontend)",
    date: "2024 - 2025",
    technologies: [
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextjs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "MongoDB", icon: MongoDB },
      { name: "Stripe", icon: Stripe },
      { name: "Framer Motion", icon: FramerMotion },
    ],
    github: "https://github.com/javicod92/next-fullstack-ecommerce",
    live: "https://next-fullstack-ecommerce-1rpa.vercel.app",
    description: `<span class="text-gray-200 text-pretty"> Este ecommerce, desarrollado con <span class="HighLight">Next.js</span>, ofrece una experiencia de compra rápida y fluida. Cuenta con un carrusel de <span class="HighLight">productos destacados</span>, <span class="HighLight">filtros por categorías</span> y una interfaz moderna diseñada con <span class="HighLight">Tailwind CSS</span> y animaciones impulsadas por <span class="HighLight">Framer Motion</span>. Los productos se almacenan en <span class="HighLight">MongoDB</span>, y la integración con <span class="HighLight">Stripe</span> garantiza pagos seguros. Optimizado para <span class="HighLight">alto rendimiento</span>, asegura una navegación fluida en cualquier dispositivo. </span>`,
  },

  // E-commerce Backend
  {
    src: "Projects/ecommerce-backSm.webp",
    imageSm: "Projects/ecommerce-back.webp",
    title: "Fullstack E-commerce (Backend)",
    date: "2024 - 2025",
    technologies: [
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextjs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "MongoDB", icon: MongoDB },
      { name: "Cloudinary", icon: Cloudinary },
    ],
    github: "https://github.com/javicod92/next-fullstack-ecommerce",
    live: "https://next-fullstack-ecommerce-gules.vercel.app/",
    description: `<span class="text-gray-200 text-pretty"> Este backend, desarrollado con <span class="HighLight">Next.js</span>, proporciona una API escalable y segura para la plataforma de ecommerce. Utiliza <span class="HighLight">NextAuth 5</span> para la autenticación con gestión de <span class="HighLight">roles de administrador</span>, <span class="HighLight">MongoDB</span> para el almacenamiento de datos y <span class="HighLight">Cloudinary</span> para la gestión optimizada de imágenes. Los productos pueden ser <span class="HighLight">creados</span>, <span class="HighLight">editados</span>, <span class="HighLight">eliminados</span> y <span class="HighLight">categorizados</span> de manera eficiente. Combinado con un frontend impulsado por <span class="HighLight">Tailwind</span>, garantiza una experiencia de usuario moderna y fluida. </span>`,
  },

  // YouTube Music App
  {
    src: "Projects/YoutubeCloneSm.webp",
    imageSm: "Projects/YoutubeClone.webp",
    title: "YouTube Music App (Clone)",
    date: "2024",
    technologies: [
      { name: "React", icon: React },
      { name: "Vite", icon: Vite },
      { name: "TypeScript", icon: TypeScript },
      { name: "CSS Modules", icon: CSS3 },
    ],
    github: "https://github.com/javicod92/podcast-player",
    live: "https://podcast-player-eight.vercel.app/",
    description: `<span class="text-gray-200 text-pretty"> Un reproductor de podcasts inspirado en <span class="HighLight">YouTube Music</span>. Con una interfaz <span class="HighLight">elegante</span> y <span class="HighLight">minimalista</span>, permite <span class="HighLight">explorar</span>, <span class="HighLight">reproducir</span> y <span class="HighLight">gestionar podcasts</span> de manera fluida. Desarrollado con <span class="HighLight">React</span>, <span class="HighLight">Vite</span> y <span class="HighLight">TypeScript</span>, utiliza <span class="HighLight">useState</span>, <span class="HighLight">useEffect</span>, <span class="HighLight">useRef</span> y hooks personalizados como (<span class="HighLight">useFetch</span>) para un rendimiento optimizado. El <span class="HighLight">control de reproducción</span> se maneja en una <span class="HighLight">sección dedicada</span> del código, garantizando una arquitectura <span class="HighLight">limpia</span> y <span class="HighLight">modular</span>. Esta aplicación asegura una experiencia de reproducción de audio <span class="HighLight">fluida</span> y <span class="HighLight">sin interrupciones</span>. </span>`,
  },

  // Credentials Creation and Validation System
  {
    src: "/Projects/NextAuthSm.webp",
    imageSm: "/Projects/NextAuth.webp",
    title: "Sistema de Creación y Validación de Credenciales",
    date: "2024",
    technologies: [
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextjs },
      { name: "TypeScript", icon: TypeScript },
      { name: "CSS", icon: CSS3 },
      { name: "Sass", icon: Sass },
      { name: "JWT", icon: JWT },
      { name: "MongoDB", icon: MongoDB },
      { name: "Resend", icon: Resend },
      { name: "Zod", icon: Zod },
    ],
    github: "https://github.com/javicod92/auth-next-15",
    description: `<span class="text-gray-200 text-pretty"> Una plataforma moderna para la <span class="HighLight">autenticación segura de usuarios</span> y la <span class="HighLight">gestión de credenciales</span>. Desarrollada con <span class="HighLight">Next.js</span>, <span class="HighLight">React</span> y <span class="HighLight">TypeScript</span>, garantiza una seguridad robusta con <span class="HighLight">autenticación JWT</span>, <span class="HighLight">encriptación de contraseñas con bcrypt</span> y <span class="HighLight">gestión de sesiones basada en cookies</span>. Incluye <span class="HighLight">Zod</span> para la <span class="HighLight">validación de datos</span>, <span class="HighLight">MongoDB</span> con <span class="HighLight">Mongoose</span> para el almacenamiento de usuarios, y <span class="HighLight">Resend</span> para <span class="HighLight">notificaciones por correo electrónico</span>. Este sistema ofrece una arquitectura <span class="HighLight">escalable</span> y <span class="HighLight">modular</span> para una <span class="HighLight">autenticación de usuarios</span> fluida y segura. </span>`,
  },

  // Estudio Edificar
  {
    src: "/Projects/Edificar-StudioProjectSm.webp",
    imageSm: "/Projects/Edificar-StudioProject.webp",
    title: "Estudio Edificar - Estudio de Arquitectura",
    date: "2023",
    technologies: [
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: JavaScript },
      { name: "SQLite", icon: SQLite },
    ],
    github: "https://github.com/javicod92/EstudioEdificar",
    description: `<span class="text-gray-200 text-pretty"> Un sitio web elegante y funcional para un <span class="HighLight">estudio de arquitectura</span>, desarrollado con <span class="HighLight">Python</span> y <span class="HighLight">Django</span>. Muestra la identidad, servicios y portafolio de la firma a través de un <span class="HighLight">carrusel de imágenes</span> moderno. Cuenta con un <span class="HighLight">panel de administración</span> que incluye <span class="HighLight">validación de credenciales</span>, permitiendo solo a usuarios autorizados gestionar <span class="HighLight">álbumes de proyectos</span> almacenados en <span class="HighLight">SQLite</span>. Desarrollado utilizando <span class="HighLight">Pillow</span> para el procesamiento de imágenes y desplegado en <span class="HighLight">PythonAnywhere</span>, este proyecto fue una de mis primeras <span class="HighLight">experiencias con un cliente real</span>. </span>`,
  },

  //Asociación Civil Juntos en Acción
  {
    src: "/Projects/Blog-ProjectSm.webp",
    imageSm: "/Projects/Blog-Project.webp",
    title: "Blog Institucional",
    date: "2022",
    technologies: [
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: JavaScript },
      { name: "SQLite", icon: SQLite },
    ],
    github: "https://github.com/javicod92/Asociacion_Juntos_en_Accion",
    youtube: {
      buttonTitle: "Ver el Video en YouTube",
      href: "https://youtu.be/1pzEEwrPn9Y",
    },
    description: `<span class="text-gray-200 text-pretty"> Un blog institucional para la <span class="HighLight">Asociación Civil Juntos en Acción</span>, desarrollado con <span class="HighLight">Python</span> y <span class="HighLight">Django</span>. Permite <span class="HighLight">registro de usuarios</span>, autenticación segura con <span class="HighLight">SQLite</span> y una <span class="HighLight">sección de noticias</span> dinámica donde la institución comparte actualizaciones con imágenes, y los usuarios pueden comentar. Incluye páginas para <span class="HighLight">información institucional</span>, <span class="HighLight">ubicación</span> y <span class="HighLight">proyección comunitaria</span>. Aunque es un proyecto <span class="HighLight">centrado en el backend</span>, prioricé el <span class="HighLight">desarrollo del frontend</span> para garantizar una experiencia de usuario intuitiva y atractiva. </span>`,
  },
];
