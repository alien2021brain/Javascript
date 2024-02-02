const arr = [2, 1, 5, 4, 3];

const secondL = () => {
  const max = Math.max(...arr);
  const idex = arr.indexOf(max);

  arr.splice(idex, 1);
  return Math.max(...arr);
};
console.log(secondL());
