//String

const permutationCombinationStr = (str) => {
  if (str.length <= 0) return [""];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    const remaining = str.slice(0, i) + str.slice(i + 1);

    const innerPermutation = permutationCombinationStr(remaining);
    for (const perm of innerPermutation) {
      result.push(currentChar + perm);
    }
  }
  return result;
};

console.log(permutationCombinationStr("ABCH"));
