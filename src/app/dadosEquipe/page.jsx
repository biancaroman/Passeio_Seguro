import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";

import imagemEquipe from 'public/img/nossaEquipe.webp'

const membrosEquipe = [
  {
    nome: 'Bianca Leticia Román Caldeira',
    imagem: '/img/FotoBianca.jpg',
    linkedin: 'https://www.linkedin.com/in/bianca-román',
    rm: '552267',
    whatsapp: '11957688475',
    email: 'biancaroman1425@gmail.com',
    github: 'biancaroman',
  },
  {
    nome: 'Charlene Estevam Mendes Fialho',
    imagem: '/img/FotoCharlene.png',
    linkedin: 'https://www.linkedin.com/in/charlene-fialho',
    rm: '552252',
    whatsapp: '11942154484',
    email: '#', 
    github: 'charlenefialho',
  },
  {
    nome: 'Lucca Raphael Pereira dos Santos',
    imagem: '/img/FotoLucca.png',
    linkedin: 'https://www.linkedin.com/in/lucca-raphael-pereira-dos-santos-1a7980272',
    rm: '99675',
    whatsapp: '11943349801',
    email: '#',
    github: 'LuccaRaphael',
  },
  {
    nome: 'Caio Rocha Fernandes',
    imagem: '/img/FotoCaio.png',
    linkedin: 'https://www.linkedin.com/in/caio-rocha-47988a266',
    rm: '99617',
    whatsapp: '11949888281',
    email: '#', 
    github: 'caiorfer',
  },
];

const Equipe = ({ nome, imagem, linkedin, rm, whatsapp, email, github }) => (
  <div className="bg-white w-full sm:w-1/3 md:w-1/2 lg:w-1/4 mx-20 my-10 p-6 rounded-lg shadow-lg relative">
    <img src={imagem} alt="Nossa Equipe" className="w-full rounded-t-lg" />
    <h3 className="text-xl font-semibold mt-4">{nome}</h3>
    <a href={linkedin} className="text-blue-500 block mt-2">
      <IoLogoLinkedin size={24} /> LinkedIn
    </a>
    <p className="text-gray-500">RM: {rm}</p>
    <div className="mt-4">
      <a href={`https://api.whatsapp.com/send?phone=${whatsapp}`} className="text-green-500 block">
        <FaWhatsapp size={24} /> {whatsapp}
      </a>
      <a href={`mailto:${email}`} className="text-purple-500 block">
        <MdEmail size={24} /> Entre em contato
      </a>
      <a href={`https://github.com/${github}`} className="text-gray-800 block">
        <IoLogoGithub size={24} /> {github}
      </a>
    </div>
  </div>
);

export default function PaginaEquipe() {

  const isAuthenticated = true;
  
  return (
    <div>
    <Header isAuthenticated={isAuthenticated}/>
    <div className="bg-cover bg-center h-[480px] relative flex justify-center items-center">
            <Image
                src= {imagemEquipe}
                layout="fill"
                objectFit="cover"
            />
    </div>
    <div className=" h-[60px] relative flex ml-20 mt-10">
        <h1 className="text-black font-light text-3xl ">Nossa Equipe</h1>
    </div>
    <hr className="ml-20 mr-20 bg-black w-88 p-1/3"  />
      <div className="mr-36 text-1xl ml-20 mt-5 " >
        <p >
          Conheça a equipe que compartilha sua paixão por bicicletas. <br /> Altamente qualificada e apaixonada pelo que faz, estamos prontos para enfrentar qualquer desafio. Juntos, trabalhamos para atender às necessidades dos nossos clientes e alcançar os melhores resultados. Venha conhecer a equipe que faz acontecer!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {membrosEquipe.map((member, index) => (
          <Equipe key={index} {...member} />
        ))}
      </div>
    <Footer/>
    </div>
  );
}