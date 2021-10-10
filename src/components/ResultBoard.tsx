import { Button, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { STORAGE_KEY_NAMES } from '../shared/constants';
import { storagePropsManager } from '../shared/storageManager';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

const ResultBoard = () => {
  const [record, setRecord] = useState();

  useEffect(() => {
    setRecord(storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RECORD));
  }, [record]);

  let history = useHistory();

  const chartData = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: '정답률',
        data: [
          storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RESULT_DATA).score,
          storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RESULT_DATA).data.results.length -
            storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RESULT_DATA).score,
        ],
        backgroundColor: ['#6ce07a', '#ec6441'],
        borderWidth: 0,
      },
    ],
  };

  const handlePush = (to: string) => {
    history.push(`/${to}`);
  };
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={18}>
          <Doughnut
            data={chartData}
            style={{ height: '400px' }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Col>
        <Col span={6}>
          <Button
            onClick={() => handlePush('wrongAnswer')}
            style={{ borderRadius: 10, fontSize: '1rem' }}
          >
            오답노트
          </Button>
          <br />
          <Button onClick={() => handlePush('quiz')} style={{ borderRadius: 10, fontSize: '1rem' }}>
            다시풀기
          </Button>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col>걸린시간{record}</Col>
      </Row>
    </>
  );
};

export { ResultBoard };
