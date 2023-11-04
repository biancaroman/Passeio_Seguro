import { Header } from "../components/Header";

export default function Portal(){

    const isAuthenticated = true;

    return(
        <main>
            <Header isAuthenticated={isAuthenticated}/>
            <h1>Portal</h1>
        </main>
    )
}