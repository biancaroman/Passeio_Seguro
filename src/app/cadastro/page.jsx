'use client'
import Image from "next/image";
import { useState } from 'react';
import backgroundImage from "@/app/assets/img/BgCadastro.jpg";

export default function Cadastro() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  
  const isCpfValido = (cpf) => {
    cpf = cpf.replace(/[^0-9]/g, '');

    if (cpf.length !== 11) {
      return false;
    }
    
    return true;
  };

  const isSenhaValida = (senha) => senha.length >= 8;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isCpfValido(cpf)) {
      alert('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }

    if (!isSenhaValida(senha)) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    setIsSubmitting(true);

    const apiUrl = 'http://'; //API Java.

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: cpf,
          nome: nome, 
          email: email, 
          endereco: endereco, 
          telefone: celular, 
          senha: senha,
        }),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso');
        window.location.href = '/login';
      } else {
        const data = await response.json();
        alert(`Erro ao cadastrar: ${data.message}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição. Por favor, tente novamente mais tarde.');
      setIsSubmitting(false);
    }
  
  };

  return (
    <div className="flex h-full">
      <section className="w-1/2 relative hidden md:block">
        <div className="h-full">
          <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
        </div>
      </section>
      <section className="md:w-1/2 relative sm:w-full sm:p-5 md:p-8">
        <form className="max-w-md h-full flex flex-col justify-center" onSubmit={handleSubmit}>
          <h1 className='text-3xl font-medium mb-4'>Realize agora sua vistoria na Passeio Seguro</h1>
          <h3 className='font-light mb-8'>Basta preencher o formulário abaixo. É rapidinho!</h3>
          <div className="mb-5">
            <label htmlFor="nome" className="block text-left">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="cpf" className="block text-left">CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" className="border rounded-md p-2" value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="e-mail" className="block text-left">E-mail</label>
            <input type="email" name='email' id="e-mail" placeholder="Digite seu e-mail" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="endereco" className="block text-left">Endereço</label>
            <input type="text" id="endereco" placeholder="Digite seu endereço" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="celular" className="block text-left">Celular</label>
            <input type="tel" name='celular' id="celular" placeholder="Número de celular" className="border rounded-md p-2 mb-2" required />
            <p>Ex:(11)99999-9999</p>
          </div>
          <div className="mb-5">
            <label htmlFor="senha" className="block text-left">Senha</label>
            <input type="password" name='senha' id="senha" placeholder="Sua senha" className="border rounded-md p-2" value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required />
          </div>
          <div className="mb-8 flex items-center">
            <input type="checkbox" name="Termos" id="Termos" className="mr-2" required />
            <label htmlFor="Termos" className="flex items-center">
              <p>Estou de acordo com a Política de Privacidade e com os Termos de Uso da Passeio Seguro</p>
            </label>
          </div>
          <div className="mb-10">
            <button className="bg-blue-600 text-white px-9 py-3 rounded-md" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}