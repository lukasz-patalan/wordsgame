import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

import { GamePage } from "./components/GamePage";
import { ScorePage } from "./components/ScorePage";
import { PageWrapper } from "./components/styled/PageWrapper";
import { UserPage } from "./components/UserPage";
import { HeaderWrapper } from "./components/styled/HeaderWrapper";

import { SCREENS } from "./constants/screens";
import { WordsData } from "./constants/interfaces";
import { firestore } from "./firebase/firebaseConfig";

function WordsGame(): JSX.Element {
  const [userName, setUserName] = useState("");
  const [screen, setScreen] = useState(SCREENS.USER);
  const [userAnswers, setUserAnswers] = useState<string[]>(["answer"]);
  const [isChecked, setChecked] = useState(false);
  const [wordsCollection, setWordsCollection] = useState<
    firebase.firestore.DocumentData[] | WordsData[]
  >([]);
  const [isFetchingData, setFetchingData] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    async function fetchWordsCollection() {
      try {
        setFetchingData(true);
        const snapshot = await firestore.collection("words").get();
        const data = snapshot.docs.map((doc) => doc.data());
        setWordsCollection(data);
        setFetchingData(false);
      } catch (ex) {
        setFetchingData(false);
      }
    }

    fetchWordsCollection();
    setDataIndex(Math.floor(Math.random() * 3));
  }, []);

  return (
    <PageWrapper>
      <HeaderWrapper>Word game</HeaderWrapper>
      {screen === SCREENS.USER && (
        <UserPage
          userName={userName}
          setUserName={setUserName}
          setScreen={setScreen}
        />
      )}
      {screen === SCREENS.GAME && (
        <GamePage
          setScreen={setScreen}
          setUserAnswers={setUserAnswers}
          userAnswers={userAnswers}
          setChecked={setChecked}
          isChecked={isChecked}
          wordsCollection={wordsCollection}
          isFetchingData={isFetchingData}
          dataIndex={dataIndex}
        />
      )}
      {screen === SCREENS.SCORE && (
        <ScorePage
          userName={userName}
          wordsCollection={wordsCollection}
          dataIndex={dataIndex}
          userAnswers={userAnswers}
        />
      )}
    </PageWrapper>
  );
}

export default WordsGame;
