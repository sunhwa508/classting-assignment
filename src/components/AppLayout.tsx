import { Layout } from 'antd';
import { Header } from './Header';
interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { Footer, Content } = Layout;
  return (
    <Layout
      style={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Header />
      <Content style={{ width: '60%' }}>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export { AppLayout };
