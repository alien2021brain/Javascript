const arr = [1, 2, 4, 5, 6, 8, 9, 10];

const missingno = () => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let ans = [];
  for (let i = min; i <= max; i++) {
    if (arr.indexOf(i) < 0) {
      ans.push(i);
    }
  }
  return ans;
};
console.log(missingno());
