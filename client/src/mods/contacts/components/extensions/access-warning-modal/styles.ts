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

  & svg {
    width: 60px;
    height: 60px;
  }
  /* & .default-button {
    min-width: 200px;
  } */
`;

export const IconWrapp = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #e3f1ff;
`;

export const Message = styled.p`
  color: #121212;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;

export const MessageWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 25px;
`;
