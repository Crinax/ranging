/**
 * Reworked floating point numbers addition operator.
 * @author [Eugen Gritz]
 * @link https://github.com/maycircle
 * @function add
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Number
 * @protected
 */
 function fixOperation(a: number, b: number, oper: string):number {
  let res = `${oper === '+' ? a + b : a * b}`;
  // Reliable absence of approximation error
  if (res.length < 16) return oper === '+' ? a + b : a * b;

  const sA = `${a}`;
  const sB = `${b}`;

  const fractionPos = res.indexOf('.');
  let exponentPos = res.lastIndexOf('e');

  const aFractionPos = sA.indexOf('.');
  let aExponentPos = sA.lastIndexOf('e');
  const bFractionPos = sB.indexOf('.');
  let bExponentPos = sB.lastIndexOf('e');

  // Obtain exponent power from result
  let exponent;
  if (exponentPos !== -1) {
    exponent = res.slice(exponentPos, res.length);
  } else {
    exponent = '';
  }

  if (exponentPos === -1) exponentPos = res.length;
  if (aExponentPos === -1) aExponentPos = sA.length;
  if (bExponentPos === -1) bExponentPos = sB.length;

  // The more numbers in decimal places the less fractional places
  if (exponentPos - fractionPos - 1 >= 17 - fractionPos
    && (aExponentPos - aFractionPos - 1 >= 16 - aFractionPos
    || bExponentPos - bFractionPos - 1 >= 16 - bFractionPos)) {
    return a + b;
  }
  if (exponentPos - fractionPos - 1 < 16 - fractionPos) return oper === '+' ? a + b : a * b;

  const fractionLength = res.length - res.indexOf('.') - 2;
  if (res[res.length - 2] === '9') {
    // Round up the last number (9) from result
    let exponetialForm: string = `${res}e${fractionLength}`;
    let ceiledNumber: number = Math.ceil(Number(exponetialForm));
    exponetialForm = `${ceiledNumber}e${-fractionLength}`;
    return +(+(exponetialForm) + exponent);
  }

  // Cut exponent power from result, calculate it's length
  res = res.slice(0, (sA.length > sB.length ? sA.length : sB.length) + 1);
  return +(res + exponent);
}
const add = (a: number, b: number): number => fixOperation(a, b, '+');
const product = (a: number, b: number): number => fixOperation(a, b, '*');

export { add, product }