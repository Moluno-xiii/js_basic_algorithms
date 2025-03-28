const divContent = document.getElementById("content");
divContent.textContent = "Recursion patterns";
divContent.addEventListener("click", function () {
  window.open(
    "https://stackoverflow.com/questions/7077770/window-location-href-and-window-open-methods-in-javascript"
  );
  console.log(window.location.href);
});

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum all numbers until a particular number.
function sumAllNumbers(number) {
  if (number === 1) {
    return number;
  } else {
    return number + sumAllNumbers(number - 1);
  }
}

// power function
function powerFunction(number, power) {
  if (power === 1) {
    return number;
  } else {
    return number * powerFunction(number, power - 1);
  }
}

// calculate factorial
function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}

function fibonacci(number) {
  if (number === 1 || number === 0) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let middleOfArray = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleOfArray));
    const secondHalf = mergeSort(array.slice(middleOfArray));
    return merge(firstHalf, secondHalf);
  }
}

function merge(leftArray, rightArray) {
  let result = [],
    i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    } else {
      result.push(rightArray[j]);
      j++;
    }
  }
  return [...result, ...leftArray.slice(i), ...rightArray.slice(j)];
}

console.log(
  mergeSort([3, 5, 10, 344, 45, 2, 0, 4, 0, 89, 5, 78, 23, 69, 21, 5])
);
