// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(start, destination) {
  var block = Math.abs(start - destination) * 264;
  switch (true) {
    case block <= 400:
      return 0;
      break;
    case block < 2000 && block > 400:
      return (block - 400) * 0.02;
      break;
    case block > 2000 && block < 2500:
      return 25;
      break;
    case block > 2500:
      return "cannot travel that far";
  }
}
