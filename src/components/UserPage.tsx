import React from "react";
import { WelcomeWrapper } from "./styled/UserScreen/WelcomeWrapper";
import { UserPageWrapper } from "./styled/UserScreen/UserPageWrapper";
import { UserNameInput } from "./styled/UserScreen/UserNameInput";
import { Button } from "./styled/Button";

import { SCREENS } from "../constants/screens";
import { UserPageProps } from "../constants/interfaces";

export const UserPage = ({
  userName,
  setUserName,
  setScreen,
}: UserPageProps): JSX.Element => {
  const onChangeUserName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserName(event.target.value);
  };

  const handlePlayButton = () => {
    if (!userName) {
      return null;
    } else {
      setScreen(SCREENS.GAME);
    }
  };
  return (
    <UserPageWrapper>
      <WelcomeWrapper>Welcome</WelcomeWrapper>
      <UserNameInput
        placeholder="Type your name..."
        type="text"
        name="name"
        value={userName}
        onChange={onChangeUserName}
      />
      <Button isDisabled={!userName} onClick={handlePlayButton}>
        play
      </Button>
    </UserPageWrapper>
  );
};
