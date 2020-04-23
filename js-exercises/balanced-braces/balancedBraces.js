const openBracketsArray = ["(", "[", "{"];
const closedBracketsArray = [")", "]", "}"];

function isBracketCharacter(character) {
  return (
    openBracketsArray.includes(character) ||
    closedBracketsArray.includes(character)
  );
}

function lastOf(array) {
  return array[Math.max(array.length - 1, 0)];
}

function isOpenBracket(character) {
  return openBracketsArray.includes(character);
}

function isClosedBracket(character) {
  return closedBracketsArray.includes(character);
}

function closedBracketOf(character) {
  switch (character) {
    case "(":
      return ")";
    case "[":
      return "]";
    case "{":
      return "}";
  }
}

function balancedBraces(expression) {
  const expressionArray = [...expression];
  const bracketsArray = [];
  let openBracketsCount = 0;
  let closedBracketsCount = 0;
  let validCloseBracketStack = [];
  let isBalanced = true;
  expressionArray.map((element) => {
    if (isBracketCharacter(element)) {
      bracketsArray.push(element);
    }
    if (openBracketsArray.includes(element)) openBracketsCount++;
    if (closedBracketsArray.includes(element)) closedBracketsCount++;
  });
  bracketsArray.map((element) => {
    if (isOpenBracket(element)) {
      validCloseBracketStack.push(closedBracketOf(element));
    }
    if (isClosedBracket(element)) {
      if (lastOf(validCloseBracketStack) === element) {
        validCloseBracketStack.pop();
      } else {
        isBalanced = false;
      }
    }
  });

  if (openBracketsCount !== closedBracketsCount) isBalanced = false;
  return isBalanced;
}

export { balancedBraces };
