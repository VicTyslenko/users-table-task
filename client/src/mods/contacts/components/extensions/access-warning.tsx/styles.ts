import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
  width: 500px;
  min-height: 300px;

  & svg {
    width: 50px;
    height: 50px;
  }
  & .default-button {
    min-width: 200px;
  }
`;

export const Message = styled.p`
  font-size: 18px;
`;

export const MessageWrapp = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 27px;
  margin-top: 40px;
`;
