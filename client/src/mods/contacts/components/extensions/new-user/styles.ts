import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  min-width: 500px;
  padding: 20px;
`;

export const Form = styled.form`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;

  & span {
    font-size: 14px;
    font-weight: 500;
    color: #292e33;
  }

  & .close-button {
    padding: 0;
    background-color: transparent;
    color: black;
    min-width: auto;
  }

  & .buttons-group {
    width: 100%;
    justify-content: end;
  }
`;
export const HeaderWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #292e33;
`;


export const Label = styled.span`
  &.admin {
    font-weight: 600;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: red;
`;

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
