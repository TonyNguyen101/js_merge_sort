var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
    expect(mergeSort.merge([10],[1])).toEqual([1,10]);
    expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  	expect(mergeSort.merge([3],[1])).toEqual([1,3]);
    expect(mergeSort.merge([20],[1])).toEqual([1,20]);
  });
});

describe('Merge', function() {
  it('should sort two arrays of size 2', function() {
  	expect(mergeSort.merge([1,2],[3,4])).toEqual([1,2,3,4]);
    expect(mergeSort.merge([1,2],[2,3])).toEqual([1,2,2,3]);
  });
});

describe('Merge', function() {
  it('should sort two arrays of size 3', function() {
     expect(mergeSort.merge([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
     expect(mergeSort.merge([1,2,3],[2,3,4])).toEqual([1,2,2,3,3,4]);
  });
});


describe('Merge', function() {
  it('should sort two arrays of different sizes', function() {
     expect(mergeSort.merge([1],[2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7]);
  });
});

describe('Merge Sort', function() {
  it('should sort an array', function() {
    expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
	expect(mergeSort.mergeSort([2,3,7,5,4,6,1])).toEqual([1,2,3,4,5,6,7]);
  });
});

