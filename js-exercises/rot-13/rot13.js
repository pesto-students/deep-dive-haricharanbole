function rot13(cipheredText) {
  if (!isString(cipheredText)) {
    throw new Error(
      "Invalid Input Received. Exprected String. But, received " +
        typeof cipheredText
    );
  }
  let decipheredText = "";
  for (const character of cipheredText) {
    if (isCapitalAlphabet(character)) {
      decipheredText = decipheredText.concat(getRotatedUpperCase(character));
    } else {
      decipheredText = decipheredText.concat(character);
    }
  }
  return decipheredText;
}

function isString(input) {
  return typeof input === "string";
}

function isCapitalAlphabet(character) {
  return !(character == character.toLowerCase());
}

function getRotatedUpperCase(character) {
  let charCode = character.charCodeAt(0);
  if (charCode + 13 > 90) {
    return String.fromCharCode(64 + (charCode + 13 - 90));
  } else {
    return String.fromCharCode(charCode + 13);
  }
}

export { rot13 };
