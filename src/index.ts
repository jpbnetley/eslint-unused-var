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
