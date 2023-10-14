import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Passeio Seguro",
  description: "Aplicação da Passeio Seguro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
