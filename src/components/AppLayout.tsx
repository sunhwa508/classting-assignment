import React from 'react';
import { Layout } from 'antd';
import { Header } from './Header';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { Content } = Layout;
  return (
    <Layout
      style={{
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Header />
      <Content
        style={{
          width: '60vw',
          borderRadius: 10,
          position: 'relative',
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export { AppLayout };
