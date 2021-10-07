import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/quiz');
  }
  return (
    <Button onClick={handleClick} type="primary">
      게임시작!
    </Button>
  );
};

export { Home };
