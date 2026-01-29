import {
  sumOfArray,
  reverseString,
  isPalindrome,
  purgeDuplicates,
} from "./functions.js";

function test(description, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${pass ? "✅ PASS" : "❌ FAIL"} - ${description}`);
  if (!pass) {
    console.log("   Expected:", expected);
    console.log("   Received:", actual);
  }
}

/* --------------------
     sumOfArray tests
  -------------------- */
test("sumOfArray with normal numbers", sumOfArray([1, 2, 3]), 6);
test("sumOfArray with negatives", sumOfArray([-1, -2, -3]), -6);
test("sumOfArray with empty array", sumOfArray([]), 0);
test("sumOfArray with non-number", sumOfArray([1, "a", 3]), null);
test("sumOfArray with non-array", sumOfArray("123"), null);

/* --------------------
     reverseString tests
  -------------------- */
test("reverse normal string", reverseString("hello"), "olleh");
test("reverse single character", reverseString("a"), "a");
test("reverse empty string", reverseString(""), "");
test("reverse number input", reverseString(123), null);

/* --------------------
     isPalindrome tests
  -------------------- */
test("palindrome simple word", isPalindrome("racecar"), true);
test("palindrome mixed case", isPalindrome("RaceCar"), true);
test(
  "palindrome with spaces",
  isPalindrome("A man a plan a canal Panama"),
  true
);
test("not a palindrome", isPalindrome("hello"), false);
test("palindrome non-string input", isPalindrome(101), null);

/* --------------------
     purgeDuplicates tests
  -------------------- */
test(
  "remove duplicates from numbers",
  purgeDuplicates([1, 2, 2, 3, 3]),
  [1, 2, 3]
);

test("remove duplicates from strings", purgeDuplicates(["a", "b", "a", "c"]), [
  "a",
  "b",
  "c",
]);

test("empty array", purgeDuplicates([]), []);

test("non-array input", purgeDuplicates("abc"), null);
