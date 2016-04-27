/**
 * Adds up all the given values.
 *
 * @param {number[]} nums The numbers
 */
export default (...nums) => {

  let result = 0

  for (let i = 0; i < nums.length; i++) {

    result += nums[i]

  }

  return result

}
