import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_subtract = calc.subtract(3, 2);
const result_multiply = calc.multiply(3, 2);
console.log(`result_add = ${result_add}`);
console.log(`result_subtract = ${result_subtract}`);
console.log(`result_multiply = ${result_multiply}`);

const result_divide = calc.divide(2, 3);
console.log(`result_divide = ${result_divide}`);
console.log('done.')

const result_hello = calc.hello();
console.log(`result_hello = ${result_hello}`);
