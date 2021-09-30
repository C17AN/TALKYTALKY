import React from "react";
import { useRecoilState } from "recoil";
import { categoryState, difficultyState } from "store/store";
import styles from "./SelectDifficulty.module.css";

const SelectCategoryButton = ({ text, selectedCategory, onClick }) => {
  const [category,] = useRecoilState(categoryState)
  return (
    <button onClick={onClick}
      className={[selectedCategory === category ?
        'bg-blue-400 text-white' : 'bg-gray-50', 'py-2 px-4 rounded-md transition-colors hover:bg-blue-200 hover:text-white transition-colors'].join(' ')}>
      {text}
    </button>
  );
};

export default SelectCategoryButton;
