import styled from "styled-components";

export const UserPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  padding: 50px 30px 0;
  width: 500px;
  height: 200px;
  background: #ffffff;

  @media (max-width: 580px) {
    width: 400px;
  }
  @media (max-width: 470px) {
    width: auto;
    padding: 50px 60px 0;
  }
  @media (max-width: 375px) {
    padding: 50px 30px 0;
  }
`;
