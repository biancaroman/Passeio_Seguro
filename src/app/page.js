import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header isAuthenticated={false} />
      <h1>Hello world</h1>
    </>
  );
}
