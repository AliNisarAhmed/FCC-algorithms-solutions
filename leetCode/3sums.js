// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum (nums) {
  let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i])
        for (let j = i + 1; j < nums.length; j++) {
            let elem1 = nums[i];
            let elem2 = nums[j];
            let target = 0 - elem1 - elem2;
            if (nums.slice(j + 1).includes(target)) {
                result.push([elem1, elem2, target].sort());    
            }
        }
    }
    return result;
}
