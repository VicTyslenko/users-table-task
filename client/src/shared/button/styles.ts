import styled, { css } from "styled-components";
import type { Variant } from "./models";

type ButtonProps = {
  $variant?: Variant;
};
export const Button = styled.button<ButtonProps>`
  color: #fff;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 104px;
  height: 36px;
  padding: 0 16px;

  font-size: 14px;
  font-weight: 500;

  border-radius: 6px;
  cursor: pointer;

  ${({ $variant }) => {
    switch ($variant) {
      case "secondary":
        return css`
          color: #292e33;
          border: 1px solid #dedfe0;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        `;
      case "transparent":
        return css`
          padding: 0;
          background-color: transparent;
          color: black;
          border: none;
          min-width: auto;
          width: auto;
          height: auto;
        `;

      default:
        return css`
          border: 1px solid transparent;
          background: rgb(14, 40, 65);
        `;
    }
  }}
`;
