import { useState, useEffect } from 'react';
import { storagePropsManager } from '../shared/storageManager';
import { STORAGE_KEY_NAMES } from '../shared/constants';

const WrongAnswerBoard = () => {
  const [wrongAnswers, setWrongAnswers] = useState([]);
  console.log(wrongAnswers);
  useEffect(() => {
    setWrongAnswers(storagePropsManager.getItemProps(STORAGE_KEY_NAMES.WRONG_ANSWERS));
  }, []);
  return <>오답노트</>;
};

export { WrongAnswerBoard };
