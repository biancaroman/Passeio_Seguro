'use client'

import Footer from '../components/Footer';
import { Header } from "../components/Header";

import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';



import Image from "next/image";
import Link from 'next/link';
import imagemPortal from 'public/img/fundo-registrarbike.jpeg';

export default function Portal() {
    const [vistorias, setVistorias] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const jwt = require('jsonwebtoken');

    const isAuthenticated = true;
    const tokenValue = Cookies.get('authToken');
    const decodedToken = jwt.decode(tokenValue);


    const handleCheckboxChange = (event, rowId) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, rowId]);
        } else {
            setSelectedRows(selectedRows.filter(id => id !== rowId));
        }
    };

    function formatData(data) {
        const timestamp = data;

        const date = new Date(timestamp);

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();

        const dataFormatada = `${dia}/${mes}/${ano}`;

        return dataFormatada

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/PasseioSeguroAPI/api/vistoria/${decodedToken.cpf}`)
            .then(response => {
                if (response.data.lenght !== 0) {
                    setVistorias(response.data);
                    console.log(response.data)
                }
            })
            .catch(error => {
                console.error('Erro ao obter as vistorias:', error);
            });
    }, []);

    return (
        <main>
            <Header isAuthenticated={isAuthenticated} />
            <div className="bg-cover bg-center h-[550px] relative flex justify-center items-center">
                <Image
                    src={imagemPortal}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl ">OLÁ, NOME</h1>
                    <h3 className=" text-ms md:text-2xl lg:text-3xl font-semibold">SEJA BEM-VINDO AO SEU PORTAL.</h3>
                </div>

            </div>
            <div className="mb-5">
                <h3 className="font-roboto-slab mt-16 ml-16 text-2xl text-gray-700">Vistorias Realizadas: </h3>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                {selectedRows.length > 0 && (
                    <div className="bg-blue-500 font-bold">
                        <td colSpan="4">
                            <div>
                                <Link href={`/visualizarVistoria/${selectedRows[0]}`}>
                                    Visualizar Vistoria
                                </Link>
                            </div>
                        </td>
                    </div>
                )}
                <div className="w-full overflow-y-scroll h-80 m-10">
                    <table className=" w-full h-96 border-2 shadow-lg text-center " >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Código da bike</th>
                                <th>Status</th>
                                <th>Data Vistoria</th>
                                <th>Código da Vistoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vistorias.length !== 0 ? vistorias.map(vistoria => (
                                <tr key={vistoria.codVistoria}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="visualizarbike"
                                            id={`visualizarbike${vistoria.codVistoria}`}
                                            onChange={(e) => handleCheckboxChange(e, vistoria.codVistoria)}
                                        />
                                    </td>
                                    <td>{vistoria.idBicicleta}</td>
                                    <td>{vistoria.status}</td>
                                    <td>{formatData(vistoria.dataVistoria)}</td>

                                    <td>{vistoria.codVistoria}</td>
                                </tr>
                            )) :
                                <span className="text-red-700">nenhuma vistoria foi encontrada.</span>
                            }
                            {/*} <tr>
                                <td>
                                <input
                                    type="checkbox"
                                    name="visualizarbike"
                                    id="visualizarbike1"
                                    onChange={(e) => handleCheckboxChange(e, '001')}
                                />
                                </td>
                                <td>001</td>
                                <td>Em Andamento</td>
                                <td>08/07/2023</td>
                                <td>552267</td>
                            </tr>
                            <tr>
                        <td>
                        <input
                            type="checkbox"
                            name="visualizarbike"
                            id="visualizarbike2"
                            onChange={(e) => handleCheckboxChange(e, '002')}
                        />
                        </td>
                        <td>002</td>
                        <td>Completo</td>
                        <td>26/03/2023</td>
                        <td>552268</td>
                    </tr>
                    <tr>
                        <td>
                        <input
                            type="checkbox"
                            name="visualizarbike"
                            id="visualizarbike3"
                            onChange={(e) => handleCheckboxChange(e, '003')}
                        />
                        </td>
                        <td>003</td>
                        <td>Completo</td>
                        <td>02/08/2023</td>
                        <td>552269</td>
                        </tr>*/}
                        </tbody>
                    </table>
                </div>
                <div className="w-full">
                    <div className="w-full py-7 mr-5 mb-5 flex justify-center w-auto">
                        <button className="m-10 bg-blue-500 text-white rounded-lg px-4 md:px-28 py-2 md:py-4 ">
                            <Link href="portal/registroBike">Registrar nova bicicleta</Link>
                        </button>
                        <button className=" m-10 bg-blue-500 text-white rounded-lg px-4 md:px-28 py-2 md:py-4">
                            <Link href="portal/vistoriaBike">Registrar nova vistoria</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}