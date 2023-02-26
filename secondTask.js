export default class Calculator {
  static add(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
  }

  static subtract(a, b) {
    return (BigInt(a) - BigInt(b)).toString();
  }

  static multiply(a, b) {
    return (BigInt(a) * BigInt(b)).toString();
  }

  static divide(a, b) {
    return (BigInt(a) / BigInt(b)).toString();
  }
}