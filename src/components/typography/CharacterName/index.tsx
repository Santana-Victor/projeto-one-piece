import styles from "./styles.module.css";

export default function CharacterName({ children }: { children: string }) {
  return <h2 className={styles.character_name}>{children}</h2>;
}
