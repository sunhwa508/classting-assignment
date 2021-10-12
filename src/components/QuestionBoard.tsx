import React from 'react';
import { Typography, Alert, Tag, Row, Col } from 'antd';
import { ConvertQuestion, DIFFICULTY_LEVEL } from '../shared';
interface Props {
  currentStage: number;
  question: string;
  category: string;
  difficulty: string;
}

const QuestionBoard = ({ question, category, currentStage, difficulty }: Props) => {
  const { Title } = Typography;
  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <Alert
          message={category}
          type="info"
          style={{ border: 'none', backgroundColor: '#e1eef5' }}
        />
      </Col>
      <Col span={18}>
        <Title level={3} style={{ marginTop: 10 }}>
          Q{currentStage + 1}. {ConvertQuestion(question)}
        </Title>
        <Tag color={DIFFICULTY_LEVEL[difficulty]}>{difficulty}</Tag>
      </Col>
    </Row>
  );
};

export { QuestionBoard };
