console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 704. Binary Search - Recursive ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("Link: https://leetcode.com/problems/binary-search/");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return getIndexBinarySearch(nums, target, 0, nums.length - 1);
};

var getIndexBinarySearch = function (nums, target, low, high) {
  if (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      return getIndexBinarySearch(nums, target, mid + 1, high);
    } else {
      return getIndexBinarySearch(nums, target, low, mid - 1);
    }
  }
  return -1;
};

const nums1 = [-1, 0, 3, 5, 9, 12],
  target1 = 9;
const output1 = search(nums1, target1);

console.log(`${target1} is present in the array ${nums1} at index: ${output1}`);

const nums2 = [-1, 0, 3, 5, 9, 12],
  target2 = 2;
const output2 = search(nums2, target2);

console.log(`${target2} is present in the array ${nums2} at index: ${output2}`);
