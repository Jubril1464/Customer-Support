
export const getFullYear = () => {
  return new Date().getFullYear();
};

export const splitCamelCase = (text: string, isTitleCase?: boolean) => {
  let result = text.replace(/([a-z])([A-Z])/g, "$1 $2");
  result = isTitleCase ? result[0].toUpperCase() + result.substring(1) : result;
  return result;
};
