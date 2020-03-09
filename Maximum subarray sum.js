//My solution
var maxSequence = function(arr) {
  let maxCurrent;
  let maxGlobal;
  maxCurrent = maxGlobal = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    maxCurrent = Math.max(currentNum + maxCurrent, 0);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }
  return maxGlobal;
};
