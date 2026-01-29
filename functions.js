// sumOfArray(arr)
export function sumOfArray(arr) {
  if (!Array.isArray(arr)) return null;

  let sum = 0;

  for (let value of arr) {
    if (typeof value !== "number") return null;
    sum += value;
  }

  return sum;
}

// reverseString(str)
export function reverseString(str) {
  if (typeof str !== "string") return null;

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// isPalindrome(str)
export function isPalindrome(str) {
  if (typeof str !== "string") return null;

  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

// purgeDuplicates(arr)
export function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) return null;

  const unique = [];

  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}
