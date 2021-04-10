import styled from "styled-components";

interface ResultWordProps {
  isCorrect: boolean;
  isChecked: boolean;
}
export const ResultWord = styled.span<ResultWordProps>`
  font-size: 12px;
  color: ${(props) =>
    props.isChecked ? (props.isCorrect ? "#2CB452" : "red") : "unset"};
  visibility: ${(props) => (props.isChecked ? "visible" : "hidden")};
  transform: rotate(-10deg);
  font-weight: bold;
  margin-bottom: 5px;
`;
