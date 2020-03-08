//My solution
function humanReadable(seconds) {
  let minutes = 0;
  let hours = 0;
  let myResult;
  while (seconds >= 60) {
    seconds = seconds - 60;
    minutes++;
  }
  while (minutes >= 60) {
    minutes = minutes - 60;
    hours++;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  myResult = hours + ":" + minutes + ":" + seconds;
  return myResult;
}

//Better
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
