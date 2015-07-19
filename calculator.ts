class CalculatorModule {
  constructor(private _memory: number, private _total: number) {
  }
  // validate(fn: (n: number) => (number)) {
  //   return function (x: number) {
  //     if (typeof x !== "number") {
  //       return "error";
  //     }
  //     return fn(x);
  //   }
  // }
  load(value: number) {
    return this._total = value;
  }
  get total() {
    return this._total;
  }
  add(value: number) {
    return this._total += value;
  }
  subtract(value: number) {
    return this._total -= value;
  }
  multiply(value: number) {
    return this._total *= value;
  }
  divide(value: number) {
    return this._total /= value;
  }
  recall(total) {
    return this._total = this._memory;
  }
  save() {
    return this._memory = this._total;
  }
  clear() {
    return this._memory = 0;
  }
}
