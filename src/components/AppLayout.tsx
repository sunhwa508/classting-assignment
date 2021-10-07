import { Layout } from 'antd';
import { Header } from './Header';
interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { Footer, Content } = Layout;
  return (
    <Layout style={{ height: '100vh', alignItems: 'center' }}>
      <Header />
      <Content style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export { AppLayout };
