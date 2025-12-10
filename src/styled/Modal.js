import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: ${({ themeMode }) =>
    themeMode === "dark" ? "#242424" : "#fff"};
  padding: 20px;
  border-radius: 10px;
  min-width: 250px;

  color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};
`;
