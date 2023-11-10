'use client'

import { useState } from 'react';

import { Header } from "../../components/Header";
import Footer from '../../components/Footer';

import { FaFile, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const isAuthenticated = true;

const fieldLabels = [
  'Bicicleta completa',
  'Guidão',
  'Quadro',
  'Rodas',
  'Selim',
  'Pedais',
  'Acessórios',
];

export default function VistoriaBike() {
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileSelect = (fieldName, file) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const handleSubmit = () => {
    console.log('Arquivos selecionados:', selectedFiles);
  };

  return (
    <main className="bg-cover bg-center bg-fixed min-h-screen" style={{ backgroundImage: 'url("/img/fundo-registrarvistoria.jpg")' }}>
      <Header isAuthenticated={isAuthenticated} />
      <section className='ml-10 ml-sm-0 text-white p-10'>
        <div className="mt-10 text-left ml-5">
          <h1 className="font-bold text-3xl">
            Vistoria da <span className="text-blue-500">Bicicleta</span>
          </h1>
          <p>Insira os arquivos a seguir</p>
        </div>
        <div className="w-11/12">
          <div className="text-left ml-4 mt-4 space-y-4 ml-sm-0">
            {fieldLabels.map((label, index) => (
              <div className="flex items-center" key={index}>
                <label className="border-b border-gray-300 w-1/2" htmlFor={label}>{label}</label>
                <input
                  type="file"
                  id={`${label}FileInput`}
                  className="hidden"
                  onChange={(e) => handleFileSelect(label, e.target.files[0])}
                />
                {selectedFiles[label] ? (
                  <FaCheckCircle style={{ color: 'green' }} />
                ) : (
                  <button
                    onClick={() =>
                      document.getElementById(`${label}FileInput`).click()
                    }
                    className="border p-1 rounded bg-white ml-4 text-black"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <FaFile /> Anexar Arquivo
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='m-5'> 
          <div className="mt-5 text-left flex justify-start space-x-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Encaminhar
            </button>
            <button className="border border-solid p-2 rounded hover:bg-blue-700 cursor-pointer">
              <Link href="/portal" className='font-bold'>
                Cancelar
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
