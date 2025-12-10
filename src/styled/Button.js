import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  background: ${({ themeMode }) =>
    themeMode === "dark" ? "#333" : "#e0e0e0"};

  color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
