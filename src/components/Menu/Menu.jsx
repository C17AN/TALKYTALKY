import React, { useEffect, useState } from "react";
import BaseCard from "components/common/BaseCard/BaseCard";
import MenuItem from "./MenuItem";
import { useRecoilState } from "recoil";
import { languageState, studyModeState } from "store/store";
import language from "constants/language";
import MenuType from "./MenuType";

const Menu = () => {
  const [, setSelectedLanguage] = useRecoilState(languageState);
  const [, setSelectedStudyMode] = useRecoilState(studyModeState)

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language)
    setSelectedStudyMode(null)
  }

  return (
    <BaseCard>
      <ul className="">
        <MenuItem
          title="한국어 발음평가"
          onClick={() => handleSelectLanguage(language.KOREAN)}
          language={language.KOREAN}
        />
        <MenuItem
          title="영어 발음평가"
          onClick={() => handleSelectLanguage(language.ENGLISH)}
          language={language.ENGLISH}
        />
      </ul>
    </BaseCard>
  );
};

export default Menu;
