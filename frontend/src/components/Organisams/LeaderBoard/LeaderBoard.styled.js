import styled from "styled-components";

export const LeaderBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;
// Styled components for the leaderboard table
export const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  .data&:nth-child(1) {
    background-color: #ffd700;
  }
  .data&:nth-child(2) {
    background-color: #c0c0c0;
  }
  .data&:nth-child(3) {
    background-color: #c9ae5d;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
`;
