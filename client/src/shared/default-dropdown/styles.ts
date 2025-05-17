import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const OptionsWrapper = styled.div`
  z-index: 2000;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  min-width: 144px;
  width: 100%;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 8px 12px;
  border-radius: 6px;
  background: #fff;
  font-size: 14px;
  font-weight: 400;
`;

export const Item = styled.button`
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
