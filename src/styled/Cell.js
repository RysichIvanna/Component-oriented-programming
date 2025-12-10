import styled from "styled-components";

export const Cell = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ themeMode }) =>
    themeMode === "dark" ? "#2b2b2c" : "#f0f0f0"};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 8px;
  cursor: pointer;

  color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};

  transition: 0.2s;
`;
