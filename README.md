# Custom FizzBuzz Project

This project implements a flexible and extensible version of the classic FizzBuzz programming problem. It is written in TypeScript and allows users to define their own rules for generating FizzBuzz-like sequences.

## Features

- Customizable FizzBuzz sequences
- Easily add or modify rules
- Written in TypeScript for type safety and easy integration with JavaScript projects

## Installation

1. Ensure that Node.js and npm (Node Package Manager) are installed on your system. You can download Node.js from https://nodejs.org/. npm comes bundled with Node.js.

2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sencerb88/fizzbuzz.git
   cd repo-name
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

## Usage
1. To add or modify rules, open the src/main.ts file and edit the rules array:
    ```typescript
    const rules: Rule[] = [
      { divisor: 3, word: "Fizz" },
      { divisor: 5, word: "Buzz" },
      { divisor: 7, word: "Bizz" },
      // Add more rules here
    ];
    ```

2. Update the upper limit of the sequence by changing the value of the n constant:
    ```typescript
    const n: number = 210; // Replace with desired upper limit
    ```

3. Compile the TypeScript code to JavaScript:
    ```bash
    npm run build
    ```
4. Run the TypeScript code:
    ```bash
    npm run start
    ```
    The custom FizzBuzz output will be displayed based on the rules and upper limit you have defined.

## Contributing
If you would like to contribute to this project, please feel free to submit a pull request or open an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.