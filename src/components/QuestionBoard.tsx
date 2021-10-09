import { Typography, Card, Alert, Tag } from 'antd';
import { ConvertQuestion } from '../shared/rule';
import { DIFFICULTY_LEVEL } from '../shared/constants';
interface Props {
  currentStage: number;
  question: string;
  category: string;
  difficulty: string;
}

const QuestionBoard = ({ question, category, currentStage, difficulty }: Props) => {
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
      <Tag color={DIFFICULTY_LEVEL[difficulty]}>{difficulty}</Tag>
    </Card>
  );
};

export { QuestionBoard };
