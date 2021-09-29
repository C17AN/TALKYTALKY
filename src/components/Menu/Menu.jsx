import React, { useEffect, useState } from "react";
import BaseCard from "components/common/BaseCard/BaseCard";
import MenuItem from "./MenuItem";
import { useRecoilState } from "recoil";
import { languageState } from "store/store";
import language from "constants/language";
import MenuType from "./MenuType";

const Menu = () => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState);
  useEffect(() => { }, [selectedLanguage]);

  return (
    <BaseCard>
      <ul>
        <MenuItem
          title="한국어 (TOPIK)"
          onClick={() => setSelectedLanguage(language.KOREAN)}
          language={language.KOREAN}
        />
        <MenuType type="연습하기" language={language.KOREAN}></MenuType>
        <MenuType type="모의 테스트" language={language.KOREAN}></MenuType>
        <MenuItem
          title="영어 (OPIC)"
          onClick={() => setSelectedLanguage(language.ENGLISH)}
          language={language.ENGLISH}
        />
        <MenuType type="연습하기" language={language.ENGLISH}></MenuType>
        <MenuType type="모의 테스트" language={language.ENGLISH}></MenuType>
      </ul>
    </BaseCard>
  );
};

export default Menu;
