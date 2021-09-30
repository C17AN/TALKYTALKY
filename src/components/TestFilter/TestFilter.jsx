import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import SelectCategory from "components/SelectCategory/SelectCategory";
import SelectDifficulty from "components/SelectDifficulty/SelectDifficulty";
import React from "react";
import { useRecoilState } from "recoil";
import { difficultyState, studyModeState } from "store/store";
import { parseModeName } from "utils/parseModeName";

const TestFilter = () => {
  const [studyMode] = useRecoilState(studyModeState);
  const parsedStudyMode = parseModeName(studyMode)

  return (
    <>
      <BaseSubtitle text={`${parsedStudyMode} / 난이도 선택`} />
      <BaseCard className="mb-4">
        <div className="w-full p-4 flex justify-center">
          <section className="flex flex-col items-center px-8 border-r border-gray-300">
            <SelectDifficulty />
          </section>
          <section className="flex flex-col items-center mx-8">
            <SelectCategory />
          </section>
        </div>
      </BaseCard>
    </>
  );
};

export default TestFilter;
