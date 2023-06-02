import Button from "@/components/Button";
import Image from "next/image";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  await wait(2000);
  const data = await response.json();
  return data.results;
}

export default async function Contact() {
  const results = await getCharacters();
  return (
    <main>
      <h1>Contact</h1>
      <ul>
        {results.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <Button>Click me</Button>
      jCBqy2QCvlo
      <Image
        src="https://source.unsplash.com/jCBqy2QCvlo"
        width={400}
        height={300}
        alt="Unsplash Image"
      />
      <img
        src="https://source.unsplash.com/jCBqy2QCvlo"
        width={400}
        height={300}
        alt="Unsplash Image"
      />
    </main>
  );
}
