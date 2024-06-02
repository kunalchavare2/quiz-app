import React, { useEffect, useState } from "react";
import {
  LeaderboardTable,
  LeaderBoardWrapper,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./LeaderBoard.styled";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import { getLeaderBoard } from "../../../utils/quiz-functions/quiz-functions";
import Heading from "../../Atoms/Heading/Heading";

// Example data for the leaderboard

const LeaderBoard = () => {
  const [status, setStatus] = useState({
    loading: true,
    data: [],

    error: null,
  });
  useEffect(() => {
    getLeaderBoard()
      .then((response) => {
        setStatus({
          loading: false,
          data: response.data,
          error: null,
        });
      })
      .catch((err) => {});
  }, []);

  if (status.loading) {
    return (
      <LeaderBoardWrapper>
        <LoadingImg />
      </LeaderBoardWrapper>
    );
  }

  if (status.error) {
    return <LeaderBoardWrapper>{status.error}</LeaderBoardWrapper>;
  }

  return (
    <LeaderBoardWrapper>
      <Heading label="LeaderBoard" type="large" />
      <LeaderboardTable>
        <TableHead>
          <TableRow>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Score</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {status.data.map((player, index) => (
            <TableRow key={player.user} className="data">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{player.users.name}</TableCell>
              <TableCell>{Number(player.averageScore).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderBoardWrapper>
  );
};

export default LeaderBoard;
