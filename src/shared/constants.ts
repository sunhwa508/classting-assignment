export const STORAGE_KEY_NAMES = {
  WRONG_ANSWERS: 'WRONG_ANSWERS',
  RECORD: 'RECORD',
};

type ObjType = {
  [index: string]: string;
  easy: string;
  medium: string;
  hard: string;
};

export const DIFFICULTY_LEVEL: ObjType = {
  easy: '#108ee9',
  medium: '#ED7117',
  hard: '#ff0000',
};
