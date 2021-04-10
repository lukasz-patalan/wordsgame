import styled from "styled-components";

interface WordWrapperProps {
  isCorrect: boolean;
  isChecked: boolean;
  isClicked: boolean;
}

export const WordWrapper = styled.div<WordWrapperProps>`
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  color: ${(props) =>
    props.isChecked ? (props.isCorrect ? "#2CB452" : "red") : "black"};
  border-radius: 50px;
  border: 0;
  background: ${(props) =>
    props.isClicked && !props.isChecked ? "#f1eeee" : "transparent"};
  &:hover {
    background: #f1eeee;
    transition: 0.5s;
  }
`;
