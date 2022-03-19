import { links } from '@root/data';
import { Fragment } from 'react';
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';

type AuthorLink = { url: string; icon: JSX.Element; title: string };
const authorLinks: AuthorLink[] = [
  { url: links.whatsapp, icon: <IoLogoWhatsapp />, title: 'whatsapp' },
  { url: links.email, icon: <IoMdMail />, title: 'correo' },
  { url: links.linkedin, icon: <FaLinkedin />, title: 'linkedin' },
  { url: links.github, icon: <FaGithubAlt />, title: 'github' },
];

export const SocialLinks = () => {
  return (
    <Fragment>
      {authorLinks.map((link, i) => (
        <a
          href={link.url}
          key={i}
          className=' text-xl text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:text-black '
          rel='noreferrer'
          target='_blank'
          title={link.title}>
          {link.icon}
        </a>
      ))}
    </Fragment>
  );
};
