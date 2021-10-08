import { useEffect, useState } from 'react';
import { Skeleton, Button } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { QuizTypes } from '../shared/types';
import { Doughnut } from 'react-chartjs-2';
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
  const { data, score } = location.state;
  let history = useHistory();

  const chartData = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: '정답률',
        data: [score, data.results.length - score],
        backgroundColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const handleRestart = () => {
    history.push('/quiz');
  };
  return (
    <>
      {isLoading ? (
        <Skeleton loading={isLoading} avatar active></Skeleton>
      ) : (
        <>
          <Doughnut data={chartData} />
          <Button onClick={handleRestart} style={{ borderRadius: 10, fontSize: '1rem' }}>
            다시풀기
          </Button>
        </>
      )}
    </>
  );
};

export { ResultBoard };
