/**
 * Represents a single FizzBuzz rule.
 */
export type Rule = {
  divisor: number;
  word: string;
};

/**
 * Prints a custom FizzBuzz sequence based on the given rules.
 *
 * @param {number} n - The upper limit of the FizzBuzz sequence.
 * @param {Rule[]} rules - An array of rules defining words and their associated divisors.
 */
export function customFizzBuzz(n: number, rules: Rule[]): string[] {
  const output = [];

  for (let i = 1; i <= n; i++) {
    let line = '';

    rules.forEach((rule) => {
      if (i % rule.divisor === 0) {
        line += rule.word;
      }
    });

    if (line === '') {
      line = i.toString();
    }

    output.push(line);
  }

  return output;
}

const n: number = 210; // Replace with desired upper limit
const rules: Rule[] = [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Bizz" },
  // Add more rules here
];

customFizzBuzz(n, rules);
