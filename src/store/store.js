import { atom } from "recoil";
import LANGUAGE from "constants/language";

export const languageState = atom({
  key: "languageState",
  default: null,
});

export const difficultyState = atom({
  key: "difficultyState",
  default: null,
});
