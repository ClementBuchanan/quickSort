

const { quickSort, partitionHoare } = require('../index.js');
describe('should test quick sort arrays', () => {
  it('should test quickSort function', () => {
    let quickSortArray = [8, 4, 23, 42, 15, 16];

    expect(quickSort(quickSortArray)).toEqual([4, 8, 15, 16, 23, 42]);
    console.log(quickSortArray);
  });
  // it('should test partition function', () => {
  //   let partitionArray = [8, 4, 23, 42, 15, 16];
  //   expect(partitionHoare(partitionArray)).toEqual([4, 8, 15, 16, 23, 42]);
  //   console.log(partitionArray);
  // });
});