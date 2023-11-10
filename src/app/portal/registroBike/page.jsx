'use client'

import { Header } from "../../components/Header";
import { useState } from 'react';
import Footer from '../../components/Footer';
import { MdDirectionsBike } from 'react-icons/md';
import Link from 'next/link';

export default function RegistroBike() {

  const isAuthenticated = true;

  const [mostrarAcessorioInput, setMostrarAcessorioInput] = useState(false);
  const [mostrarEletricaInput, setMostrarEletricaInput] = useState(false);

  const handleAcessorioChange = () => {
    setMostrarAcessorioInput(!mostrarAcessorioInput);
    setAumentarAltura(!mostrarAcessorioInput);
  };

  const handleEletricaChange = () => {
    setMostrarEletricaInput(!mostrarEletricaInput);
    setAumentarAltura(!mostrarEletricaInput);
  };

  const [aumentarAltura, setAumentarAltura] = useState(false);

  return (
    <main className="bg-cover bg-center bg-fixed min-h-screen" style={{ backgroundImage: 'url("/img/fundo-registrarbike.jpeg")' }}>
      <Header isAuthenticated={isAuthenticated}/>
      <div className={`flex flex-col items-center p-5 min-h-screen` }>
        <div className={`bg-white border-2 shadow-md rounded-md p-6 lg:w-1/2`} >
          <h1 className="font-semibold text-2xl">
            Cadastro da <span className="text-blue-500">Bicicleta</span>
          </h1>
          <p className="flex items-center text-blue-500">
            <MdDirectionsBike className="text-2xl" />
            Adicionar nova bike
          </p>
          <div className="w-full p-5 text-sm lg:text-base">
            <label htmlFor="ID" className="block text-gray-600 text-sm font-semibold">Número de Identificação</label>
            <input type="text" id="ID" className="w-full border-b-2 border-gray-400 mt-5" placeholder="Número de Identificação"/>

            <label htmlFor="estado" className="block text-gray-600 text-sm font-semibold"></label>
            <select name="estado" id="estado" className="mt-5">
              <option selected disabled value="">Estado de uso</option>
              <option>Novo</option>
              <option>Semi-novo</option>
              <option>Usado</option>
            </select>

            <label htmlFor="Marca" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Marca"  placeholder="Marca" className="w-full border-b-2 border-gray-400 mt-5"/>

            <label htmlFor="Modelo" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Modelo"  placeholder="Modelo" className="w-full border-b-2 border-gray-400 mt-5"/>

            <label htmlFor="NumSerie" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="NumSerie"  placeholder="Número de Série" className="w-full border-b-2 border-gray-400 mt-5"/>

            <label htmlFor="Modalidade" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Modalidade"  placeholder="Modalidade" className="w-full border-b-2 border-gray-400 mt-5"/>

            <label htmlFor="QtdRodas" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="number" id="QtdRodas" placeholder="Quantidade de rodas" className="w-full border-b-2 border-gray-400 mt-5" />

            <label htmlFor="Valor" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Valor"  placeholder="Valor de Mercado" className="w-full border-b-2 border-gray-400 mt-5"/>

            <label htmlFor="NF" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="NF"  placeholder="Nº Nota Fiscal" className="w-full border-b-2 border-gray-400 mt-5"/>

          </div>
          <div className="w-full p-5">
            <label htmlFor="compra" className="block text-gray-600 text-sm font-semibold">Ano Compra:</label>
            <input type="date" name="compra" id="compra" className="w-full border-b-2 border-gray-400 mt-5"/>
          </div>
          <div className="w-full p-5">
            <label htmlFor="eletrica">Bicicleta Elétrica?</label>
            <input
              type="checkbox"
              id="eletrica"
              className="ml-2"
              onChange={handleEletricaChange}
            />
          </div>
          {mostrarEletricaInput && (
            <div className="w-full p-5">
              <label htmlFor="marcaMotor" >Marca Motor</label>
              <input type="text" id="marcaMotor" className="w-full border-b-2 border-gray-400 " placeholder="Digite a Marca do Motor"/>
              <label htmlFor="potenciaMotor" >Potencia Motor:</label>
              <input type="text" id="potenciaMotor" className="w-full border-b-2 border-gray-400" placeholder="Digite a Potencia do Motor" />
              <label htmlFor="valorMotor">Valor Motor:</label>
              <input type="text" id="valorMotor" className="w-full border-b-2 border-gray-400 " placeholder="Digite o Valor do Motor" />
              <label htmlFor="marcaBateria">Marca da Bateria:</label>
              <input type="text" id="marcaBateria" className="w-full border-b-2 border-gray-400 " placeholder="Digite a marca da bateria" />
              <label htmlFor="potenciaBateria">Potencia da Bateria:</label>
              <input type="text" id="potenciaBateria" className="w-full border-b-2 border-gray-400 " placeholder="Digite a potencia da bateria" />
              <label htmlFor="valorBateria">Valor da Bateria:</label>
              <input type="text" id="valorBateria" className="w-full border-b-2 border-gray-400 " placeholder="Digite o valor da bateria" />
            </div>
          )}

          <div className="w-full p-5">
            <label htmlFor="acessorio">Possui acessório?</label>
            <input
              type="checkbox"
              id="acessorio"
              className="ml-2"
              onChange={handleAcessorioChange}
            />
          </div>
          {mostrarAcessorioInput && (
            <div className="w-full p-5">
              <label htmlFor="eletricaInput">Valor do GPS:</label>
              <input type="text" id="eletricaInput" className="w-full border-b-2 border-gray-400" placeholder="Digite o Valor do GPS"/>
              <label htmlFor="eletricaInput" >Ciclo Computador:</label>
              <input type="text" id="eletricaInput" className="w-full border-b-2 border-gray-400" placeholder="Digite o Valor do Ciclo Computador" />
              <label htmlFor="eletricaInput">Velocimetro Digial:</label>
              <input type="text" id="eletricaInput" className="w-full border-b-2 border-gray-400" placeholder="Digite o Valor do Velocimetro Digial" />
            </div>
          )}

          
          <div className="w-full mt-5">
            <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700">
              Registrar
            </button>
          </div>
          <div className="w-full mt-2">
            <Link href="/portal" className="block w-full py-2 bg-gray-300 text-black text-center font-semibold rounded-md hover:bg-gray-500">
                Cancelar
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

