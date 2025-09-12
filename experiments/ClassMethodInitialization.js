/**
 * Can you initialize a class and chain a method
 * without putting that class into a variable?
 * Yes!
 */
class ExampleClass {
  constructor() {
    this.num = Math.floor(Math.random() * 10) + 1;
  }

  getNum() {
    return this.num;
  }
}

// This successfully logs a number between 1 and 10
const init = () => new ExampleClass().getNum();
console.log(init());
