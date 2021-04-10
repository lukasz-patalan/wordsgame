import React from "react";
import { ScorePageWrapper } from "./styled/ScoreScreen/ScorePageWrapper";
import { TotalScoreWrapper } from "./styled/ScoreScreen/TotalScoreWrapper";

import { ScorePageProps } from "../constants/interfaces";

export const ScorePage = ({
  userName,
  wordsCollection,
  dataIndex,
  userAnswers,
}: ScorePageProps): JSX.Element => {
  const goodAnswers = wordsCollection[dataIndex].good_words;

  const resultsArr = userAnswers.map(
    (answer: string) => goodAnswers.indexOf(answer) !== -1
  );
  const userGoodAnswersNumber = resultsArr.filter((el) => el === true).length;
  const userBadAnswersNumber = resultsArr.filter((el) => el === false).length;
  const uncheckedGoodAnswersNumber = goodAnswers.filter(
    (el: string) => userAnswers.indexOf(el) < 0
  ).length;

  const totalScore =
    userGoodAnswersNumber * 2 -
    (userBadAnswersNumber + uncheckedGoodAnswersNumber);

  return (
    <React.Fragment>
      <ScorePageWrapper>
        <div>Congratulations, {userName}!</div>
        <div>Your score:</div>
        <TotalScoreWrapper>{totalScore} points</TotalScoreWrapper>
      </ScorePageWrapper>
    </React.Fragment>
  );
};
