import styled from "styled-components";

export const ScorePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;
  width: 500px;
  height: 150px;
  background: #ffffff;
  text-align: center;

  @media (max-width: 580px) {
    width: 400px;
  }
  @media (max-width: 470px) {
    width: auto;
    padding: 50px 30px;
  }
  @media (max-width: 375px) {
    padding: 50px 30px;
  }
`;
