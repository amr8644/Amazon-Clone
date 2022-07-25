import type { NextPage } from "next";
import Head from "next/head";
import Footer from "./sections/Footer";
import MainContent from "./sections/MainContent";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;
