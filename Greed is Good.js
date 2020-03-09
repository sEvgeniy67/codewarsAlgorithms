//My solution

function score(dice) {
  var myScore = 0,
    countDice = {};
  for (i = 0; i < dice.length; i++) {
    if (countDice[dice[i]] == undefined) {
      countDice[dice[i]] = 0;
    }
    countDice[dice[i]]++;
  }
  if (countDice["6"] >= 3) {
    myScore += 600;
  }
  if (countDice["4"] >= 3) {
    myScore += 400;
  }
  if (countDice["3"] >= 3) {
    myScore += 300;
  }
  if (countDice["2"] >= 3) {
    myScore += 200;
  }
  switch (countDice["5"]) {
    case 5:
      myScore += 600;
      break;
    case 4:
      myScore += 550;
      break;
    case 3:
      myScore += 500;
      break;
    case 2:
      myScore += 100;
      break;
    case 1:
      myScore += 50;
      break;
  }
  switch (countDice["1"]) {
    case 5:
      myScore += 1200;
      break;
    case 4:
      myScore += 1100;
      break;
    case 3:
      myScore += 1000;
      break;
    case 2:
      myScore += 200;
      break;
    case 1:
      myScore += 100;
      break;
  }
  return myScore;
}

// Much better

function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}

//or

function score( dice ) {
  var v = {
    111: 1000,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    1: 100,
    5: 50
  };
  
  var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
  return s.reduce(function (a, e) {
    return a + v[e];
  }, 0);
}
