export const maskingString = (str: string, degits: number): string => {
  if (!str) return "";
  const formatStr = str.slice(0, 4) + "..." + str.slice(str.length - degits);
  return formatStr;
};
