// Plus One

const digits = [1, 2, 4, 5, 9];

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  let result = new Array(digits.length + 1).fill(0);
  result[0] = 1;
  return result;
};

console.log(plusOne(digits));

