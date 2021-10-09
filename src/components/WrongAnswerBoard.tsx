import { useState, useEffect } from 'react';
import { storagePropsManager } from '../shared/storageManager';
import { STORAGE_KEY_NAMES } from '../shared/constants';
import { Table, Row, Col } from 'antd';
import { ConvertQuestion } from '../shared/rule';
import { HomeOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

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
    <Row justify="end">
      <Col>
        <HomeOutlined
          onClick={() => history.push('/result')}
          style={{ fontSize: '20px', padding: 10 }}
        />
      </Col>
      <Table columns={columns} dataSource={wrongAnswers} />
    </Row>
  );
};

export { WrongAnswerBoard };
