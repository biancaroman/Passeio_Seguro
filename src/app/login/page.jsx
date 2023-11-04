import Link from 'next/link';
import Image from "next/image";

import backgroundImage from "@/app/assets/img/BgLogin.jpg";

export default function Login() {
  return (
    <div className="flex h-screen">
      <section className="w-1/2 p-8 relative">
        <form className="max-w-md mx-auto h-full flex flex-col justify-center text-center">
          <h1 className=" text-3xl font-light mb-10">Login</h1>
          <div className="mb-8 ">
            <label htmlFor="cpf" className="block text-left ml-14">CPF</label>
            <input type="text" name="cpf" id="cpf" className=" border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-left ml-14">Senha</label>
            <input type="password" name="senha" id="senha" className="border rounded p-2" />
          </div>
          <div className="mb-8">
            <input type="checkbox" name="salvarInfos" id="salvarInfos" value="True" className="mr-2" />
            <label htmlFor="salvarInfos">Salvar informações de login</label>
          </div>
          <div className="mb-10">
            <button className="bg-blue-600 text-white px-9 py-3 rounded-">
              <Link href="/portal">Entrar</Link>
            </button>
          </div>
          <a href="#" className="text-center block mb-4">Esqueceu a senha</a>
          <div className='h-20 border shadow-lg flex items-center justify-center font-semibold'>
            <p className="text-center">Novo no site? <Link href="/cadastro" className="text-blue-400">Cadastre-se</Link></p>
          </div>
        </form>
      </section>
      <section className="w-1/2 relative">
        <div className="h-full">
          <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
        </div>
      </section>
    </div>
  );
}

