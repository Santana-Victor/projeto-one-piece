import styles from "./styles.module.css";

type ButtonProps = {
  id: number;
  crewImage: string;
  characterName: string;
};

export default function Button({ id, crewImage, characterName }: ButtonProps) {
  const idInitialSelection = 3;

  return (
    <button
      className={
        id === idInitialSelection
          ? `${styles.button} ${styles.selected}`
          : `${styles.button}`
      }
    >
      <img src={crewImage} alt={`Tripulação ${characterName}`} />
    </button>
  );
}
