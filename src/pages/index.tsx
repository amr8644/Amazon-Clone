import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Footer from "./sections/Footer";
import MainContent from "./sections/MainContent";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";
import { prisma } from "../../lib/prisma";
import { getSession } from "next-auth/react";

const Home: NextPage = ({ user, session }: any) => {
  return (
    <>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} session={session} />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      props: {
        session: null,
      },
    };
  }
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email !== null ? session?.user?.email : "",
    },
  });
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      session,
    },
  };
};

export default Home;
