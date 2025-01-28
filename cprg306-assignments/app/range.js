export default function range() {
  let start=0, end=0, step=1;
  switch(arguments.length) {
    case 1:
      end = arguments[0];
      break;
    case 3:
      step = arguments[2];
    case 2:
      start = arguments[0];
      end = arguments[1];
      break;
    default:
      return [];
  }
  let n = Math.ceil((end - start) / step);
  return [...new Array(n).keys()].map(i => (i*step)+start);
}

// console.log(range(3));
// console.log(range(1, 3));
// console.log(range(1, 9, 3));
// console.log(range(5, 1, -2));
