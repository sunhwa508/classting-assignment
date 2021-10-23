import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Skeleton, Row, Col, Card, Modal } from 'antd';
import axios from 'axios';

import { AnswerBoard } from './AnswerBoard';
import { QuestionBoard } from './QuestionBoard';
import { Timer } from './Timer';
import { globalEnv } from '../config/env';
import { QuizTypes, QuizDataTypes } from '../shared/types';
import { storagePropsManager, STORAGE_KEY_NAMES } from '../shared';

const DashBoard = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [data, setData] = useState<QuizTypes>();
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wrongAnswers, setWrongAnswer] = useState<QuizDataTypes[]>(
    storagePropsManager.getItemProps(STORAGE_KEY_NAMES.WRONG_ANSWERS) || []
  );
  const { Title } = Typography;
  let history = useHistory();

  useEffect(() => {
    axios({
      method: 'get',
      url: globalEnv.API_ENDPOINT,
    })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAnswer = (e: React.MouseEvent<HTMLElement>) => {
    const eventTarget = e.target as HTMLElement;
    setAnswer(eventTarget.innerText);
    setIsSelected(true);
  };

  const saveMyAnswer = (answer?: string) => {
    const yourAnswer = { your_answer: answer || 'SKIP' };
    const withMyAnswer = Object.assign(data?.results[currentStage]!, yourAnswer);
    setWrongAnswer([...wrongAnswers, data?.results[currentStage]!]);
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.WRONG_ANSWERS, [
      ...wrongAnswers,
      withMyAnswer,
    ]);
  };

  const handleScore = (hasScore: boolean) => {
    if (currentStage === 9) {
      history.push(`/result`);
      storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RESULT_DATA, { data, score });
    }

    if (hasScore) {
      if (answer === data?.results[currentStage].correct_answer) {
        setScore((prev) => prev + 1);
        info();
      } else {
        saveMyAnswer(answer);
        info();
      }
    } else {
      saveMyAnswer();
    }

    setCurrentStage((prev) => prev + 1);
    setIsSelected(false);
  };

  const info = () => {
    answer === data?.results[currentStage].correct_answer
      ? Modal.success({
          title: '맞았습니다',
          onOk() {},
        })
      : Modal.error({
          title: '틀렸습니다.',
          onOk() {},
        });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton loading={isLoading} avatar active></Skeleton>
      ) : (
        <>
          <Title level={5}>Current Score {score}</Title>
          <Card style={{ backgroundColor: '#fff', marginBottom: 20, borderRadius: 20 }}>
            <QuestionBoard
              currentStage={currentStage}
              question={data?.results[currentStage].question || ''}
              category={data?.results[currentStage].category || ''}
              difficulty={data?.results[currentStage].difficulty || ''}
            />
            <AnswerBoard
              currentStage={currentStage}
              correct={data?.results[currentStage].correct_answer || ''}
              incorrect={data?.results[currentStage].incorrect_answers || []}
              handleAnswer={handleAnswer}
            />
            <Row justify="center" align="middle">
              <Col>{currentStage !== 10 && <Timer />}</Col>
            </Row>
          </Card>
          <Col>
            <Button
              data-testid={'skip'}
              size={'large'}
              shape="round"
              onClick={() => handleScore(false)}
            >
              건너뛰기
            </Button>
            <Button
              disabled={!isSelected}
              size={'large'}
              shape="round"
              onClick={() => handleScore(true)}
            >
              다음문제
            </Button>
          </Col>
        </>
      )}
    </>
  );
};

export { DashBoard };
