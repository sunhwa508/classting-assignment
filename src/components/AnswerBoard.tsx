import { useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
interface Props {
  currentStage: number;
  correct: string;
  incorrect: Array<string>;
  type?: string;
  handleScore: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
interface StyleProps {
  width: string;
  textAlign: any;
}
const AnswerBoard = ({ handleScore, currentStage, correct, incorrect, type }: Props) => {
  return (
    <>
      {incorrect.concat(correct).map((item) => (
        <>
          {type === 'boolean' ? (
            <Row justify="center">
              <Col className="gutter-row" span={12}>
                <Card style={{ width: 'auto' }}>
                  {item === 'True' ? <CheckOutlined /> : <CloseOutlined />}
                </Card>
              </Col>
            </Row>
          ) : (
            <Row gutter={16} justify="center">
              <Col span={6}>
                <Card hoverable onClick={(e) => handleScore(e)}>
                  {item}
                </Card>
              </Col>
            </Row>
          )}
        </>
      ))}
    </>
  );
};

export { AnswerBoard };
