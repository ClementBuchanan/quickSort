function quickSort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;
  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quickSort(array, left, pivot - 1);
  }

  if (right > pivot) {
    quickSort(array, pivot, right)
  }
  return array;
}
function partitionHoare(array, left, right) {
  console.log(array, left, right)
  const pivot = Math.floor((left + right) / 2);
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}
module.exports = { quickSort, partitionHoare };

