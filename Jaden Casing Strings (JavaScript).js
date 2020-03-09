//My solution
String.prototype.toJadenCase = function () {
return this.split(" ").map(function(w) {return w.charAt(0).toUpperCase() + w.slice(1)}).join(" ")
};
