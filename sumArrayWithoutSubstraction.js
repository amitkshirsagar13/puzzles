// Without subtraction operator, build an Array from input array
// where newArray[i] is addition of all elements except oldArray[i].

// Input : arr[] = { 3, 6, 4, 8, 9}
// Output: sum[] = { 27, 24, 26, 22, 21}

// Input: arr[] = { 4, 5, 7, 3, 10, 1}
// Output: sum[] = { 26, 25, 23, 27, 20, 29}


function getLeftSum(array) {
  let lsum = [];
  let size = array.length;
  while (size--) lsum.push(0);
  for (let i=1; i<array.length; i++) {
    lsum[i] = lsum[i - 1] + array[i - 1];
  }
  console.log(lsum);
  return lsum;
}

function getRightSum(array) {
  let rsum = [];
  let size = array.length;
  while (size--) rsum.push(0);
  for (let i = array.length-2; i > -1; i--) {
    rsum[i] = rsum[i + 1] + array[i + 1];
  }
  console.log(rsum);
  return rsum;
}

function getSum(array) {
  getLeftSum(array);
  getRightSum(array);
}


getSum([ 3, 6, 4, 8, 9]);
