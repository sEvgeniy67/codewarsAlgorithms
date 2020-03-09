//My solution
var uniqueInOrder = function(iterable) {
  if (typeof iterable == "string") {
    var myArray = iterable.split("");
  } else {
    myArray = iterable;
  }
  var myResult = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== myArray[i - 1]) {
      myResult.push(myArray[i]);
    }
  }
  return myResult;
};

//Better one
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
