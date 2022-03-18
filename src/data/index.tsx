import { imgCompugaming } from '@images/proyects';
import { IProyect } from '@ts/interfaces';

export const menuSections = [];

export const image = 'https://miro.medium.com/max/1400/0*tXU7dbgRi5Cl-5hb.jpg';

export const logoImg = 'https://marketifythemes.net/html/cavoni/img/logo/dark.png';

export enum pages {
  home = 'home',
  about = 'about',
  portfolio = 'portfolio',
  // blog = 'blog',
  contact = 'contact',
}

export const pagesSpanish = [
  { name: 'Inicio', path: pages.home },
  { name: 'Acerca de', path: pages.about },
  { name: 'Proyectos', path: pages.portfolio },
  // { name: 'Blog', path: pages.blog },
  { name: 'Contacto', path: pages.contact },
];

export enum links {
  whatsapp = 'https://api.whatsapp.com/send?phone=51997286267&text=Hola%20Max,%20quisiera%20hablar%20sobre%20un%20proyecto%20',
  email = 'mailto:maxpacami@gmail.com',
  linkedin = 'https://www.linkedin.com/in/max-antony/',
  github = 'https://github.com/MaxAntony',
  phone = 'tel:+51997286267',
}

export const proyects: IProyect[] = [
  {
    title: 'CompuGaming Store',
    description:
      'sistema de ventas que consta de una tienda virtual, pagina de presentacion, panel administrativo y aplicativo movil para la administracion de productos',
    image: imgCompugaming,
  },
  {
    title: 'Stora',
    description:
      'Sistema de ventas compuesto por tienda virtual, panel administrativo y punto de venta con conexion a sunat para la emision de comprobantes electronicos',
    image: imgCompugaming,
  },
  {
    title: 'Simple Store',
    description:
      'Tienda virtual en la que se pueden subir productos mediante un archivo excel y aplicativo movil de instalacion directa',
    image: imgCompugaming,
  },
];
