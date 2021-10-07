import { Typography } from 'antd';

interface Props {
  currentStage: number;
  question: string;
  category: string;
}
const QuestionBoard = ({ currentStage, question, category }: Props) => {
  const { Title } = Typography;
  return (
    <Title style={{ maxWidth: '500px' }} level={3}>
      {question}
    </Title>
  );
};

export { QuestionBoard };
