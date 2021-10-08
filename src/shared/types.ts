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
export const ColorPalette = ['#fec5bb', '#fae1dd', '#e8e8e4', '#ece4db'];
