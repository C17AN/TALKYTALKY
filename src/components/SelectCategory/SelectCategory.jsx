import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import CATEGORY from "constants/category";
import React from "react";
import { useRecoilState } from "recoil";
import { categoryState, studyModeState } from "store/store";
import SelectCategoryButton from "./SelectCategoryButton";

const SelectCategory = () => {
  const [_, setCategory] = useRecoilState(categoryState);

  return (
    <>
      <h1 className="text-center mb-4 text-lg font-semibold text-gray-600">테마를 선택하세요</h1>
      <ul className="flex justify-center space-x-6">
        <SelectCategoryButton text="여행" selectedCategory={CATEGORY.TRAVEL} onClick={() => setCategory(CATEGORY.TRAVEL)} />
        <SelectCategoryButton text="예술" selectedCategory={CATEGORY.ART} onClick={() => setCategory(CATEGORY.ART)} />
        <SelectCategoryButton text="일상" selectedCategory={CATEGORY.DAILY} onClick={() => setCategory(CATEGORY.DAILY)} />
      </ul>
    </>
  );
};

export default SelectCategory;
