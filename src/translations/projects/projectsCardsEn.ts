import FramerMotion from "../../icons/FramerMotion.astro";
import MongoDB from "../../icons/MongoDB.astro";
import Nextjs from "../../icons/Nextjs.astro";
import React from "../../icons/React.astro";
import Stripe from "../../icons/Stripe.astro";
import TailwindCSS from "../../icons/TailwindCSS.astro";
import TypeScript from "../../icons/TypeScript.astro";

type ProjectsType = [
  {
    src: string;
    imageSm: string;
    title: string;
    date: string;
    technologies: Array<Record<string, any>>;
    github: string;
    live: string;
    description: string;
  },
];

export const projectsCardsEn: ProjectsType = [
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
];
