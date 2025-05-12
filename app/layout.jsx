import { GeistMono } from "geist/font/mono";
import "./app.css";

//import { Providers } from "./providers";
//import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Lexington WEB3",
  description: "Onboarding Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lxt">
      <body className={GeistMono.className}>
        <Header />
        <main className="mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
