import styled from "styled-components";

interface ToggleSwitchProps {
  $blocked?: boolean;
}

export const ToggleSwitch = styled.label<ToggleSwitchProps>`
  width: 36px;
  min-width: 36px;
  height: 20px;
  display: inline-block;
  position: relative;

   .toggle-switch_checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .toggle-switch_slider {
      background-color: ${({ $blocked }) => ($blocked ? "#ff5147" : "#77dd77")};
    }

    &:checked + .toggle-switch_slider:before {
      transform: translateX(16px);
      box-shadow: rgba(0, 0, 0, 0.35) 1px 3px 4px 0;
    }
  }
`;

export const Slider = styled.span`
  top: 0;
  left: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  background: #78788029;
  transition: 0.1s;
  border-radius: 34px;
  overflow: hidden;

  &:before {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 4px 0;
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    transition: 0.2s;
  }
`;
