import { useState } from 'react';
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
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleAnswer(e);
    const eventTarget = e.target as HTMLElement;
    console.log(eventTarget.innerText, e.currentTarget.innerText);
    if (eventTarget.innerText === e.currentTarget.innerText) {
    }
  };

  return (
    <Card style={{ backgroundColor: 'transparent', border: 'none', height: 400 }}>
      {incorrect.concat(correct).map((item, index) => (
        <Card
          id={index.toString()}
          style={{ backgroundColor: ColorPalette[index] }}
          hoverable
          onClick={(e) => handleClick(e)}
        >
          {ConvertQuestion(item)}
        </Card>
      ))}
    </Card>
  );
};

export { AnswerBoard };
