import React from "react";
import { useRecoilState } from "recoil";
import { languageState } from "store/store";
import LANGUAGE from "constants/language"

const MenuItem = ({ title, language, onClick }) => {
  const [selectedLanguage, _] = useRecoilState(languageState)
  return (
    <li
      className={`px-6 py-2 m-2 cursor-pointer flex justify-center ${selectedLanguage === LANGUAGE[language] ? "bg-blue-400 text-white rounded-md" : null} transition-all`}
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export default MenuItem;
