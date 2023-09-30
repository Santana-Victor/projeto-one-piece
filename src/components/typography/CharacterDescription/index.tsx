import styles from "./styles.module.css";

export default function CharacterDescription({
  children,
}: {
  children: string;
}) {
  return <p className={styles.character_description}>{children}</p>;
}
