// Coding Drill 3: Evaluate Reverse Polish Notation (Stacks)

// Given an array of strings tokens representing an arithmetic expression in Reverse Polish Notation (RPN), evaluate the expression and return the integer result.

// Valid operators are "+", "-", "*", and "/".

// Division should truncate toward zero.

// evalRPN(["2", "1", "+", "3", "*"]); // 9
// // ((2 + 1) * 3)

// evalRPN(["4", "13", "5", "/", "+"]); // 6
// // (4 + (13 / 5))

// evalRPN([
//   "10", "6", "9", "3", "+", "-11", "*",
//   "/", "*", "17", "+", "5", "+"
// ]); // 22

// Time: O(n)
// Space: O(n)

// // Usage:
// const result = ops[token](left, right);

function evalRPN(tokens) {
  const stack = [];

  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const token of tokens) {
    if (ops[token]) {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(ops[token](left, right));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
