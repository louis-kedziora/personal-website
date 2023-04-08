import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type HeaderProps = {
  title: string,
}

const Header = ({ title }: HeaderProps) => {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  const names = ['Louis', 'Macintosh', 'Kedziora'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </main>
  );
}
