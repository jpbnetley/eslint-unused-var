export function calculate(value: number): number | null {
  let info: number | null = null;
  try {
    if (value > 10) {
      info = value * 2;
    } else {
      throw new Error("Value must be greater than 10");
    }
  } catch (error) {
    console.error("Error occurred calculating value", { cause: error });
    info = null;
  }
  return info;
}

export function calculateWithSuggested(value: number): number | null {
  let info!: number | null; // Using definite assignment assertion to indicate that 'info' will be assigned before use: https://github.com/eslint/eslint/issues/20517#issuecomment-3925242960
  try {
    if (value > 10) {
      info = value * 2;
    } else {
      throw new Error("Value must be greater than 10");
    }
  } catch (error) {
    console.error("Error occurred calculating value", { cause: error });
    info = null;
  }
  return info;
}
