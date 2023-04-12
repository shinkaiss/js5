let arr = ["name", "John", "lastname", "Black", "age", "23"];
let obj = arrayToObject(arr);
function arrayToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i+1];
  }
  return obj;
}
console.log(obj) 
