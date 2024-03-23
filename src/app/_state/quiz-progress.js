import { atom } from "recoil";

export const currentQuizProgress = atom({
  key: 'currentQuizProgress',
  default: 1
});