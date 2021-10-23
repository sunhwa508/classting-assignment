import React, { useState } from 'react';
import { Card } from 'antd';
import { ColorPalette, ConvertQuestion } from '../shared';
import '../App.css';
import { useEffect } from 'react';

interface Props {
  currentStage: number;
  correct: string;
  incorrect: Array<string>;
  handleAnswer: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const AnswerBoard = ({ currentStage, handleAnswer, correct, incorrect }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    handleAnswer(e);
    const eventTarget = e.target as HTMLElement;
    setSelectedAnswer(eventTarget.innerText);
  };

  useEffect(() => {
    setSelectedAnswer('');
  }, [currentStage]);

  return (
    <Card style={{ backgroundColor: 'transparent', border: 'none', height: 400 }}>
      {incorrect.concat(correct).map((item, index) => (
        <Card
          key={item + index}
          className={selectedAnswer === item ? 'highlight' : ''}
          id={index.toString()}
          style={{
            backgroundColor: ColorPalette[index],
            fontSize: '1rem',
          }}
          onClick={(e) => handleClick(e)}
        >
          {ConvertQuestion(item)}
        </Card>
      ))}
    </Card>
  );
};

export { AnswerBoard };
