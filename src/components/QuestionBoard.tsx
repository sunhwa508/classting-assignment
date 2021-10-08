import { Typography } from 'antd';
import { ConvertQuestion } from '../shared/rule';

interface Props {
  currentStage: number;
  question: string;
  category: string;
}
const QuestionBoard = ({ question, category }: Props) => {
  const { Title } = Typography;
  return (
    <>
      <Title style={{ textAlign: 'center' }} level={5}>
        {category}
      </Title>
      <Title style={{ textAlign: 'center' }} level={3}>
        {ConvertQuestion(question)}
      </Title>
    </>
  );
};

export { QuestionBoard };
