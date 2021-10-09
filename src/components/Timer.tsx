import { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { STORAGE_KEY_NAMES } from '../shared/constants';
import { storagePropsManager } from '../shared/storageManager';
const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  const record: React.MutableRefObject<any> = useRef();
  record.current = timeElapsed;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 30);
    }, 30);
    return () => {
      storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RECORD, record.current / 1000);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Row>
        <Col>{Math.floor(timeElapsed / 1000)}초</Col>
        <Col>{(timeElapsed % 1000) / 10}</Col>
      </Row>
    </>
  );
};

export { Timer };
