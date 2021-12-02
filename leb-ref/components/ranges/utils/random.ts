const clamp = (inp: number, min: number, max: number) => inp > max ? max : inp < min ? min : inp;

export function getRandomNumber(min: number, max: number, isFloat: boolean) {
  if (isFloat) {
    const rand = min + Math.random() * (max + 1 - min);
    return clamp(rand, min, max + Number.MIN_VALUE);
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}