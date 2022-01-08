const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
});

const list = document.querySelector("#userInput-1");
const btn1 = document.querySelector(".btn-1");
const searchElement = document.querySelector("#userInput-2");
const btn2 = document.querySelector(".btn-2");
const displayInput = document.querySelector(".Input");
const displayOutput = document.querySelector(".Output");

const searchUsingBS = (arr, searchElement) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);
    console.log(middle);
    if (arr[middle] < searchElement) {
      start = middle + 1;
    } else if (arr[middle] > searchElement) {
      end = middle - 1;
    } else {
      return " Found";
    }
  }
  return " Not Found";
};

let data = null;
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  const val = list.value.split(",").map((i) => Number(i.trim()));
  val.includes(NaN) ? alert("Wrong Input") : (data = val);
  displayInput.textContent = data;
});

btn2.addEventListener("click", (e) => {
  let val = null;
  let count = 0;
  e.preventDefault();
  if (!isNaN(Number(searchElement.value))) {
    console.log(data);
    console.log(Number(searchElement.value));
    val = searchUsingBS(data, Number(searchElement.value));
  } else {
    count += 1;
    alert("Something went wrong! Try Again");
  }
  displayOutput.textContent = count >= 1 ? "No output Found" : val;
});
