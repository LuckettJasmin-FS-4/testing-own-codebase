# Testing Your Own Codebase

## Assignment Overview

This project was created for the **Testing Your Own Codebase** assignment.  
The goal of this assignment is to implement multiple JavaScript utility functions and write functional tests to verify correct behavior across a wide range of inputs, including edge cases and invalid data.

The project emphasizes:

- Defensive programming
- Input validation
- Functional testing
- Code readability and organization

---

## Implemented Functions

### 1. `sumOfArray(arr)`

- Accepts an array of numbers
- Returns the sum of all elements
- Returns `null` for invalid input

### 2. `reverseString(str)`

- Accepts a string
- Returns the reversed string
- Returns `null` for non-string input

### 3. `isPalindrome(str)`

- Checks whether a string reads the same forwards and backwards
- Ignores case, spaces, and special characters
- Returns `null` for invalid input

### 4. `purgeDuplicates(arr)`

- Accepts an array of values
- Returns a new array with duplicate values removed
- Preserves original order
- Returns `null` for invalid input

---

## Functional Testing

Each function includes multiple functional tests covering:

- Normal inputs
- Edge cases
- Empty values
- Invalid or unexpected input types

Test results are logged to the browser console using custom test assertions.

---

## How to Run the Tests

1. Open `index.html` in a web browser
2. Open the browser’s **Developer Console**
3. Review PASS/FAIL results for each test case

---

## Project Structure

```txt
├── index.html
├── functions.js
├── tests.js
└── README.md
```
