import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';

const Home = () => {
  let history = useHistory();
  const [isWait, setIsWait] = useState(false);
  const [counter, setCounter] = useState(2);
  const { Title } = Typography;
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
        justifyContent: 'center',
      }}
    >
      <Title>선생님, 저랑 게임 하나 하시겠습니까?</Title>

      <Button
        disabled={isWait}
        onClick={handleClick}
        style={{ width: '300px', height: '100px', borderRadius: 10, fontSize: '2rem' }}
      >
        {!isWait ? '수락하기 🎮' : counter}
      </Button>
    </Layout>
  );
};

export { Home };
