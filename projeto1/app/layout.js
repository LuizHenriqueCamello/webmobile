import "./globals.css";

export const metadata = {
  title: "Portfólio - Luiz Henrique",
  description: "Portfólio com jogo da forca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}