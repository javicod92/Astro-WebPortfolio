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

export const projectsCardsEn: ProjectsType = [
  // Astro Portfolio
  // {
  //   src: "/Projects/Astro-PortfolioSm.webp",
  //   imageSm: "/Projects/Astro-Portfolio.webp",
  //   title: "Portafolio Web - Astro",
  //   date: "2025",
  //   technologies: [
  //     { name: "Astro", icon: AstroIcon },
  //     { name: "TypeScript", icon: TypeScript },
  //     { name: "Tailwind CSS", icon: TailwindCSS },
  //     { name: "CSS", icon: CSS3 },
  //     { name: "Resend", icon: Resend },
  //     { name: "Axios", icon: Axios },
  //   ],
  //   github: "https://github.com/javicod92/Astro-WebPortfolio",
  //   live: "https://astro-web-portfolio.vercel.app/",
  //   description: `<span class="text-gray-200 text-pretty">Developed my portfolio using <span class="HighLight">Astro</span>, optimizing <span class="HighLight">translation</span> without code duplication and adding an alternative approach to Astro’s official solution. Implemented a <span class="HighLight">contact form</span> with <span class="HighLight">Resend</span> and used <span class="HighLight">Axios</span> for HTTP requests. The page is optimized for <span class="HighLight">high performance</span> and <span class="HighLight">smooth navigation</span>, with optimized images and a structure based on <span class="HighLight">reusable components</span>.</span>`,
  // },

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
    description: `<span class="text-gray-200 text-pretty"> This ecommerce, built with <span class="HighLight">Next.js,</span> offers a fast and seamless shopping experience. It features a carousel of <span class="HighLight" > highlighted products,</span > <span class="HighLight">category filters,</span> and a modern interface designed with <span class="HighLight">Tailwind CSS</span> and animations powered by <span class="HighLight">Framer Motion.</span> Products are stored in <span class="HighLight">MongoDB,</span> and <span class="HighLight" > Stripe</span > integration ensures secure payments. Optimized for <span class="HighLight" > high performance,</span > it guarantees smooth navigation on any device. </span>`,
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
    description: `<span class="text-gray-200 text-pretty"> This backend, built with <span class="HighLight">Next.js</span>, provides a scalable and secure API for the ecommerce platform. It uses <span class="HighLight">NextAuth 5</span> for authentication with <span class="HighLight">admin role</span> management, <span class="HighLight">MongoDB</span> for data storage, and <span class="HighLight" > Cloudinary</span > for optimized image handling. Products can be <span class="HighLight" > created</span >, <span class="HighLight">edited</span>, and <span class="HighLight" > categorized</span > efficiently. Combined with a <span class="HighLight"> Tailwind-powered</span > frontend, it ensures a seamless and modern user experience. </span>`,
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
      { name: "Modules CSS", icon: CSS3 },
    ],
    github: "https://github.com/javicod92/podcast-player",
    live: "https://podcast-player-eight.vercel.app/",
    description: `<span class="text-gray-200 text-pretty"> A podcast player inspired by <span class="HighLight">YouTube Music.</span> With a <span class="HighLight">sleek</span> and <span class="HighLight">minimalist interface,</span> it lets you <span class="HighLight">explore,</span> <span class="HighLight">play,</span> and <span class="HighLight">manage podcasts</span> seamlessly. Built with <span class="HighLight">React,</span> <span class="HighLight">Vite,</span> and <span class="HighLight">TypeScript,</span> it leverages <span class="HighLight">useState,</span> <span class="HighLight">useEffect,</span> <span class="HighLight">useRef,</span> and a custom hook (<span class="HighLight">useFetch</span>) for optimized performance. The <span class="HighLight">playback control</span> is handled separately in a <span class="HighLight">dedicated section</span> of the code, ensuring a <span class="HighLight">clean</span> and <span class="HighLight">modular architecture.</span> This application ensures a <span class="HighLight">smooth</span> and <span class="HighLight">uninterrupted</span> audio playback experience. </span>`,
  },

  // Credentials Creation and Validation System
  {
    src: "/Projects/NextAuthSm.webp",
    imageSm: "/Projects/NextAuth.webp",
    title: "Credentials Creation and Validation System",
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
    description: `<span class="text-gray-200 text-pretty"> A modern platform for <span class="HighLight"> secure user authentication</span > and <span class="HighLight">credential management.</span> Built with <span class="HighLight">Next.js</span>, <span class="HighLight" >React,</span > and <span class="HighLight">TypeScript,</span> it ensures robust security with <span class="HighLight">JWT authentication,</span> <span class="HighLight">bcrypt password encryption,</span> and <span class="HighLight" > cookie-based session management.</span > Featuring <span class="HighLight">Zod</span> for <span class="HighLight" > data validation,</span > <span class="HighLight">MongoDB</span> with <span class="HighLight" >Mongoose,</span > and <span class="HighLight">Resend</span> for <span class="HighLight" > email notifications,</span > this system provides a <span class="HighLight">scalable</span> and <span class="HighLight">modular architecture</span> for seamless <span class="HighLight">user authentication.</span > </span>`,
  },

  // Estudio Edificar
  {
    src: "/Projects/Edificar-StudioProjectSm.webp",
    imageSm: "/Projects/Edificar-StudioProject.webp",
    title: "Estudio Edificar (Architecture Studio)",
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
    description: `<span class="text-gray-200 text-pretty"> An elegant and functional website for an <span class="HighLight"> architecture studio</span >, built with <span class="HighLight">Python</span> and <span class="HighLight" > Django.</span > It showcases the firm’s identity, services, and portfolio through a sleek <span class="HighLight">image carousel.</span> Featuring an <span class="HighLight" > admin panel</span > with <span class="HighLight">credential validation,</span> it allows only authorized users to manage <span class="HighLight" >project albums</span > stored in <span class="HighLight">SQLite.</span> Developed using <span class="HighLight">Pillow</span > for image processing and deployed on <span class="HighLight" >PythonAnywhere,</span > this project was one of my first <span class="HighLight" >real-client experiences.</span > </span>`,
  },

  //Asociación Civil Juntos en Acción
  {
    src: "/Projects/Blog-ProjectSm.webp",
    imageSm: "/Projects/Blog-Project.webp",
    title: "Institutional Blog",
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
      buttonTitle: "See the Video on YouTube",
      href: "https://youtu.be/1pzEEwrPn9Y",
    },
    description: `<span class="text-gray-200 text-pretty"> An institutional blog for <span class="HighLight"> Asociación Civil Juntos en Acción,</span > built with <span class="HighLight">Python</span> and <span class="HighLight" > Django.</span > It allows <span class="HighLight">user registration,</span> secure authentication with <span class="HighLight">SQLite,</span> and a dynamic <span class="HighLight">news section</span> where the institution shares updates with images, and users can comment. Includes pages for <span class="HighLight">institutional info,</span > <span class="HighLight">location,</span> and <span class="HighLight" > community outreach.</span > While it's a <span class="HighLight" >backend-focused project,</span > I prioritized <span class="HighLight">frontend development</span> to ensure an intuitive and engaging user experience. </span>`,
  },
];
