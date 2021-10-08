import { useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { ColorPalette } from '../shared/types';
import '../App.css';
import { ConvertQuestion } from '../shared/rule';
interface Props {
  currentStage: number;
  correct: string;
  incorrect: Array<string>;
  type?: string;
  handleAnswer: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const AnswerBoard = ({ handleAnswer, currentStage, correct, incorrect, type }: Props) => {
  return (
    <>
      {incorrect.concat(correct).map((item, index) => (
        <Card
          style={{ backgroundColor: ColorPalette[index] }}
          hoverable
          onClick={(e) => handleAnswer(e)}
        >
          {ConvertQuestion(item)}
        </Card>
      ))}
    </>
  );
};

export { AnswerBoard };
