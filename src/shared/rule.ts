/**
 * 입력한 문제중 태그로 인식되는 것들은 문자로 변환
 * @param str 문자열
 */
export const ConvertQuestion = (str: string): string => {
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'");
  str = str.replace(/&eacute;/g, 'é');
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&nbsp;/g, ' ');
  return str;
};
