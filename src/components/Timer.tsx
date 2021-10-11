import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Typography } from 'antd';
import { STORAGE_KEY_NAMES } from '../shared/constants';
import { storagePropsManager } from '../shared/storageManager';
const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { Title } = Typography;

  const record: React.MutableRefObject<any> = useRef();
  record.current = timeElapsed;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 1000);
    }, 1000);
    return () => {
      storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RECORD, record.current / 1000);
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Row>
        <Col>
          <Title level={5}>시작한지 {Math.floor(timeElapsed / 1000)} 초가 지났습니다.</Title>
        </Col>
      </Row>
    </>
  );
};

export { Timer };
