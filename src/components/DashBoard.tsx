import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AnswerBoard } from './AnswerBoard';
import { QuestionBoard } from './QuestionBoard';
import { QuizTypes } from '../shared/types';
import { Button, Typography, Skeleton, Col, Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { globalEnv } from '../config/env';

const DashBoard = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [data, setData] = useState<QuizTypes>();
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { Title } = Typography;
  let history = useHistory();

  useEffect(() => {
    axios({
      method: 'get',
      url: globalEnv.API_ENDPOINT,
      responseType: 'stream',
    })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleAnswer = (e: React.MouseEvent<HTMLElement>) => {
    const eventTarget = e.target as HTMLElement;
    setAnswer(eventTarget.innerText);
    setIsSelected(true);
  };

  const handleScore = () => {
    if (currentStage === 9) {
      history.push({
        pathname: '/result',
        state: { data, score },
      });
      return;
    }
    if (answer === data?.results[currentStage].correct_answer) {
      console.log(answer, data?.results[currentStage].correct_answer);
      setScore((prev) => prev + 1);
    }
    setCurrentStage((prev) => prev + 1);
    setIsSelected(false);
  };

  const handleSkip = () => {
    setCurrentStage((prev) => prev + 1);
    setIsSelected(false);
    if (currentStage === 9) {
      history.push({
        pathname: '/result',
        state: { data, score },
      });
      return;
    }
  };

  return (
    <>
      {isLoading ? (
        <Skeleton loading={isLoading} avatar active></Skeleton>
      ) : (
        <>
          <Card style={{ backgroundColor: '#fff', marginBottom: 20, borderRadius: 20 }}>
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
              handleAnswer={handleAnswer}
            />
          </Card>
          <Col>
            <Button size={'large'} shape="round" onClick={handleSkip}>
              건너뛰기
            </Button>
            <Button disabled={!isSelected} size={'large'} shape="round" onClick={handleScore}>
              다음문제
            </Button>
          </Col>
          <Title
            level={3}
            style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}
          >
            Current Score {score} / {data?.results.length}
          </Title>
        </>
      )}
    </>
  );
};

export { DashBoard };
