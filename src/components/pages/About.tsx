import { Section } from '@common/SectionLine';
import { VFC } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const ServicesList: VFC<{ services: string[] }> = ({ services }) => {
  return (
    <ul className='text-fontsoft'>
      {services.map((service) => (
        <li key={service} className='mb-2 flex items-center'>
          <AiFillCaretRight />
          <p className='ml-6 '>{service}</p>
        </li>
      ))}
    </ul>
  );
};

export const About = () => {
  return (
    <div className='flex flex-col px-5 pt-14 lg:px-24 lg:pt-24 '>
      <Section title='Acerca de mi'>
        <div className=' leading-6 text-fontsoft'>
          <p className='mb-4 '>
            ¡Hola! 🤓 Mi nombre es <strong>Max Antony</strong>. Soy Desarrollador de software especializado en la
            creacion de Sistemas, Tiendas Virtuales y paginas web.
          </p>
          <p className='mb-4'>
            Tambien cuento con habilidades de diseño y marketing para la creacion de campañas en redes sociales para la
            visibilidad de la marca a potenciales clientes.
          </p>
          <p className=' '>
            Durante el tiempo que llevo trabajando he adquirido las habilidades y conocimientos para crear soluciones de
            alto impacto y usando las ultimas tecnologias.
          </p>
        </div>
      </Section>
      <Section title='Servicios Tecnologicos'>
        <ServicesList services={['Creacion de Tiendas Online', 'Creacion de Paginas Web', 'Creacion de Sistemas']} />
      </Section>
      <Section title='Servicios Creativos'>
        <ServicesList
          services={['Gestion de Redes Sociales', 'Diseño de Posts', 'Marketing Digital', 'Community Manager']}
        />
      </Section>
      {/* <Section title='Experiencia'>lorem</Section> */}
    </div>
  );
};
