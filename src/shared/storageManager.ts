/**
 * itemProps를 string 으로 변환
 * @param itemProps
 */
const convertItemProps = (itemProps: object) => JSON.stringify(itemProps);

/**
 * itemProps 를 Object 로 변환
 * @param itemProps
 */
const parseItemInfo = (itemProps: string) => JSON.parse(itemProps);

/**
 * storageKey의 itemProps 를 localStorage에 저장
 * @param storageKey itemProps
 */
const setItemProps = (storageKey: string, itemProps: any) => {
  const convertedItemsProps = convertItemProps(itemProps);
  localStorage.removeItem(storageKey);
  localStorage.setItem(storageKey, convertedItemsProps);
};

/**
 * localStorage에 저장된 값를 반환 하는 함수
 * @param storageKey
 */
const getItemProps = (storageKey: string) => {
  const selectedItem = localStorage.getItem(storageKey);
  if (selectedItem) {
    try {
      return parseItemInfo(selectedItem);
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
  return null;
};

export const storagePropsManager = {
  convertItemProps,
  parseItemInfo,
  setItemProps,
  getItemProps,
};
