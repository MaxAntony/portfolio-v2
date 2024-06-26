import { IProject } from "@ts/interfaces";

export const menuSections = [];

export const image = "https://miro.medium.com/max/1400/0*tXU7dbgRi5Cl-5hb.jpg";

export const logoImg =
  "https://marketifythemes.net/html/cavoni/img/logo/dark.png";

export enum pages {
  home = "home",
  about = "about",
  portfolio = "portfolio",
  // blog = 'blog',
  contact = "contact",
}

export const pagesSpanish = [
  { name: "Inicio", path: pages.home },
  { name: "Acerca de", path: pages.about },
  { name: "Proyectos", path: pages.portfolio },
  // { name: 'Blog', path: pages.blog },
  { name: "Contacto", path: pages.contact },
];

export enum links {
  whatsapp = "https://api.whatsapp.com/send?phone=51997286267&text=Hola%20Max,%20quisiera%20hablar%20sobre%20un%20proyecto%20",
  email = "mailto:maxpacami@gmail.com",
  linkedin = "https://www.linkedin.com/in/max-antony/",
  github = "https://github.com/MaxAntony",
  phone = "tel:+51997286267",
}

export const projects: IProject[] = [
  {
    title: "Fixa Landing Page",
    shortDescription:
      "Pagina de aterrisaje para Fixa Digital EIRL, desarrollado usando Next.js para SEO, Nest.js para el backend y Graphql para la API ",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1712550757/portfolio/2024-04-07_23-32_t19vjt.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
  {
    title: "Chiwan App",
    shortDescription:
      "Aplicativo android de finanzas, desarrollado usando Flutter, React.js para el panel administrativo y Nestjs para el backend",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1712550726/portfolio/2024-04-07_23-31_fmjuvp.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
  {
    title: "NextCloud en VPS",
    shortDescription:
      "Instalado una Instancia de NextCloud en un VPS para la gestion interna de Fixa Digital, usando docker y nginx",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1712550663/portfolio/2024-04-07_23-30_1_d2p58p.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
  {
    title: "CompuGaming Store",
    shortDescription:
      "sistema de ventas que consta de una tienda virtual, pagina de presentacion, panel administrativo y aplicativo movil para la administracion de productos",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1647926283/portfolio/compugaming-old.proyect_lcugbj.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
  {
    title: "Stora",
    shortDescription:
      "Sistema de ventas compuesto por tienda virtual, panel administrativo y punto de venta con conexion a sunat para la emision de comprobantes electronicos",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1648833688/portfolio/Screenshot_from_2022-04-01_12-19-52_bstsvv.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
  {
    title: "Simple Store",
    shortDescription:
      "Tienda virtual en la que se pueden subir productos mediante un archivo excel y aplicativo movil de instalacion directa",
    image:
      "https://res.cloudinary.com/maxantony/image/upload/v1648833825/portfolio/Screenshot_from_2022-04-01_12-23-30_y9afmd.png",
    modal: {
      description: "",
      images: [],
      linkLive: "",
      technicalDescription: "",
    },
  },
];

export const proyectsModal = [{}];
