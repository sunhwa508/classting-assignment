import { useEffect } from 'react';
import { AnswerBoard } from './AnswerBoard';
import { Header } from './Header';
import { QuestionBoard } from './QuestionBoard';
import axios from 'axios';

const DashBoard = () => {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://opentdb.com/api.php?amount=10',
      responseType: 'stream',
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header />
      <QuestionBoard />
      <AnswerBoard />
    </>
  );
};

export { DashBoard };
