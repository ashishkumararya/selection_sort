const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
});

const list = document.querySelector("#userInput-1");
const btn1 = document.querySelector(".btn-1");
const displayInput = document.querySelector(".Input");
const displaymaxOutput = document.querySelector(".output-max");
const displayminOutput = document.querySelector(".output-min");

const maxminFind = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { max, min };
};

btn1.addEventListener("click", (e) => {
  let data = null;
  const val = list.value.split(",").map((i) => Number(i.trim()));
  val.includes(NaN) ? alert("Wrong Input") : (data = val);
  displayInput.textContent = data;
  const { max, min } = maxminFind(data);
  displaymaxOutput.textContent = max;
  displayminOutput.textContent = min;
  list.value = "";
});
