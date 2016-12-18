export default class Hamming {
  compute(a, b) {
    if(a.length !== b.length) throw new Error('DNA strands must be of equal length.');
    let diff = 0;

    for(let i = 0; i < a.length; i++) {
      diff = (a[i] !== b[i]) ? diff += 1 : diff;
    }

    return diff;
  }
}
