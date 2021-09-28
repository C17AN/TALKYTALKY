import React from "react";
import styles from "./SelectDifficulty.module.css";

const DifficultyButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.difficulty}>
      {text}
    </button>
  );
};

export default DifficultyButton;
