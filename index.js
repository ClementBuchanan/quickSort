

function quickSort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quickSort(array, pivot, right);
  }
  return array;
}

