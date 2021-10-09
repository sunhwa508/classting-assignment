import { useState } from 'react';
import { Card } from 'antd';
import { ColorPalette } from '../shared/types';
import { ConvertQuestion } from '../shared/rule';
import '../App.css';

interface Props {
  currentStage: number;
  correct: string;
  incorrect: Array<string>;
  type?: string;
  handleAnswer: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const AnswerBoard = ({ handleAnswer, correct, incorrect }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleAnswer(e);
    const eventTarget = e.target as HTMLElement;
    setSelectedAnswer(eventTarget.innerText);
  };

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
