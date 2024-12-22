import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contact}>
      <span>
        <b>{name}</b>: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
