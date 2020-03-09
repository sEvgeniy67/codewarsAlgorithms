//My solution
function isValidWalk(walk) {
let nVal = walk.filter((n)=>(n==="n")).length;
let sVal = walk.filter((s)=>(s==="s")).length;
let eVal = walk.filter((e)=>(e==="e")).length;
let wVal = walk.filter((w)=>(w==="w")).length;
  if (walk.length ==10 && nVal===sVal && eVal===wVal ){return true}
else {return false}}


