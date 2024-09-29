export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function divide(a: number, b: number): Promise<number> {
  return Promise.resolve(a / b);
}
