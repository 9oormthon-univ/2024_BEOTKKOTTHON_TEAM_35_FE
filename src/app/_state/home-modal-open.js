import { atom } from "recoil";

export const homeModal = atom({
  key: 'homeModal',
  default: false
});

export const todayQuiz = atom({
  key: 'todayQuiz',
  default: false
});