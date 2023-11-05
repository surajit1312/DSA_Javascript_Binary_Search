console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode: 33. Search in Rotated Sorted Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~",
);

console.log(
  "Link: https://leetcode.com/problems/search-in-rotated-sorted-array/",
);
console.log("");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInSortedRotatedArray = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (nums[low] <= nums[mid]) {
      // left side of mid is sorted
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right side of mid is sorted
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

const nums1 = [4, 5, 6, 7, 0, 1, 2],
  target1 = 0;
const result1 = searchInSortedRotatedArray(nums1, target1);
console.log(`${target1} was found in [${nums1}] at index: ${result1}`);

const nums2 = [4, 5, 6, 7, 0, 1, 2],
  target2 = 3;
const result2 = searchInSortedRotatedArray(nums2, target2);
console.log(`${target2} was found in [${nums2}] at index: ${result2}`);

const nums3 = [3, 1],
  target3 = 1;
const result3 = searchInSortedRotatedArray(nums3, target3);
console.log(`${target3} was found in [${nums3}] at index: ${result3}`);
