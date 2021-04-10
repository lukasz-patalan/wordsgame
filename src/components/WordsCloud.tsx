import React from "react";

import { WordsCloudProps } from "../constants/interfaces";
import { CloudContainer } from "./styled/GameScreen/CloudContainer";
import { GameTitleWrapper } from "./styled/GameScreen/GameTitleWrapper";
import { Button } from "./styled/Button";
import { WordWrapper } from "./styled/GameScreen/WordWrapper";
import { ResultWord } from "./styled/GameScreen/ResultWord";
import { SCREENS } from "../constants/screens";
import { WordContainer } from "./styled/GameScreen/WordContainer";
import { CloudWrapper } from "./styled/GameScreen/CloudWrapper";

export const WordsCloud = ({
  wordsCollection,
  setScreen,
  setUserAnswers,
  userAnswers,
  setChecked,
  isChecked,
  dataIndex,
}: WordsCloudProps): JSX.Element => {
  const chosenAnswers = [...userAnswers];

  const handleOnCheckButtonClick = (): void => {
    setChecked(true);
  };

  const handleOnFinishButtonClick = (): void => {
    setScreen(SCREENS.SCORE);
  };
  const goodAnswers = wordsCollection[dataIndex].good_words;

  return (
    <React.Fragment>
      <GameTitleWrapper>{wordsCollection[dataIndex].question}</GameTitleWrapper>
      <CloudContainer>
        <CloudWrapper>
          {wordsCollection[dataIndex].all_words.map(
            (word: string, index: number) => {
              const isWordChecked = isChecked && userAnswers.includes(word);
              const isWordCorrect = goodAnswers.includes(word);
              const wordPosition = word.length * 5 + index * 2;
              return (
                <React.Fragment key={index}>
                  <WordContainer wordPosition={wordPosition}>
                    <ResultWord
                      isCorrect={isWordCorrect}
                      isChecked={isWordChecked}
                    >
                      {isWordCorrect ? "good" : "bad"}
                    </ResultWord>
                    <WordWrapper
                      isClicked={!!userAnswers.find((el) => el === word)}
                      isCorrect={isWordCorrect}
                      isChecked={isWordChecked}
                      onClick={() => {
                        if (chosenAnswers.includes(word) || isChecked) {
                          return null;
                        } else {
                          chosenAnswers.push(word);
                          setUserAnswers(chosenAnswers);
                        }
                      }}
                    >
                      {word}
                    </WordWrapper>
                  </WordContainer>
                </React.Fragment>
              );
            }
          )}
        </CloudWrapper>
      </CloudContainer>
      {isChecked ? (
        <Button onClick={handleOnFinishButtonClick}>Finish game</Button>
      ) : (
        <Button onClick={handleOnCheckButtonClick}>check answers</Button>
      )}
    </React.Fragment>
  );
};
