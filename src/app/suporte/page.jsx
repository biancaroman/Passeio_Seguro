import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function Suporte(){

    const isAuthenticated = true;

    return(
        <main>
            <Header isAuthenticated={isAuthenticated}/>
            <h1>Suporte</h1>
            <Footer/>
        </main>
    )
}