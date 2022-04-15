// Function doSort(int a, int b, int c). Output them in ascending order


const doSort = (a, b, c) => {
  if (a <= b && a <= c) { // if a is the smallest one
    if (b <= c) {         // and if b is less then c: a < b < c
      console.log(a, b, c)
    } else {                // otherwise c is less then b: a < c < b
      console.log(a, c, b)
    }
  } else if (b <= a && b <= c) { // b is the smallest
    if (a <= c) {                // if a is less then c: b < a < c
      console.log(b, a, c)
    } else {
      console.log(b, c, a)        // otherwise check if c is less the a
    }
  } else {                         // last case to check if c is smallest
    if (a <= b) {                 // if a is les then b: c < a < b
      console.log(c, a, b)
    } else {
      console.log(c, b, a)        // otherwise print c < b < a
    }
  }
}

doSort(3, 2, 1);
// 1, 2, 3
