import dockerImage from "@/assets/images/tech/docker.png";
import i18nImage from "@/assets/images/tech/i18n.png";
import nextImage from "@/assets/images/tech/next.png";
import prismaImage from "@/assets/images/tech/prisma.png";
import reactImage from "@/assets/images/tech/react.png";
import tailwindImage from "@/assets/images/tech/tailwindcss.jpg";
import trpcImage from "@/assets/images/tech/trpc.svg";
import twitchImage from "@/assets/images/tech/twitch.png";
import typescriptImage from "@/assets/images/tech/typescript.png";
import nextuiImage from "@/assets/images/tech/nextui.png";
import planetscaleImage from "@/assets/images/tech/planetscale.png";
import openidImage from "@/assets/images/tech/openid.webp";
import threejsImage from "@/assets/images/tech/threejs.png";
import javascriptImage from "@/assets/images/tech/javascript.png";
import linearAlgebraImage from "@/assets/images/tech/linearalgebra.png";
import handlebarsImage from "@/assets/images/tech/hbs.png";
export type Technology = {
  url: string;
  title: string;
  imageSrc: string;
};

export type ValidTechnologies =
  | "docker"
  | "i18n"
  | "next"
  | "prisma"
  | "react"
  | "tailwind"
  | "trpc"
  | "twitch"
  | "typescript"
  | "nextui"
  | "planetscale"
  | "openid"
  | "threejs"
  | "javascript"
  | "linearalgebra"
  | "handlebars";

export const technologies: Record<ValidTechnologies, Technology> = {
  docker: {
    title: "docker",
    url: "https://www.docker.com/",
    imageSrc: dockerImage,
  },
  i18n: {
    title: "i18n",
    url: "https://next-intl-docs.vercel.app/",
    imageSrc: i18nImage,
  },
  next: {
    title: "nextjs",
    url: "https://nextjs.org/",
    imageSrc: nextImage,
  },
  prisma: {
    title: "prisma",
    url: "https://www.prisma.io/",
    imageSrc: prismaImage,
  },
  react: {
    title: "react",
    url: "https://react.dev/",
    imageSrc: reactImage,
  },
  tailwind: {
    title: "tailwind",
    url: "https://tailwindcss.com/",
    imageSrc: tailwindImage,
  },
  trpc: {
    title: "trpc",
    url: "https://trpc.io/",
    imageSrc: trpcImage,
  },
  twitch: {
    title: "twitch",
    url: "https://twitch.tv",
    imageSrc: twitchImage,
  },
  typescript: {
    title: "typescript",
    url: "https://www.typescriptlang.org/",
    imageSrc: typescriptImage,
  },
  nextui: {
    title: "nextui",
    url: "https://nextui.org/",
    imageSrc: nextuiImage,
  },
  planetscale: {
    title: "planetscale",
    url: "https://planetscale.com/",
    imageSrc: planetscaleImage,
  },
  openid: {
    title: "oidc",
    url: "https://openid.net/developers/how-connect-works/",
    imageSrc: openidImage,
  },
  threejs: {
    title: "threejs",
    url: "https://threejs.org/",
    imageSrc: threejsImage,
  },
  javascript: {
    title: "javascript",
    url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    imageSrc: javascriptImage,
  },
  linearalgebra: {
    title: "linearalgebra",
    url: "https://en.wikipedia.org/wiki/Linear_algebra",
    imageSrc: linearAlgebraImage,
  },
  handlebars: {
    title: "hbs",
    url: "https://handlebarsjs.com/",
    imageSrc: handlebarsImage,
  },
};
