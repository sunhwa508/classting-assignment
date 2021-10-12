import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { Header } from './Header';

const Home = () => {
  let history = useHistory();
  const [isWait, setIsWait] = useState(false);
  const [counter, setCounter] = useState(2);

  const handleClick = () => {
    setIsWait(true);
  };

  useEffect(() => {
    if (isWait && counter > 0) {
      setTimeout(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    } else if (counter === 0) {
      history.push('/quiz');
      setIsWait(false);
      setCounter(2);
    }
    return () => clearInterval();
  }, [counter, isWait, history]);

  return (
    <Layout
      style={{
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Header />
      <Button
        disabled={isWait}
        onClick={handleClick}
        style={{ width: '300px', height: '100px', borderRadius: 10, fontSize: '2rem' }}
      >
        {!isWait ? 'START' : counter}
      </Button>
    </Layout>
  );
};

export { Home };
