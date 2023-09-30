import styles from "./styles.module.css";

import Button from "../Button";

import { infoCharacters } from "../../informations/infoCharacters";

export default function SideList() {
  return (
    <ul className={styles.buttons}>
      {infoCharacters.map((item) => (
        <li key={item.id}>
          <Button
            id={item.id}
            crewImage={item.crewImage}
            characterName={item.characterName}
          />
        </li>
      ))}
    </ul>
  );
}
