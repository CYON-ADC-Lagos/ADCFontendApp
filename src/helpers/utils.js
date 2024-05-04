//TO TRIM SPACES AND CHECK IF AN INPUT FIELD IS EMPTY
export const isEmpty = (text) => {
  if (text.trim() === "") return true;
  else return false;
};

export const toSentenceCase = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
export const toCapitalize = (string) =>
  string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export const isValidEmail = (email) => {
  // Regular expression pattern for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
  // Regular expression pattern for validating phone numbers
  const phoneRegex = /^\d{10}$/; // Assumes 10 digits format
  return phoneRegex.test(phoneNumber);
};
