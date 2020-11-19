/* --- WITHOUT RECURSION --- */
function factorial(num) {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

/* --- WITH RECUSION --- */
function factorialR(num) { // recursion is simply the calling of a function inside it's own function
  if (num === 1) return 1; // base case (basically where do you stop)
  return num * factorialR(num -1); // recursive call itself
}

/* If you don't understand a recusion problem, trace it!
  5 * factorial(4) = 24 === 120
      4 * factorial(3) = 6
          3 * factorial(2) = 2
            2 * factorial(1) = 1
              num === 1 return 1 */

console.log(factorial(5)); // 120


/* Example 2 - summing all the numbers in an array */
/* --- WITHOUT RECURSION --- */
function sumList(arr) {
  let total = 0;
  for (let item of arr) {
    total += item;
  }
  return total;
}

/* --- WITH RECUSION --- */
function sumListR(arr) {
  // Tenzin says coming up with base cases initially was like rocket science so don't stress at first :D
  if (arr.length === 0) return 0;
  return arr[0] + sumListR(arr.slice(1));
}

console.log(sumListR([1,2,3])); // 6

/* Let's trace it:
    1 + sumListR([2,3]) = 5 === 6
      2 + sumListR([3]) = 3
        3 + sumListR([]) = 0
          0 */

/* Example 3 - sum all the digits in a number.  */
/* --- WITH RECURSION --- */
function addDigits(num) {
  if (num < 10) return num; // base case
  return num % 10 + addDigits(Math.floor(num / 10)); // 342 % 10 --> 2 and 342 / 10 --> .floor(34) 
}

console.log(addDigits(334)); // 10

/* Let's trace it:
    4 (num%10) + addDigits(33) = 6 === 10
      3 (num%10) + addDigits(3) = 3
        3 */

