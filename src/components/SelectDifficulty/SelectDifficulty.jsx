import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import React from "react";
import { useRecoilState } from "recoil";
import { difficultyState, studyModeState } from "store/store";
import { parseModeName } from "utils/parseModeName";
import DifficultyButton from "./DifficultyButton";

const SelectDifficulty = () => {
  const [_, setDifficulty] = useRecoilState(difficultyState);
  const [studyMode] = useRecoilState(studyModeState);

  return (
    <>
      <h1 className="text-center mb-4 text-lg font-semibold text-gray-600">난이도를 선택하세요</h1>
      <ul className="flex justify-center space-x-6">
        <DifficultyButton text="쉬움" selectedDifficulty={0} onClick={() => setDifficulty(0)} />
        <DifficultyButton text="보통" selectedDifficulty={1} onClick={() => setDifficulty(1)} />
        <DifficultyButton text="어려움" selectedDifficulty={2} onClick={() => setDifficulty(2)} />
      </ul>
    </>
  );
};

export default SelectDifficulty;
