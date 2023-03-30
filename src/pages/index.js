import Head from "next/head";
import Calculator from "@/components/Calculator";
import ButtonBar from "@/components/ButtonBar";
import ThemeContext from "@/ThemeContext";
import { useContext } from "react";
import Header from "@/components/Header";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main main-${theme}`}>
        <div className="main-wrapper">
          <Header />
          <Calculator />
        </div>
      </main>
    </>
  );
}
