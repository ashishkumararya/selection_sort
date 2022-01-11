const formSelector = document.querySelector("form");
const btn = document.querySelector(".btn");
const boxGenerator = document.querySelector(".box-generator");
let inputList = [];
const submitBtn = document.querySelector(".submit");
const displayInput = document.querySelector(".input-arr");
const displayOutput = document.querySelector(".output-arr");

const selectionSort = (arr) => {
  const start = 0;
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let maximumIndex = findTheMax(arr, start, last);
    swapTwoNumber(arr, maximumIndex, last);
  }
  return arr;
};
const swapTwoNumber = (arr, first, second) => {
  let tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
};

const findTheMax = (arr, start, end) => {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
};

formSelector.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", (event) => {
  const arraySize = document.querySelector("#array-size").value;
  console.log(arraySize);
  if (!isNaN(Number(arraySize))) {
    let items = "";
    for (let i = 0; i < arraySize; i++) {
      items += `<input type='text' id='box-${i}' class='input-box'/>`;
    }
    boxGenerator.innerHTML = items;
    setTimeout(() => {
      let inputBox = document.getElementsByClassName("input-box");
      for (const item of inputBox) {
        inputList.push(item);
      }
    }, 0);
  } else {
    alert("Wrong input");
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let finalList = [];
  inputList.forEach((item) => {
    if (!isNaN(Number(item.value))) {
      finalList.push(Number(item.value));
    } else {
      alert("Wrong input");
    }
  });
  setTimeout(() => {
    inputList = [];
  }, 0);
  if (inputList.length === 0) {
    alert("Enter the new size of array");
  } else {
    console.log(finalList);
    displayInput.textContent = finalList;
    displayOutput.textContent = selectionSort(finalList);
    console.log(selectionSort(finalList));
  }
});
