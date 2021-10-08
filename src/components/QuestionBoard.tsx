import { Typography, Card, Alert } from 'antd';
import { ConvertQuestion } from '../shared/rule';

interface Props {
  currentStage: number;
  question: string;
  category: string;
}
const QuestionBoard = ({ question, category, currentStage }: Props) => {
  const { Title } = Typography;
  return (
    <Card style={{ height: 'auto', border: 'none', backgroundColor: 'transparent' }}>
      <Alert
        message={category}
        type="info"
        style={{ border: 'none', backgroundColor: '#e1eef5' }}
      />
      <Title level={3} style={{ marginTop: 10 }}>
        Q{currentStage + 1}. {ConvertQuestion(question)}
      </Title>
    </Card>
  );
};

export { QuestionBoard };
