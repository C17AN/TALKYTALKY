import BaseCard from "components/common/BaseCard/BaseCard";
import React from "react";
import { useRecoilState } from "recoil";
import { difficultyState } from "store/store";
import DifficultyButton from "./DifficultyButton";

const SelectDifficulty = () => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);
  return (
    <BaseCard className="mb-4">
      <div className="p-4">
        <h1 className="text-center">난이도를 선택하세요</h1>
        <ul className="flex justify-center">
          <DifficultyButton text="쉬움" />
          <DifficultyButton text="보통" />
          <DifficultyButton text="어려움" />
        </ul>
      </div>
    </BaseCard>
  );
};

export default SelectDifficulty;
