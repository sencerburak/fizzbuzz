import { customFizzBuzz, Rule } from '../src/main';

describe('Custom FizzBuzz', () => {
  it('should print Fizz for multiples of 3 and Buzz for multiples of 5', () => {
    const rules: Rule[] = [
      { divisor: 3, word: 'Fizz' },
      { divisor: 5, word: 'Buzz' },
    ];

    const result = customFizzBuzz(15, rules);
    const expectedResult = [
      '1', '2', 'Fizz', '4', 'Buzz',
      'Fizz', '7', '8', 'Fizz', 'Buzz',
      '11', 'Fizz', '13', '14', 'FizzBuzz',
    ];

    console.log(result);

    expect(result).toEqual(expectedResult);
  });

  // Add more test cases here
});
