# ESLint 10: `no-useless-assignment` Demonstration

This project demonstrates the ESLint 10 error:  
**"This assigned value is not used in subsequent statements"** (`no-useless-assignment`).

Use this repository to see how ESLint flags unused variable assignments and how to resolve them.

## Example

```js
let x = 5;
x = 10; // ESLint: This assigned value is not used in subsequent statements. (no-useless-assignment)
```

<image src='./assets/eslint-error.png' height='800px'>

## Usage

1. Clone this repository.
2. Install dependencies.
3. Run ESLint to view the error in action.

## Reference

- [ESLint Rule: no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment)
- [issue & comments](https://github.com/eslint/eslint/issues/20517)
