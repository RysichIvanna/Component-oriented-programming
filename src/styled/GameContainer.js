import styled from "styled-components";

export const GameContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 12px;
  text-align: center;

  background: ${({ themeMode }) =>
    themeMode === "dark" ? "#1b1b1d" : "#ffffff"};

  color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};

  transition: 0.3s ease;
`;
