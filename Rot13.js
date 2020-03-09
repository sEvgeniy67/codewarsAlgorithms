//My Solution

function rot13(message) {
  var mySolution = "";
  for (var i = 0; i < message.length; i++) {
    var asciiNum = message[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      mySolution += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      mySolution += String.fromCharCode(asciiNum - 13);
    } else if (asciiNum >= 97 && asciiNum <= 109) {
      mySolution += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 110 && asciiNum <= 125) {
      mySolution += String.fromCharCode(asciiNum - 13);
    } else {
      mySolution += message[i];
    }
  }
  return mySolution;
}

//Smart
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
