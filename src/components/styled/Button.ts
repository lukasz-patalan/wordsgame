import styled from "styled-components";

interface ButtonProps {
  isDisabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  border-radius: 30px;
  color: #fff;
  background: ${(props) => (props.isDisabled ? "#BE6E6E" : "#deb62d")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  min-width: 80px;
  font-size: 18px;

  &:hover {
   background: ${(props) => (props.isDisabled ? "#BE6E6E" : "#C9A427")};
   transition: 0.5s;
`;
