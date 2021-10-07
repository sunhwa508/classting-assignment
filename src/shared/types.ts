export interface QuizDataTypes {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}
export interface QuizTypes {
  response_code: number;
  results: Array<QuizDataTypes>;
}
