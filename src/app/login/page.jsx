import Image from "next/image";

import backgroundImage from "@/app/assets/img/BgLogin.png";

export default function Login() {
  return (
    <section className="w-full max-w-lplarge  lplarge:flex  lplarge:justify-center">
      <div className="grid grid-cols-2">
        <section>
          <h1>Login</h1>
          <form action="#" method="#">
            <label htmlFor="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" required />
            <label htmlFor="pass">Senha</label>
            <input type="password" name="pass" id="pass" required />
            <input type="checkbox" name="saveInfoLogin" id="saveInfoLogin" />
            <label htmlFor="saveInfoLogin">Salvar informações de login</label>
            <button type="submit">
              Entrar
            </button>
          </form>
          <div className="flex items-center gap-3">
            <div className="border-2 border-black w-28 h-0"></div>
            <p className="font-semibold">ou</p>
            <div className="border-2 border-black w-28 h-0"></div>
          </div>
          <a href="#">Esqueceu a senha</a>
          <p>Novo no site? <br /> <a href="#">Cadastre-se</a></p>
        </section>
        <section>
          <Image src={backgroundImage} />
        </section>
      </div>
    </section>
  )
}