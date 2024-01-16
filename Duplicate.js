const arr = [1, 2, 3, 4, 5, 4];
const duplicate = arr.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(duplicate);
