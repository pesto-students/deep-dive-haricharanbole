const rot13 = (cipheredText) => {
  if (!isString(cipheredText)) {
    throw new Error(
      "Invalid Input Received. Exprected String. But, received " +
        typeof cipheredText
    );
  }
  let decipheredText = "";
  for (const character of cipheredText) {
    if (isCapitalAlphabet(character)) {
      decipheredText = decipheredText + getRotatedUpperCase(character);
    } else {
      decipheredText = decipheredText + character;
    }
  }
  return decipheredText;
};

const isString = (input) => {
  return typeof input === "string";
};

const isCapitalAlphabet = (character) => {
  return !(character == character.toLowerCase());
};

const getRotatedUpperCase = (character) => {
  const charCode = character.charCodeAt(0);
  if (charCode + 13 > 90) {
    return String.fromCharCode(64 + (charCode + 13 - 90));
  } else {
    return String.fromCharCode(charCode + 13);
  }
};

export { rot13 };
