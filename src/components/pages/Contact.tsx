import { Section } from '@common/SectionLine';
import { links } from '@root/data';
import { VFC } from 'react';
import { IconType } from 'react-icons';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';

type CardProps = { link: links; Icon: IconType; content: string };

const Card: VFC<CardProps> = ({ link, Icon, content }) => {
  return (
    <a
      href={link}
      className='border rounded-md py-5 px-4 flex justify-center items-center flex-col w-full mb-4 ml-0 md:w-1/2 md:mr-2 last:mr-0 md:last:ml-2 md:mb-0 transition-all duration-300 hover:shadow-lg hover:border-gray-400 hover:text-black'>
      <div className='mb-5 text-2xl'>
        <Icon className='' />
      </div>
      <a href={link}>{content}</a>
    </a>
  );
};

const data: CardProps[] = [
  { link: links.email, Icon: IoMdMail, content: 'maxpacami@gmail.com' },
  { Icon: IoLogoWhatsapp, content: '+51 997 286 267', link: links.whatsapp },
];

export const Contact: VFC = () => {
  return (
    <div className='px-5 pt-14 lg:px-24 lg:pt-24'>
      <Section title='Contacto'>
        <div className='text-center mb-5 font-medium'>
          <p className='mb-3'>¿Tienes preguntas o un proyecto en mente?</p>
          <p className='font-semibold'>Contactame:</p>
        </div>
        <div className=' flex flex-col md:flex-row'>
          {data.map((card, i) => (
            <Card Icon={card.Icon} content={card.content} link={card.link} key={i} />
          ))}
        </div>
        <div></div>
      </Section>
    </div>
  );
};
