//My solution
function validatePIN(pin) {
  let myPin = pin.match(/\d/g);
  if (myPin === null || undefined) {
    return false;
  } else {
    if (pin.length == myPin.length && (pin.length == 4 || pin.length == 6)) {
      return true;
    } else {
      return false;
    }
  }
}
//Better
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
