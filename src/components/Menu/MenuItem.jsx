import React from "react";
import { useRecoilState } from "recoil";
import { languageState } from "store/store";
import LANGUAGE from "constants/language"
import { Link } from "react-router-dom";

const MenuItem = ({ title, language, onClick, isDisabled }) => {
  const [selectedLanguage, _] = useRecoilState(languageState)
  return (
    <Link to="/tests" className="w-4/5">
      <li
        className={` px-6 py-2 m-2 cursor-pointer flex justify-center rounded-md
      ${isDisabled && "text-gray-400"} ${selectedLanguage === LANGUAGE[language] ?
            "bg-blue-300 text-white hover:bg-blue-300" :
            null
          }
        transition-all hover:bg-blue-50`}
        onClick={onClick}
      >
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default MenuItem;
