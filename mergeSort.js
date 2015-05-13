
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right) {
	var i = 0;
	var j = 0;
	var result = [];
	while (i < left.length || j < right.length) {
		if (i === left.length){
			result.push(right[j]);
			j++;	
		}
		else if (j === right.length){
			result.push(left[i]);
			i++;	
		}
		else if (left[i] <= right[j]) {
			result.push(left[i]);
			i++;
		}
		else {
			result.push(right[j]);
			j++;
		}
	}
	return result;
}

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(array) {
	// Base case
	if (array.length < 2) {
		return array;
	}
	//Recursive step - Spilt the array, then calls the mergeSort function on each half. Once it gets its arguments fulfilled it returns/calls the merge function for the 2 sorted halfs. 
	var leftHalf = array.slice(0, Math.floor(array.length / 2));
	var rightHalf = array.slice(Math.floor(array.length / 2), array.length);
	var sortedLeftHalf = exports.mergeSort(leftHalf);
	var sortedRightHalf = exports.mergeSort(rightHalf);
	return exports.merge(sortedLeftHalf, sortedRightHalf);
}

