import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
  let history = useHistory();
  const [isWait, setIsWait] = useState(false);
  const [counter, setCounter] = useState(3);

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
      setCounter(3);
    }
  }, [counter, isWait, history]);

  return (
    <Button
      disabled={isWait}
      shape="circle"
      onClick={handleClick}
      style={{ width: '300px', height: '300px', fontSize: '2rem' }}
    >
      {!isWait ? 'START' : counter}
    </Button>
  );
};

export { Home };
