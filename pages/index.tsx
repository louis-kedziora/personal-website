import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return <h1>{title ? title : "Default title"}</h1>;
};

export default function Home() {
  const names = ["Louis", "Macintosh", "Kedziora"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Develop. Preview. Ship. 🚀" />
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </main>
  );
}
