import { useEffect, useState } from 'react';
import { Skeleton, Result, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { QuizTypes } from '../shared/types';

interface LocationState {
  from: {
    pathname: string;
  };
  data: QuizTypes;
  score: number;
}

const ResultBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation<LocationState>();
  const { Title } = Typography;
  const { data, score } = location.state;

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      <Skeleton loading={isLoading} avatar active></Skeleton>
      <Result
        status="success"
        title="과연 점수는?!"
        subTitle="정답수와 오답수를 공개합니다! "
        extra={[
          <Title style={{ textAlign: 'center' }} level={2}>
            {score}
          </Title>,
          <Title style={{ textAlign: 'center' }} level={2}>
            {data.results.length - score}
          </Title>,
        ]}
      />
    </>
  );
};

export { ResultBoard };
