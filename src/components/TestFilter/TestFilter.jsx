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
      <BaseSubtitle text={`[${parsedStudyMode}] - 조건 검색`} />
      <BaseCard className="mb-4">
        <div className="w-full p-4 flex justify-center">
          <section className="flex flex-col items-center mx-auto">
            <SelectDifficulty />
          </section>
          <div className="border-r border-gray-300"></div>
          <section className="flex flex-col items-center mx-auto">
            <SelectCategory />
          </section>
        </div>
      </BaseCard>
    </>
  );
};

export default TestFilter;
