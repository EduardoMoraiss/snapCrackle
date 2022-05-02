function snapCrackle(maxValue) {
  let str = "";
  for (i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      str = str + "snapCrackle, ";
    } else if (i % 2 !== 0) {
      str = str + "Snap, ";
    } else if (i % 5 === 0) {
      str = str + "Crackle, ";
    } else {
      str = str + `${i}, `;
    }
  }
  return str;
}
console.log(snapCrackle(10));

function snapCracklePrime(number) {
  let str = "";
  for (let i = 1; i <= number; i++) {
    let totali = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        totali += 1;
      }
    }
    if (i % 5 === 0 && i % 2 !== 0 && totali == 2) {
      str += "snapCracklePrime, ";
    } else if (totali == 2 && i % 2 !== 0) {
      str += "snapPrime, ";
    } else if (totali == 2) {
      str += "Prime, ";
    } else if (i % 5 === 0 && i % 2 !== 0) {
      str += "snapCrackle, ";
    } else if (i % 2 !== 0) {
      str += "snap, ";
    } else if (i % 5 === 0) {
      str += "Crackle, ";
    } else {
      str += `${i}, `;
    }
  }

  return str;
}
console.log(snapCracklePrime(10));
