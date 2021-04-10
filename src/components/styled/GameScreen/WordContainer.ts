import styled from "styled-components";

interface WordContainerProps {
  wordPosition: number;
}

export const WordContainer = styled.div<WordContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: ${(props) => props.wordPosition}px;
`;
