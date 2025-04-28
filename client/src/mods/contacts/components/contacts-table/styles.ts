import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  /* max-height: 620px;
  overflow: auto; */
`;

export const Table = styled.table`
  /* display: grid;
  width: 100%;
  min-width: 768px;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed; */
`;
export const TableHead = styled.thead`
  z-index: 500;

  position: sticky;
  top: 0;

  display: grid;

  height: 40px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #f7f8f9;
`;

export const TableHeadRow = styled.tr`
  display: flex;
  width: 100%;
`;
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

  &:first-child {
    padding-left: 16px;
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export const TableBody = styled.tbody`
  position: relative;

  display: grid;
`;

export const TableBodyRow = styled.tr`
  display: flex;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid transparent;

  &:first-child {
    .icon-button_tooltip {
      top: 30px !important;
      min-height: 120%;

      z-index: 1000;

      &::before {
        margin-right: 5px !important;
        top: -5px !important;
        left: 50% !important;
      }
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #dedfe0;
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
`;
