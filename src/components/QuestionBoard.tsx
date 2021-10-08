import { Typography, Card } from 'antd';
import { ConvertQuestion } from '../shared/rule';

interface Props {
  currentStage: number;
  question: string;
  category: string;
}
const QuestionBoard = ({ question, category, currentStage }: Props) => {
  const { Title } = Typography;
  return (
    <Card style={{ height: 200, border: 'none', backgroundColor: 'transparent' }}>
      <Title level={3}>{category}</Title>
      <Title level={2}>
        Q{currentStage + 1}. {ConvertQuestion(question)}
      </Title>
    </Card>
  );
};

export { QuestionBoard };
