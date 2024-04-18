//TO TRIM SPACES AND CHECK IF AN INPUT FIELD IS EMPTY
export const isEmpty = (text) => {
  if (text.trim() === "") return true;
  else return false;
};

export const toSentenceCase = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
export const toCapitalize = (string) =>
  string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
