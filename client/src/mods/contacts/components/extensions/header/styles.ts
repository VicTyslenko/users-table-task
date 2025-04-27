import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: 36px;

  & .add-button {
    min-width: 36px;
    height: 36px;
    cursor: pointer;
  }
  & .header-input {
    max-width: 250px;
  }
`;
