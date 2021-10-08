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
export const ColorPalette = ['#f0f5ff', '#f9f0ff', '#fff0f6', '#f6ffed'];
