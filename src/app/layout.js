import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Background from "../../components/background";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Govind Bhatter Portfolio",
  description: "Welcome to the personal portfolio of Govind Bhatter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head />
      <body className="relative overflow-x-hidden scroll-smooth">
        <Background />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
