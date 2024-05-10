import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([
    {
      name: "Luffy",
      image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png",
      description: "The main character of One Piece.",
      link: `${process.env.PUBLIC_URL}/luffy.html`,
    },
    {
      name: "Nami",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f8/Nami_face.jpg",
      description: "The navigator of the crew.",
      link: `${process.env.PUBLIC_URL}/nami.html`,
    },
    {
      name: "Sanji",
      image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Sanji_%28One_Piece%29.jpg",
      description: "The cook of the crew.",
      link: `${process.env.PUBLIC_URL}/sanji.html`,
    },
    {
      name: "Zoro",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg",
      description: "A swordsman and a member of the Straw Hat Pirates.",
      link: `${process.env.PUBLIC_URL}/zoro.html`,
    },
    {
      name: "Usopp",
      image: "https://upload.wikimedia.org/wikipedia/en/5/53/Usopp.png",
      description: "A sniper and a skilled liar.",
      link: `${process.env.PUBLIC_URL}/usopp.html`,
    },
    {
      name: "Chopper",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Tony_Tony_Chopper.jpg",
      description: "A reindeer who can transform into a human.",
      link: `${process.env.PUBLIC_URL}/chopper.html`,
    },
    {
      name: "Robin",
      image: `${process.env.PUBLIC_URL}/robin.jpeg`,
      description: "An archaeologist and a former assassin.",
      link: "https://en.wikipedia.org/wiki/Nico_Robin",
    },
    {
      name: "Franky",
      image: "https://storage.googleapis.com/website-images-bucket/Franky.webp",
      description: "A cyborg and a shipwright.",
      link: "https://en.wikipedia.org/wiki/Franky_(One_Piece)",
    },
    {
      name: "Brook",
      image: "https://storage.googleapis.com/website-images-bucket/93458.webp",
      description: "A musician and a swordsman.",
      link: "https://en.wikipedia.org/wiki/Brook_(One_Piece)",
    },
  ]);

  return (
    <div className="App">
      <h1>One Piece Characters by Aarush</h1>
      <div className="tile-container">
        {characters.map((character) => (
          <div className="tile" key={character.name}>
            <a href={character.link}>
              <img src={character.image} alt={character.name} />
            </a>
            <div className="tile-content">
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
