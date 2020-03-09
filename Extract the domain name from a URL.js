function domainName(url) {
  function replacer(match,p1,p2,p3) {
    return p3;
  }
  var myResult = url.replace(/(https?:\/{2})?(www.)?([\w-]+)(.*)/gi, replacer);
  return myResult;
}
