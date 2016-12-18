const NUCLEOTIDES = {'A': 'U', 'C': 'G', 'G': 'C', 'T': 'A'};

export default class Transcriptor {
  toRna(dna) {
    validateDna(dna);

    let rna = dna.split('').map((nucleotide) => NUCLEOTIDES[nucleotide]).join('');

    return rna;
  }
}

const validateDna = (dna) => {
  if(/[^ACGT]/.test(dna)) throw new Error('Invalid input DNA.');
  
}
