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