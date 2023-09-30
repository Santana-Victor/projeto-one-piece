import styles from "./styles.module.css";

import CharacterImage from "../CharacterImage";
import LogoOnePiece from "../LogoOnePiece";
import CharacterName from "../typography/CharacterName";
import CharacterDescription from "../typography/CharacterDescription";

type CharacterProps = {
  id: number;
  image: string;
  characterName: string;
  characterDescription: string;
};

export default function Character({
  id,
  image,
  characterName,
  characterDescription,
}: CharacterProps) {
  const idInitialSelection = 3;

  return (
    <div
      className={
        id === idInitialSelection
          ? `${styles.character} ${styles.selected}`
          : `${styles.character}`
      }
    >
      <CharacterImage image={image} characterName={characterName} />
      <div className={styles.content}>
        <LogoOnePiece />
        <CharacterName>{characterName}</CharacterName>
        <CharacterDescription>{characterDescription}</CharacterDescription>
      </div>
    </div>
  );
}
