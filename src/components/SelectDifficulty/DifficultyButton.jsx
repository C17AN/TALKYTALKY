import React from "react";
import { useRecoilState } from "recoil";
import { difficultyState } from "store/store";
import styles from "./SelectDifficulty.module.css";

const DifficultyButton = ({ text, selectedDifficulty, onClick }) => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState)
  return (
    <button onClick={onClick}
      className={[selectedDifficulty === difficulty ?
        'bg-blue-400 text-white' : 'bg-gray-50', 'py-2 px-4 rounded-md transition-colors hover:bg-blue-200 hover:text-white transition-colors'].join(' ')}>
      {text}
    </button>
  );
};

export default DifficultyButton;
