/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  let result = 1;
    for (let i = 0; i < n; i++) {
      result = result * (n - i);
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));