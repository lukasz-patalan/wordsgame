import React from "react";

import { WordsCloud } from "./WordsCloud";

import { GamePageProps } from "../constants/interfaces";

export const GamePage = ({
  setScreen,
  setUserAnswers,
  userAnswers,
  setChecked,
  isChecked,
  wordsCollection,
  isFetchingData,
  dataIndex,
}: GamePageProps): JSX.Element => {
  if (isFetchingData) {
    return <div>fetching....</div>;
  } else if (wordsCollection.length && !isFetchingData) {
    return (
      <WordsCloud
        wordsCollection={wordsCollection}
        setScreen={setScreen}
        setUserAnswers={setUserAnswers}
        userAnswers={userAnswers}
        setChecked={setChecked}
        isChecked={isChecked}
        dataIndex={dataIndex}
      />
    );
  } else {
    return <div>We run into an error :(</div>;
  }
};
