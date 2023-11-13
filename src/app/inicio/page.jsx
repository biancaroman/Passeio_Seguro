import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import iconeUm from '../assets/img/icone1.png';
import iconeDois from '../assets/img/icone2.png';
import iconeTres from '../assets/img/icone3.png';
import imagemHome from '../assets/img/imagemhome.jpg'
import CarrosselClientes from '../components/Carrousel';

const Inicio = () => {
  return (
    <main>
      <section>
        <div className="bg-cover bg-center h-[550px] relative  md:top-0 flex justify-center items-center">
          <Image
            src={imagemHome}
            layout="fill"
            objectFit="cover"
          />
          <div className="w-90 md:w-full p-10 text-black absolute top-12 left-0">
            <h1 className="text-2xl md:text-4xl font-bold mt-9 mb-5">
              Segurança em duas rodas começa <br /> com uma vistoria confiável
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8">
              Garanta uma pedalada segura e tranquila com nosso <br /> serviço profissional de vistoria de bicicletas.
            </p>
            <button className="bg-blue-500 text-white rounded-lg px-28 py-4 md:px-13 md:py-3 font-bold mx-5 sm:px-20 sm:py-3 lg:px-24 lg:py-4 xl:px-28 xl:py-4">
              <Link href="/login">Realize já a sua</Link>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="p-20">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Com a Passeio Seguro, você <br />terá diversos Benefícios</h1>
            <p className="text-base sm:text-lg md:text-xl">
              Descubra o que nos torna a escolha ideal: benefícios excepcionais que acompanham <br /> cada pedalada, desde a proteção contra roubos até a assistência em caso de emergências. <br /> Sua bicicleta merece o melhor, assim como você.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg">
              <h1 className="text-2xl">Vistoria Rápida</h1>
              <Image src={iconeUm} alt="iconeUm" className="w-20 mx-auto mt-4" />
              <p className="text-base sm:text-lg mt-4">
                A vistoria rápida de bicicletas oferece comodidade para você, permitindo verificar rapidamente a condição da sua bicicleta. Isso ajuda a garantir a segurança e eficiência da pedalada. Além disso, economize tempo e evite surpresas desagradáveis no meio do trajeto. Mantenha sua bicicleta em perfeitas condições com vistorias rápidas e aproveite cada pedalada com tranquilidade.
              </p>
            </div>
            <div className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg">
              <h1 className="text-2xl">Inteligência Artificial</h1>
              <Image src={iconeDois} alt="iconeDois" className="w-20 mx-auto mt-4" />
              <p className="text-base sm:text-lg mt-4">
                A utilização da inteligência artificial na vistoria de bicicletas nos permite uma análise precisa e eficiente de cada componente, identificando até mesmo problemas sutis. Além disso, acelera o processo, economizando tempo para ciclistas e profissionais de manutenção. A I.A eleva a confiabilidade das vistorias, garantindo pedaladas mais seguras e confiantes.
              </p>
            </div>
            <div className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg">
              <h1 className="text-2xl">Serviço eficaz</h1>
              <Image src={iconeTres} alt="iconeTres" className="w-20 mx-auto mt-4" />
              <p className="text-base sm:text-lg mt-4">
                Com nossa eficácia no processo de vistoria de bicicletas asseguramos que cada componente seja minuciosamente inspecionado, reduzindo o risco de problemas futuros. Isso resulta em pedaladas mais seguras e confiáveis, além de economizar tempo e recursos para ciclistas e técnicos. A eficácia no serviço é a chave para manter suas pedaladas sem preocupações.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center p-8">
          <h1 className="text-2xl md:text-4xl mb-4">Veja o que nossos clientes dizem!</h1>
        </div>
        <div className='p-4'>
          <CarrosselClientes/>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
