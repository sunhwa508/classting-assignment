import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Alert } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { STORAGE_KEY_NAMES } from '../shared/constants';
import { storagePropsManager } from '../shared/storageManager';

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
        backgroundColor: ['#87c28e', '#ff896c'],
        borderWidth: 0,
      },
    ],
  };

  const handlePush = (to: string) => {
    history.push(`/${to}`);
  };
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ backgroundColor: '#ffffff', borderRadius: 20, padding: 20 }}
      >
        <Alert
          message={`YOUR RECORD IS ${record} SECOND`}
          type="warning"
          style={{ marginBottom: 10 }}
        />
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
          <Col>
            <Button
              size={'large'}
              icon={<FileDoneOutlined />}
              className={'wrong-note'}
              onClick={() => handlePush('wrongAnswer')}
            >
              오답노트
            </Button>
          </Col>
        </Col>
      </Row>
      <Col>
        <Button
          onClick={() => handlePush('quiz')}
          size={'large'}
          style={{ fontSize: '1rem', margin: 20 }}
        >
          RESTART
        </Button>
      </Col>
    </>
  );
};

export { ResultBoard };
