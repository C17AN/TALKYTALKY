import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: null,
});

export const difficultyState = atom({
  key: "difficultyState",
  default: null,
});

export const studyModeState = atom({
  key: "studyModeState",
  default: null,
});

export const testListState = atom({
  key: "testListState",
  default: []
})