import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import DIFFICULTY from "constants/difficulty";
import React from "react";
import { useRecoilState } from "recoil";
import { difficultyState, studyModeState } from "store/store";
import { parseModeName } from "utils/parseModeName";
import DifficultyButton from "./DifficultyButton";

const SelectDifficulty = () => {
  const [_, setDifficulty] = useRecoilState(difficultyState);

  return (
    <>
      <h1 className="text-center mb-4 text-lg font-semibold text-gray-600">난이도를 선택하세요</h1>
      <ul className="flex justify-center space-x-6">
        <DifficultyButton text="쉬움" selectedDifficulty={DIFFICULTY.EASY} onClick={() => setDifficulty(DIFFICULTY.EASY)} />
        <DifficultyButton text="보통" selectedDifficulty={DIFFICULTY.NORMAL} onClick={() => setDifficulty(DIFFICULTY.NORMAL)} />
        <DifficultyButton text="어려움" selectedDifficulty={DIFFICULTY.HARD} onClick={() => setDifficulty(DIFFICULTY.HARD)} />
      </ul>
    </>
  );
};

export default SelectDifficulty;
