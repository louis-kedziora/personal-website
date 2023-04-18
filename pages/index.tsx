import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return <h1>{title ? title : "Default title"}</h1>;
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Louis and I am a developer</p>
      </section>
    </Layout>
  );
}
