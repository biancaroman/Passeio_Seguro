import { Header } from "@/app/components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header isAuthenticated={false} />
      <h1>Hello world</h1>
      <Footer/>
    </>
  );
}