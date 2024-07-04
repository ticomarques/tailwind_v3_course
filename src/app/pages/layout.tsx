import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curso de tailwind V3",
  description: "Curso de tailwind versão 3, estamos listando os recursos mais uteis desta ferramenta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="root">
          {children}
        </div>
      </body>
    </html>
  );
}
