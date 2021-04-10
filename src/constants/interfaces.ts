import { Dispatch, SetStateAction } from "react";
import { SCREENS } from "./screens";
import firebase from "firebase/app";

export interface WordsData {
  all_words: string[];
  good_words: string[];
  question: string;
}

export interface UserPageProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setScreen: Dispatch<SetStateAction<SCREENS>>;
}

export interface GamePageProps {
  setScreen: Dispatch<SetStateAction<SCREENS>>;
  setUserAnswers: Dispatch<SetStateAction<string[] | []>>;
  userAnswers: string[];
  setChecked: Dispatch<SetStateAction<boolean>>;
  isChecked: boolean;
  wordsCollection: firebase.firestore.DocumentData[] | WordsData[];
  isFetchingData: boolean;
  dataIndex: number;
}

export interface ScorePageProps {
  userName: string;
  wordsCollection: firebase.firestore.DocumentData[] | WordsData[];
  dataIndex: number;
  userAnswers: string[];
}

export interface WordsCloudProps {
  wordsCollection: firebase.firestore.DocumentData[] | WordsData[];
  setScreen: Dispatch<SetStateAction<SCREENS>>;
  setUserAnswers: Dispatch<SetStateAction<string[] | []>>;
  userAnswers: string[];
  setChecked: Dispatch<SetStateAction<boolean>>;
  isChecked: boolean;
  dataIndex: number;
}
