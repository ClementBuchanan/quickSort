# quickSort

A Quick Sort use a divide and conquer approach based on chosing a pivot element from the array and partitioning around it where elements on the left side are less than the pivot element and elements on the right side are greter than the pivot element.

Different ways of performing a quick sort are:

- The last element is selected as the pivot (implemented below).
- The first element is selected as the pivot.
- The middle element is selected as the pivot.
- A random element is selected as the pivot.

## Stepping througha quick sort

1. In an array __'A'__ of length __‘N’__, take the last element as pivot.
1. Now let i be __(A[0] – 1)__ and __'j'__ be the '__A[N-1]'__.
1. To find the sorted position of the pivot, start incrementing __'i'__ till you find an element greater than the pivot. 
1. At the same time start decrementing __'j'__ till you find an element lesser than or equal to the pivot.
1. Swap the elements present at __'i'__ and __'j'__.
1. Repeat steps 3 and 4 until i has an element greater than __'j'__.
1. Swap the pivot with the element present at __'j'__.
1. Repeat the above steps for the left and right side of the pivot and you will have a sorted array at the end.