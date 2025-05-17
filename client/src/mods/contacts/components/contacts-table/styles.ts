import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  /* min-height: 780px; */
  min-height: 550px;
  border-radius: 16px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  /* @media screen and (max-height: 800px) {
    min-height: 550px;
  } */
`;

export const Table = styled.table`
  width: 100%;
  height: auto;
`;

export const TableHead = styled.thead`
  z-index: 500;
  position: sticky;
  top: 0;
  display: flex;
  height: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #f7f8f9;
`;

export const TableHeadRow = styled.tr`
  display: flex;
  width: 100%;
`;

export const TableBody = styled.tbody``;

export const TableHeadCell = styled.th`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 100%;

  text-align: start;
  color: #292e33;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 1440px) {
    &:nth-child(2) {
      max-width: 220px;
    }
    &:nth-child(5) {
      max-width: 150px;
    }
    &:nth-child(7) {
      max-width: 150px;
    }
    &:nth-child(6) {
      max-width: 100px;
    }
    &:nth-child(4) {
      max-width: 100px;
    }
  }
  &:first-child {
    padding-left: 16px;
    border-radius: 10px 0 0 10px;
  }
`;

export const TableRowData = styled.td`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 100%;

  color: #292e33;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  &:first-child {
    padding-left: 16px;
  }

  @media screen and (max-width: 1440px) {
    &:nth-child(2) {
      max-width: 220px;
    }
    &:nth-child(5) {
      max-width: 150px;
    }
    &:nth-child(7) {
      max-width: 150px;
    }
    &:nth-child(6) {
      max-width: 100px;
    }
    &:nth-child(4) {
      max-width: 100px;
    }
  }
`;

export const TableBodyRow = styled.tr`
  display: flex;
  width: 100%;
  height: 48px;

  &:not(:last-child) {
    border-bottom: 1px solid #dedfe0;
  }
`;
