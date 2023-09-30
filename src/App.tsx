import "./App.css";

import Character from "./components/Character";
import SideList from "./components/SideList";

import { infoCharacters } from "./informations/infoCharacters";

export default function App() {
  return (
    <>
      <main className="personagens">
        {infoCharacters.map((item) => (
          <Character
            id={item.id}
            image={item.image}
            characterName={item.characterName}
            characterDescription={item.characterDescription}
            key={item.id}
          />
        ))}
      </main>
      <SideList />
    </>
  );
}
