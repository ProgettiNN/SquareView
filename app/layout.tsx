import type { Metadata } from "next";
import { Roboto, Merriweather, Montserrat, Raleway, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import data from "../public/data.json"; // Importa il file JSON

// Definisci i font con i loro pesi disponibili
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// Mappa dei font disponibili
const fonts:any = {
  Roboto: roboto,
  Merriweather: merriweather,
  Montserrat: montserrat,
  Raleway: raleway,
  Open_Sans: openSans,
  Inter: inter,
};

// Seleziona il font dall'input dell'utente nel file JSON
const selectedFont = fonts[data.font] || roboto;

export const metadata: Metadata = {
  title: data.metadata.titolo, // Usa il titolo dal JSON
  description: data.metadata.descrizione, // Usa la descrizione dal JSON
  icons: {
    icon: './photo/navbar.png', // Percorso alla tua icona
    shortcut: './photo/navbar.png', // Percorso alla tua icona per i collegamenti
    apple: './photo/navbar.png', // Percorso alla tua icona per dispositivi Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={selectedFont.className}>{children}</body>
    </html>
  );
}
