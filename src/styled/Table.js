import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid
      ${({ themeMode }) =>
        themeMode === "dark" ? "#333" : "#ccc"};
  }

  th {
    font-weight: bold;
  }
`;
