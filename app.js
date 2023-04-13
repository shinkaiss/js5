let arr = ["name", "John", "lastname", "Black", "age", "23"];
let obj = arrayToObject(arr);
function arrayToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
  }
  return obj;
}
console.log(obj);


// dop dz
function calculateAverage() {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      sum += arguments[i];
      count++;
    }
  }

  if (count === 0) {
    console.log("No numbers were provided");
    return;
  }

  const average = sum / count;
  console.log("The average of the provided numbers is: "` ${average}`);
}