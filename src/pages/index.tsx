import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TerminalArea } from "../components/TerminalArea/TerminalArea";
import { TitleBarBtns } from "../components/TitleBarBtns/TitleBarBtns";
import { TitleBarName } from "../components/TitleBarName/TitleBarName";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-blue">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex fixed h-5/6 shadow-[12px_12px_12px_12px_rgba(0,0,0,0.3)] w-11/12 bg-[#232735]">
        <div className="relative h-full w-full">
          <TitleBarName />
          <TitleBarBtns />
          <TerminalArea />
        </div>
      </main>
    </div>
  );
};

export default Home;
