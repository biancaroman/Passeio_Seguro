import { Header } from "@/app/components/Header";
import Footer from "../components/Footer";

import Image from "next/image";
import imagemSobreNos from '../assets/img/imagem-sobrenos.jpg'

export default function SobreNos() {

  const isAuthenticated = true;

  return (
    <main>
      <Header isAuthenticated={isAuthenticated}/>
      <section>
        <div className="bg-cover bg-center h-[550px] relative  md:top-0 flex justify-center items-center">
          <Image
            src= {imagemSobreNos}
            layout="fill"
            objectFit="cover"
          />
          <div className="w-90 md:w-full p-10 text-black absolute top-6 left-0">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">
              Revele cada detalhe, pedale com confiança: <br /> Seu passeio começa aqui.
            </h1>
          </div>
        </div>
        <div className="p-20 text-left">
          <h1 className="p-4 text-2xl font-semibold">Sobre a Passeio Seguro</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
            Sabemos o quanto sua bicicleta é valiosa para você, tanto
            financeiramente quanto emocionalmente. É por isso que estamos aqui
            para oferecer um serviço de vistoria especializado, garantindo que
            sua bicicleta esteja protegida da melhor maneira possível.
          </p>
          <p className="p-3">
            Nossa abordagem profissional e transparente garante que todas as
            informações necessárias sejam fornecidas de maneira clara e objetiva,
            facilitando o processo de obtenção do seguro. Além disso, nossa equipe
            estará disponível para esclarecer dúvidas, fornecer orientações
            adicionais e auxiliar você em todas as etapas do processo.
          </p>
          <p className="p-3">
            Proteja o seu investimento e tenha tranquilidade ao pedalar com a
            certeza de que sua bicicleta está devidamente segurada. Navegue em
            nosso site para conhecer mais sobre nossos serviços de vistoria para
            seguro de bicicletas e agende uma vistoria hoje mesmo. Estamos aqui
            para ajudar você a garantir a proteção adequada para a sua paixão
            sobre duas rodas!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};
