const BRACES_PATTERN = new RegExp(
  /^(1\ ?)?((\([1-9][0-9]{2}\))\ ?([0-9]{3})[\-]([0-9]{4}))$/g
);
const OTHER_PATTERN = new RegExp(
  /^(1\ ?)?([1-9][0-9]{2})(\ ?)(\-?)([0-9]{3})(\ ?)(\-?)([0-9]{4})$/g
);

const telephoneCheck = (telephoneNumberString) => {
  return (
    BRACES_PATTERN.test(telephoneNumberString) ||
    OTHER_PATTERN.test(telephoneNumberString)
  );
};

export { telephoneCheck };
