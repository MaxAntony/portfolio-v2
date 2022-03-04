import { Fragment } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const authorLinks: { url: string; icon: JSX.Element; title: string }[] = [
  { url: '', icon: <FaWhatsapp />, title: 'whatsapp' },
  { url: '', icon: <FiMail />, title: 'correo' },
  { url: '', icon: <FaLinkedin />, title: 'linkedin' },
  { url: '', icon: <FaGithubAlt />, title: 'github' },
];

export const SocialLinks = () => {
  return (
    <Fragment>
      {authorLinks.map((link, i) => (
        <a href={link.url} key={i} className=' text-lg last:pr-0' rel='noreferrer' target='_blank' title={link.title}>
          {link.icon}
        </a>
      ))}
    </Fragment>
  );
};
