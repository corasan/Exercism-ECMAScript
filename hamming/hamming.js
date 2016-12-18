export default class Hamming {
  compute(strandA, strandB) {
    return countDiff(strandA, strandB);
  }
}

const zip = (array, zipArray) => {
  let zippedArray = [];

  for(let i = 0; i < array.length; i++) {
    zippedArray.push([array[i], zipArray[i]]);
  }

  return zippedArray;
}

const countDiff = (a, b) => {
  let array = zip(a, b);
  let diff = 0;

  for(let i = 0; i < array.length; i++) {
    diff = array[i][0] !== array[i][1] ? diff += 1 : diff;
  }

  return diff;
}

function Error(message) {
  this.message = message;
}
