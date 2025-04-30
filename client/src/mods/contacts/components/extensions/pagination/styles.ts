import styled from "styled-components";

export const PaginationWrapp = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`;

type PaginationActionProps = {
  $isActive?: boolean;
};

export const PaginationAction = styled.button<PaginationActionProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  width: 36px;
  height: 36px;
  padding: 10px;

  font-size: 14px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#f28500" : "#dedfe0")};
  color: ${({ $isActive }) => ($isActive ? "#f28500" : "#292e33")};
`;
