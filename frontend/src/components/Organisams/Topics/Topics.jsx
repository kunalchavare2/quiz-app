import React, { useEffect, useState } from "react";
import { TopicsGridStyle, TopicsStyle, TopicWrapper } from "./Topics.styled";
import Axios from "axios";
import { QUIZ_TOPICS_URL } from "../../../utils/constant/url-const";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import Topic from "../../Atoms/Topic/Topic";
import { useNavigate } from "react-router-dom";

const Topics = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    if (status.data.length === 0) {
      Axios.get(QUIZ_TOPICS_URL)
        .then((response) => {
   
          if (response.status === 200) {
            const parsedData = JSON.parse(JSON.stringify(response.data));

            setStatus({
              loading: false,
              data: parsedData,
              error: null,
            });
          }
        })
        .catch((err) => {
          setStatus({
            loading: false,
            data: [],
            error: err.message,
          });
        });
    }
  }, [status.data.length]);

  if (status.loading) {
    return (
      <TopicWrapper>
        <LoadingImg />
      </TopicWrapper>
    );
  }

  if (status.error) {
    return <TopicWrapper>{status.error}</TopicWrapper>;
  }

  const handleClick = (topic) => {
    navigate("/home/quiz?topicId=" + topic.id, { state: topic });
  };

  return (
    <TopicsStyle>
      <TopicsGridStyle>
        {status.data.map((topic) => (
          <Topic title={topic.name} onClick={() => handleClick(topic)} />
        ))}
      </TopicsGridStyle>
    </TopicsStyle>
  );
};

export default Topics;
