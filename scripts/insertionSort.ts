// Insertion sort can be good for
// data which we know is likely to
// almost be sorted already. In
// these cases it can even be better
// than merge and quick sort due to
// having a better worst case.
function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = numberToInsert;
  }
  return nums;
}