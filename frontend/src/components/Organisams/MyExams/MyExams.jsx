import React, { useEffect, useState } from "react";
import { MyExamsStyle, MyExamsWrapper } from "./MyExams.styled";
import { getAllExams } from "../../../utils/quiz-functions/quiz-functions";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import Exam from "../../Molecules/Exam/Exam";
import InfoTypes from "./../InfoTypes/InfoTypes";

const MyExams = () => {
  const [status, setStatus] = useState({
    loading: true,
    data: [],

    error: null,
  });
  useEffect(() => {
    getAllExams()
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
      <MyExamsWrapper>
        <LoadingImg />
      </MyExamsWrapper>
    );
  }

  if (status.error) {
    return <MyExamsWrapper>{status.error}</MyExamsWrapper>;
  }

  if (status.data.length === 0) {
    return (
      <MyExamsWrapper>
        <InfoTypes type="nodata" />
      </MyExamsWrapper>
    );
  }
  return (
    <MyExamsStyle>
      {status.data.map((exam, index) => (
        <Exam key={exam["_id"]} {...exam} index={index + 1} />
      ))}
    </MyExamsStyle>
  );
};

export default MyExams;
