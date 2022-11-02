const str = process.argv[3];

const isPalindrome = (str) => {
  return str.split(" ").reverse().join(" ") === str;
};

console.log(isPalindrome(str));
