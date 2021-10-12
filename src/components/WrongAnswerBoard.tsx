import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Table, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { storagePropsManager, STORAGE_KEY_NAMES, ConvertQuestion } from '../shared';

const WrongAnswerBoard = () => {
  let history = useHistory();
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    setWrongAnswers(storagePropsManager.getItemProps(STORAGE_KEY_NAMES.WRONG_ANSWERS));
  }, []);

  const columns = [
    {
      title: 'question',
      dataIndex: 'question',
      key: 'question',
      width: '60%',
      render: (text: string) => ConvertQuestion(text),
    },
    {
      title: 'correct answer',
      dataIndex: 'correct_answer',
      key: 'correct_answer',
      render: (text: string) => ConvertQuestion(text),
    },
    {
      title: 'your answer',
      dataIndex: 'your_answer',
      key: 'your_answer',
      render: (text: string) => ConvertQuestion(text),
    },
  ];

  return (
    <>
      <Row style={{ justifyContent: 'right' }}>
        <HomeOutlined
          onClick={() => history.push('/result')}
          style={{ fontSize: '20px', marginBottom: 10 }}
        />
      </Row>
      <Row>
        <Table columns={columns} dataSource={wrongAnswers} />
      </Row>
    </>
  );
};

export { WrongAnswerBoard };
