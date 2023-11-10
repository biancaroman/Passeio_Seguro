'use client'

import { useEffect, useState } from "react";

const dadosFeedback = [
  {
    nome: 'Ótimo atendimento ao cliente',
    feedback: 'A equipe da vistoria de bicicletas sempre foi muito prestativa e amigável quando precisei entrar em contato. Eles resolveram todas as minhas dúvidas de forma eficiente e me deixaram tranquilo com minha apólice.',
    imagem: '/img/feedbackUm.jpg',
  },
  {
    nome: 'Ótimo atendimento ao cliente',
    feedback: 'A equipe da vistoria de bicicletas sempre foi muito prestativa e amigável quando precisei entrar em contato. Eles resolveram todas as minhas dúvidas de forma eficiente e me deixaram tranquilo com minha apólice.',
    imagem: '/img/feedbackDois.jpg',
  },
  {
    nome: 'Ótimo atendimento ao cliente',
    feedback: 'A equipe da vistoria de bicicletas sempre foi muito prestativa e amigável quando precisei entrar em contato. Eles resolveram todas as minhas dúvidas de forma eficiente e me deixaram tranquilo com minha apólice.',
    imagem: '/img/feedbackTres.jpg',
  },
];

const CarrosselClientes = () => {
  const [feedbackAtual, setFeedbackAtual] = useState(0);

  const proximoFeedback = () => {
    setFeedbackAtual((feedbackAtual + 1) % dadosFeedback.length);
  };

  useEffect(() => {
    const intervalId = setInterval(proximoFeedback, 5000);
    return () => clearInterval(intervalId);
  }, [feedbackAtual]);

  return (
    <div className="max-w-4xl mx-auto p-4 rounded-lg " style={{ background: '#333f5d'}}>
      <div className="relative flex">
        <div className="w-full sm:w-1/2">
          <img
            src={dadosFeedback[feedbackAtual].imagem}
            alt={dadosFeedback[feedbackAtual].nome}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="w-full sm:w-1/2 text-white p-10">
          <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold">{dadosFeedback[feedbackAtual].nome}</h2>
          <p className="mt-10 text-base sm:text-lg md:text-xl ">{dadosFeedback[feedbackAtual].feedback}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
          {dadosFeedback.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 mx-1 rounded-full cursor-pointer ${
                index === feedbackAtual ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setFeedbackAtual(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrosselClientes;
