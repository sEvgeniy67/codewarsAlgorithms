//My solution

function toCamelCase(str) {
  if (str == "") return "";
  var myResult = str
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  if (str[0] == str[0].toUpperCase()) {
    return myResult;
  } else {
    var anotherResult =
      myResult.charAt(0).toLowerCase() + myResult.substring(1);
    return anotherResult;
  }
}


//Better solution
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
