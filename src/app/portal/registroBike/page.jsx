'use client'

import { Header } from "../../components/Header";
import { useState } from 'react';
import Footer from '../../components/Footer';
import { MdDirectionsBike } from 'react-icons/md';
import Link from 'next/link';

export default function RegistroBike() {

  const isAuthenticated = true;

  const [dadosBicicleta, setDadosBicicleta] = useState({
    id: "",
    estado: "",
    marca: "",
    modelo: "",
    numSerie: "",
    modalidade: "",
    qtdRodas: 0,
    valor: "",
    nf: "",
    anoCompra: "",
    marcaMotor: "",
    potenciaMotor: "",
    valorMotor: "",
    marcaBateria: "",
    potenciaBateria: "",
    valorBateria: "",
    valorGPS: "",
    valorCicloComputador: "",
    valorVelocimetroDigital: "",
  });

  const handleInputChange = (campo, valor) => {
    setDadosBicicleta({ ...dadosBicicleta, [campo]: valor });
  };

  // Mostrar e ocultar os campos de Bicicleta Elétrica e acessórios 
  const [mostrarEletricaInput, setMostrarEletricaInput] = useState(false);
  const [mostrarAcessorioInput, setMostrarAcessorioInput] = useState(false);

  const handleCheckboxChange = (campo) => {
    setMostrarEletricaInput((anterior) => (campo === 'eletrica' ? !anterior : anterior));
    setMostrarAcessorioInput((anterior) => (campo === 'acessorio' ? !anterior : anterior));
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    // Verificar os campos que são obrigatórios 
    const camposObrigatorios = ['id', 'estado', 'marca', 'modelo', 'numSerie', 'modalidade', 'qtdRodas', 'valor', 'nf', 'anoCompra'];
    if (camposObrigatorios.some((campo) => !dadosBicicleta[campo])) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const resposta = await fetch('http://', { //Api Java 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosBicicleta),
      });

      if (resposta.ok) {
        alert('Dados enviados com sucesso!');
        window.location.href = '/portal';
      } else {
        alert('Erro ao enviar dados para o servidor.');
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
      alert('Erro na requisição. Por favor, tente novamente mais tarde.');
    }
  };
  
  return (
    <main className="bg-cover bg-center bg-fixed min-h-screen" style={{ backgroundImage: 'url("/img/imagemPortal.jpg")' }}>
      <Header isAuthenticated={isAuthenticated}/>
      <div className={`flex flex-col items-center p-5 min-h-screen` }>
        <div className={`bg-white border-2 shadow-md rounded-md p-6 lg:w-1/2`} >
          <h1 className="font-semibold text-2xl"> Cadastro da <span className="text-blue-500">Bicicleta</span></h1>
          <p className="flex items-center text-blue-500">
            <MdDirectionsBike className="text-2xl" />
            Adicionar nova bike
          </p>
          <form onSubmit={handleSubmit}>
          <div className="w-full p-5 text-sm lg:text-base">

            <label htmlFor="ID" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text" id="ID" value={dadosBicicleta.id} onChange={(e) => handleInputChange('id', e.target.value)} 
            className="w-full border-b-2 border-gray-400 mt-5" placeholder="Número de Identificação" required/>

            <label htmlFor="estado" className="block text-gray-600 text-sm font-semibold"></label>
            <select name="estado" id="estado" value={dadosBicicleta.estado} 
              onChange={(e) => handleInputChange('estado', e.target.value)} className="mt-5" required>
              <option selected disabled value="">Estado de uso</option>
              <option>Novo</option>
              <option>Semi-novo</option>
              <option>Usado</option>
            </select>

            <label htmlFor="Marca" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Marca"  placeholder="Marca" value={dadosBicicleta.marca} 
            onChange={(e) => handleInputChange('marca', e.target.value)} className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="Modelo" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Modelo"  placeholder="Modelo" value={dadosBicicleta.modelo} 
            onChange={(e) => handleInputChange('modelo', e.target.value)} className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="NumSerie" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="NumSerie"  placeholder="Número de Série" value={dadosBicicleta.numSerie} 
            onChange={(e) => handleInputChange('numSerie', e.target.value)}  className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="Modalidade" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Modalidade"  placeholder="Modalidade" value={dadosBicicleta.modalidade} 
            onChange={(e) => handleInputChange('modalidade', e.target.value)} className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="QtdRodas" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="number" id="QtdRodas" placeholder="Quantidade de rodas" value={dadosBicicleta.qtdRodas} 
            onChange={(e) => handleInputChange('qtdRodas', e.target.value)} className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="Valor" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="Valor"  placeholder="Valor de Mercado" value={dadosBicicleta.valor} 
            onChange={(e) => handleInputChange('valor', e.target.value)}  className="w-full border-b-2 border-gray-400 mt-5" required/>

            <label htmlFor="NF" className="block text-gray-600 text-sm font-semibold"></label>
            <input type="text"  id="NF"  placeholder="Nº Nota Fiscal" value={dadosBicicleta.nf} 
            onChange={(e) => handleInputChange('nf', e.target.value)}  className="w-full border-b-2 border-gray-400 mt-5" required/>
          </div>

          <div className="w-full p-5">
            <label htmlFor="compra" className="block text-gray-600 text-sm font-semibold">Ano Compra:</label>
            <input type="date" name="compra" id="compra" value={dadosBicicleta.anoCompra} 
            onChange={(e) => handleInputChange('anoCompra', e.target.value)} className="w-full border-b-2 border-gray-400 mt-5" required/>
          </div>

          <div className="w-full p-5">
            <label htmlFor="eletrica">Bicicleta Elétrica?</label>
            <input type="checkbox" id="eletrica" className="ml-2" onChange={() => handleCheckboxChange('eletrica')}/>
          </div>

          {mostrarEletricaInput && (
            <div className="w-full p-5">

              <label htmlFor="marcaMotor" >Marca Motor</label>
              <input type="text" id="marcaMotor" className="w-full border-b-2 border-gray-400 " value={dadosBicicleta.marcaMotor} onChange={(e) => handleInputChange('marcaMotor', e.target.value)} placeholder="Digite a Marca do Motor"/>

              <label htmlFor="potenciaMotor" >Potencia Motor:</label>
              <input type="text" id="potenciaMotor" className="w-full border-b-2 border-gray-400" value={dadosBicicleta.potenciaMotor} onChange={(e) => handleInputChange('potenciaMotor', e.target.value)} placeholder="Digite a Potencia do Motor" />

              <label htmlFor="valorMotor">Valor Motor:</label>
              <input type="text" id="valorMotor" className="w-full border-b-2 border-gray-400 " value={dadosBicicleta.valorMotor} onChange={(e) => handleInputChange('valorMotor', e.target.value)}  placeholder="Digite o Valor do Motor" />

              <label htmlFor="marcaBateria">Marca da Bateria:</label>
              <input type="text" id="marcaBateria" className="w-full border-b-2 border-gray-400 " value={dadosBicicleta.marcaBateria} onChange={(e) => handleInputChange('marcaBateria', e.target.value)}  placeholder="Digite a marca da bateria" />

              <label htmlFor="potenciaBateria">Potencia da Bateria:</label>
              <input type="text" id="potenciaBateria" className="w-full border-b-2 border-gray-400 " value={dadosBicicleta.potenciaBateria} onChange={(e) => handleInputChange('potenciaBateria', e.target.value)} placeholder="Digite a potencia da bateria" />

              <label htmlFor="valorBateria">Valor da Bateria:</label>
              <input type="text" id="valorBateria" className="w-full border-b-2 border-gray-400 " value={dadosBicicleta.valorBateria} onChange={(e) => handleInputChange('valorBateria', e.target.value)} placeholder="Digite o valor da bateria" />
            </div>
          )}

          <div className="w-full p-5">
            <label htmlFor="acessorio">Possui acessório?</label>
            <input type="checkbox" id="acessorio" className="ml-2" onChange={() => handleCheckboxChange('acessorio')}/>
          </div>

          {mostrarAcessorioInput && (
            <div className="w-full p-5">
              <label htmlFor="eletricaInput">Valor do GPS:</label>
              <input type="text" id="valorGps" className="w-full border-b-2 border-gray-400" value={dadosBicicleta.valorGPS} 
              onChange={(e) => handleInputChange('valorGPS', e.target.value)} placeholder="Digite o Valor do GPS"/>

              <label htmlFor="eletricaInput" >Ciclo Computador:</label>
              <input type="text" id="cicloComputador" className="w-full border-b-2 border-gray-400" 
              value={dadosBicicleta.valorCicloComputador} onChange={(e) => handleInputChange('valorCicloComputador', e.target.value)} 
              placeholder="Digite o Valor do Ciclo Computador" />

              <label htmlFor="eletricaInput">Velocimetro Digial:</label>
              <input type="text" id="velocimetroDigital" className="w-full border-b-2 border-gray-400" 
              value={dadosBicicleta.valorVelocimetroDigital} onChange={(e) => handleInputChange('valorVelocimetroDigital', e.target.value)} 
              placeholder="Digite o Valor do Velocimetro Digial" />
            </div>
          )}

          <div className="w-full mt-5">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700">
              Registrar
            </button>
          </div>
          <div className="w-full mt-2">
            <Link href="/portal" className="block w-full py-2 bg-gray-300 text-black text-center font-semibold rounded-md hover:bg-gray-500">
                Cancelar
            </Link>
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

