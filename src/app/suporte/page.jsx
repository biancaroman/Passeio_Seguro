'use client'

import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from 'react';

const isAuthenticated = true;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Bem-vindo ao suporte da Passeio Seguro! Como posso ajudar você?',
      sender: 'chatbot',
    },
  ]);

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <main className="bg-cover bg-fixed min-h-screen" style={{ backgroundImage: 'url("/img/imagem-contato.webp")' }}>
      <Header isAuthenticated={isAuthenticated}/>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="border p-4 rounded-lg shadow-lg lg:w-[900px] w-full max-w-screen-md">
          <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-y-scroll">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === 'user'
                    ? 'text-right text-white bg-blue-500 rounded-br-none rounded-bl-none rounded-tl-lg rounded-tr-lg'
                    : 'text-left text-black bg-white rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg'
                } p-3 rounded-lg`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-full p-2 mr-2"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleSendMessage}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chatbot;
