import styles from "./styles.module.css";

type CharacterImageProps = {
  image: string;
  characterName: string;
};

export default function CharacterImage({
  image,
  characterName,
}: CharacterImageProps) {
  return (
    <img
      className={styles.character_image}
      src={image}
      alt={`Personagem ${characterName}`}
    />
  );
}
