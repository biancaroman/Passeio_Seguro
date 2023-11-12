import { FaWhatsapp, FaMapPin, FaComment } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube, IoLogoTwitter } from 'react-icons/io';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white relative bottom-0 h-128 md:h-auto sm:h-128 lg:h-192 xl:h-240">
            <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-between p-5 md:p-10">
                <div className="md:w-1/4">
                    <h2 className="text-2xl font-bold mb-3 text-center md:text-left">Links Rápidos</h2>
                    <a href="#" className="flex items-center text-lg mb-4">
                        <span className="mr-2"><FaWhatsapp /></span>WhatsApp
                    </a>
                    <a href="#" className="flex items-center text-lg mb-4">
                        <span className="mr-2"><FaMapPin /></span>Nosso Endereço
                    </a>
                    <a href="#" className="flex items-center text-lg mb-4">
                        <span className="mr-2"><FaComment /></span>Chat Online
                    </a>
                </div>
                <div className="md:w-1/4">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold mb-3">Sobre a Passeio Seguro</h2>
                        <Link href='/' className="text-lg block mb-2">Home</Link>
                        <Link href='/sobreNos' className="text-lg block">Sobre nós</Link>
                        <Link href='/suporte' className="text-lg block mb-2">Suporte ao cliente</Link>
                        <Link href='/dadosEquipe' className="text-lg block">Dados da equipe</Link>
                    </div>
                </div>
                <div className="md:w-1/4 sm:w-1/2">
                    <p className="text-lg text-center md:text-right md:flex-wrap m-6">Acompanhe a Passeio Seguro nas redes sociais</p>
                    <div className="flex items-center justify-center md:justify-end mt-4">
                        <IoLogoFacebook className="text-3xl cursor-pointer transition-color duration-300 hover:text-blue-500" />
                        <IoLogoInstagram className="text-3xl cursor-pointer transition-color duration-300 hover:text-blue-500" />
                        <IoLogoLinkedin className="text-3xl cursor-pointer transition-color duration-300 hover:text-blue-500" />
                        <IoLogoYoutube className="text-3xl cursor-pointer transition-color duration-300 hover:text-blue-500" />
                        <IoLogoTwitter className="text-3xl cursor-pointer transition-color duration-300 hover:text-blue-500" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

