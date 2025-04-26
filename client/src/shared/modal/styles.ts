import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled.div`
  z-index: 1000;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;

  border-radius: 10px;

  & .cancel-button {
    color: #292e33;
    border: 1px solid #dedfe0;
    background: #fff;
  }
  & .buttons-group {
    width: 100%;
    justify-content: end;
  }
`;
