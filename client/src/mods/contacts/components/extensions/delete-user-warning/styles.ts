import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 380px;
  min-height: 200px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .buttons-group {
    justify-content: center;
  }
`;

export const IconWrapp = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background-color: #ff69610d;
`;

export const Title = styled.div`
  color: #292e33;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

export const Desription = styled.p`
  color: #6a6e73;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
`;
