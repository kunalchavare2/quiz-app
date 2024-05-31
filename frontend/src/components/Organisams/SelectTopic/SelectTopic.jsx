import React, { useEffect, useState } from "react";
import {
  FormItemsWrapper,
  SelectTopicForm,
  SelectTopicWrapper,
  SelectWrapper,
} from "./SelectTopic.styled";
import { FormProvider, useForm } from "react-hook-form";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import {
  QUIZ_TOPICS_SUBMIT_URL,
  QUIZ_TOPICS_URL,
} from "../../../utils/constant/url-const";
import Axios from "axios";
import CheckBoxV2 from "../../Atoms/CheckBoxV2/CheckBoxV2";
import Button from "../../Atoms/Button/Button";
import { toast } from "react-toastify";
import {
  getHeaders,
  handleSubmitTopics,
} from "../../../utils/quiz-functions/quiz-functions";

const SelectTopic = () => {
  const methods = useForm();

  const [status, setStatus] = useState({
    loading: true,
    data: [],
    userData: {},
    error: null,
  });

  useEffect(() => {
    if (status.data.length === 0) {
      // fetching all topics from the server
      Axios.get(QUIZ_TOPICS_URL)
        .then((allTopics) => {
          // fetch users topics from the server
          Axios.get(QUIZ_TOPICS_SUBMIT_URL, {
            ...getHeaders(),
          })
            .then((response) => {
              console.log(allTopics);
              console.log(response);
              if (response.status === 200) {
                setStatus({
                  loading: false,
                  data: allTopics.data,
                  userData: response.data,
                  error: null,
                });
              }
            })
            .catch((error) => {
              throw new Error(error);
            });
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

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    let selectedTopicsIds = [];

    for (const key in data) {
      if (data[key]) {
        selectedTopicsIds.push(key);
      }
    }

    const selectTopicsArr = status.data.filter((t) =>
      selectedTopicsIds.includes(t["_id"])
    );

    handleSubmitTopics(selectTopicsArr)
      .then((data) => {
        toast.success("Topics Saved Successfully");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (status.loading) {
    return (
      <SelectWrapper>
        <LoadingImg />
      </SelectWrapper>
    );
  }

  if (status.error) {
    return <SelectWrapper>{status.error}</SelectWrapper>;
  }

  return (
    <SelectTopicWrapper>
      <FormProvider {...methods}>
        <SelectTopicForm noValidate onSubmit={(e) => e.preventDefault()}>
          <FormItemsWrapper>
            {status.data.map((topic) => {
              const defaultChecked =
                status.userData.length > 0 &&
                status.userData[0].topics.find(
                  (t) => t.topicId === topic["_id"]
                )
                  ? true
                  : false;

              return (
                <CheckBoxV2
                  key={topic.id}
                  label={topic.name}
                  field={topic["_id"]}
                  defaultChecked={defaultChecked}
                />
              );
            })}
          </FormItemsWrapper>
          <Button title="Submit" onClick={onSubmit} />
        </SelectTopicForm>
      </FormProvider>
    </SelectTopicWrapper>
  );
};

export default SelectTopic;
