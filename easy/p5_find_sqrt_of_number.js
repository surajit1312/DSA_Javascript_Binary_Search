console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ Coding Ninjas: Square Root of a number ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log(
  "Link: https://www.codingninjas.com/studio/problems/square-root-integral_893351"
);
console.log("");

/**
 * TC: O(n)
 * @param {*} n
 * @returns
 */
const findSqrtNumber = function (n) {
  let low = 1,
    high = n;
  let sqrt = 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (mid * mid <= n) {
      if (sqrt < mid) {
        sqrt = mid;
      }
      low = mid + 1;
    } else if (mid * mid > n) {
      high = mid - 1;
    }
  }
  return sqrt;
};

const n1 = 10;
const sqrt1 = findSqrtNumber(10);
console.log(`Square root of ${n1} is : ${sqrt1}`);
