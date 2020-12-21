const a = [0,1,2,3,4,5,6,7,8,9];
const b = [0,1,2,3,4,5,6,7,8,9];
const c = [0,1,2,3,4,5,6,7,8,9];
const d = [0,1,2,3,4,5,6,7,8,9];

function rightLeft(array, num) {
  const slice = array.splice(num, array.length)
  return [ ...slice, ...array ];
}

function leftRight(array, num) {
  array.reverse();
  array.slice(num, array.length);
  const slice = array.splice(num, array.length)
  slice.reverse();  
  return [ ...array, ...slice ];
}

function shift(array, num) {
  if( num > array.length ) {
    return 'Valor maior que o intervalo';
  }
  if( num > 0 ) {
    return leftRight(array, num);
  }
  if( num < 0 ) {
    return rightLeft(array, Math.abs(num));
  }
}

console.log(shift(a,1));
console.log(shift(b,2));
console.log(shift(c,-1));
console.log(shift(d,-2));