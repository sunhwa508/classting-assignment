import { useState, useEffect } from 'react';
import { AnswerBoard } from './AnswerBoard';
import { Header } from './Header';
import { QuestionBoard } from './QuestionBoard';
import axios from 'axios';
import { QuizTypes } from '../shared/types';
import { Button } from 'antd';
const DashBoard = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [data, setData] = useState<QuizTypes>();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://opentdb.com/api.php?amount=10',
      responseType: 'stream',
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data, currentStage);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleScore = (e: React.MouseEvent<HTMLElement>) => {
    const eventTarget = e.target as HTMLElement;
    console.log(eventTarget.innerText);
  };
  return (
    <>
      <QuestionBoard
        currentStage={currentStage}
        question={data?.results[currentStage].question || ''}
        category={data?.results[currentStage].category || ''}
      />
      <AnswerBoard
        currentStage={currentStage}
        correct={data?.results[currentStage].correct_answer || ''}
        incorrect={data?.results[currentStage].incorrect_answers || []}
        type={data?.results[currentStage].type}
        handleScore={handleScore}
      />
      <Button
        size={'large'}
        type="primary"
        shape="round"
        onClick={() => setCurrentStage((prev) => prev + 1)}
      >
        다음문제
      </Button>
    </>
  );
};

export { DashBoard };
