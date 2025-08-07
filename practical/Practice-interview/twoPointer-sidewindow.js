// ✅ Problem: Longest Substring Without Repeating Characters

const longestStringRepetitiveStr = (str) => {
  let seen = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

console.log(longestStringRepetitiveStr("abcabcbb"));
