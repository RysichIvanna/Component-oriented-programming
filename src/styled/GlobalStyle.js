import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ themeMode }) =>
      themeMode === "dark" ? "#0e0e0f" : "#ffffff"};
    color: ${({ themeMode }) =>
      themeMode === "dark" ? "#ffffff" : "#000000"};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
