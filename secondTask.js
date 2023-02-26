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

console.log(Calculator.add(89476546456834756834456534456847645473446753688546846465748768876768794955456679568797567889, 2));