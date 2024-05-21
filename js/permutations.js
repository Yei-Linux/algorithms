function solve(permutationArr, nums, result, wasValidatedArray) {
  if (permutationArr.length === nums.length) {
    result.push([...permutationArr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!wasValidatedArray[i]) {
      permutationArr.push(nums[i]);
      wasValidatedArray[i] = true;
      solve(permutationArr, nums, result, wasValidatedArray);
      permutationArr.pop();
      wasValidatedArray[i] = false;
    }
  }
}

/**
 * [1,2]
 *
 * [1] , [1,2] : [1,2]
 * [2] , [2,1] [2,1]
 *
 *
 * [1,2,3]
 * [1] , [1,2] , [1,2,3] : [1,2,3]
 * [1] , [1,3] , [1,3,2] [1,3,2]
 * ... [2,1,3]
 * ... [2,3,1]
 * ... [3,1,2]
 * ... [3,2,1]
 * @param {*} nums
 */
function permutations(nums) {
  const permutationArr = [];
  const result = [];
  const wasValidatedArray = Array(nums.length).fill(false);
  solve(permutationArr, nums, result, wasValidatedArray);

  return result;
}

module.exports = { permutations };
