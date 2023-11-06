import Link from 'next/link';
import Image from "next/image";

import backgroundImage from "@/app/assets/img/BgCadastro.jpg";

export default function Cadastro() {
  return (
    <div className="flex h-full">
      <section className="w-1/2 relative">
        <div className="h-full">
          <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
        </div>
      </section>
      <section className="w-1/2 p-8 relative">
        <form className="max-w-md mx-auto h-full flex flex-col justify-center">
          <h1 className='text-3xl font-medium mb-4'>Realize agora sua vistoria na Passeio Seguro</h1>
          <h3 className='font-light mb-8'>Basta preencher o formulário abaixo. É rapidinho!</h3>
          <div className="mb-5 ">
            <label htmlFor="nome" className="block text-left ">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome" className="border rounded-md p-2"/>
          </div>
          <div className="mb-5">
            <label htmlFor="cpf" className="block text-left">CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" className="border rounded-md p-2" />
          </div>
          <div className="mb-5">
            <label htmlFor="e-mail" className="block text-left">E-mail</label>
            <input type="email" name='email' id="e-mail" placeholder="Digite seu e-mail" className="border rounded-md p-2" />
          </div>
          <div className="mb-5">
            <label htmlFor="endereco" className="block text-left">Endereço</label>
            <input type="text" id="endereco" placeholder="Digite seu endereço" className="border rounded-md p-2" />
          </div>
          <div className="mb-5">
            <label htmlFor="celular" className="block text-left">Celular</label>
            <input type="tel" name='celular' id="celular" placeholder="Número de celular" className="border rounded-md p-2 mb-2" />
            <p>Ex:(11)99999-9999</p>
          </div>
          <div className="mb-5">
            <label htmlFor="senha" className="block text-left">Senha</label>
            <input type="password" name='senha' id="senha" placeholder="Sua senha" className="border rounded-md p-2" />
          </div>
          <div className="mb-8 flex items-center">
            <input type="checkbox" name="Termos" id="Termos" className="mr-2" />
            <label htmlFor="Termos" className="flex items-center">
              <p>Estou de acordo com a Politica de Privacidade e com os Termos de Uso da Passeio Seguro</p>
            </label>
          </div>
          <div className="mb-10">
            <button className="bg-blue-600 text-white px-9 py-3 rounded-md">
              <Link href="/login">Cadastrar</Link>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}


