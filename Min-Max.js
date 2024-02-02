const arr = [10, 80, 40, 20, 60];
function max() {
  return arr.reduce((max, curr) => {
    if (max < curr) {
      max = curr;
    }
    return max;
  }, 0);
}
function min() {
  return arr.reduce((min, curr) => {
    if (min > curr) {
      min = curr;
    }
    return min;
  }, arr[0]);
}
console.log(max());
console.log(min());
console.log(2 === "2");
console.log(2 == "2");
