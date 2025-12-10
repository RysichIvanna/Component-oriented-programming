import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid
    ${({ themeMode }) =>
      themeMode === "dark" ? "#444" : "#ccc"};

  background: ${({ themeMode }) =>
    themeMode === "dark" ? "#2a2a2c" : "#fff"};

  color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};
    
  margin-bottom: 10px;
`;
