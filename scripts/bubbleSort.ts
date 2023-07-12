function bubbleSort(nums: number[]) {
  const n = nums.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}
