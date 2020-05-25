// Let's shuffle the numbers from 1-70
let arry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];

let arrayShuffle = function(arr) {
  let newPos, 
      temp;

  for (let i = arr.length -1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
};

let newArray = arrayShuffle(arry);

console.log(newArray);

// Extract five numbers from the array 
var numbber = [newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]];
console.log(numbber);


// sort arrays from lower numbers!!! 

const arr = numbber;

const compareNumbers = (a,b) => {
  if ( a > b ) {
    return 1;
  } else if ( b > a ) {
    return -1;
  } else {
    return 0;
  }
}

const result = arr.sort(compareNumbers);

console.log(result);


// put the numbers in the balls.

var number0 = document.querySelectorAll(".drum")[0].innerHTML = result[0];
var number1 = document.querySelectorAll(".drum")[1].innerHTML = result[1];
var number2 = document.querySelectorAll(".drum")[2].innerHTML = result[2];
var number3 = document.querySelectorAll(".drum")[3].innerHTML = result[3];
var number4 = document.querySelectorAll(".drum")[4].innerHTML = result[4];
var randomNumber5 = Math.floor(Math.random()*26) + 1;
var number5 = document.querySelectorAll(".drum")[5].innerHTML = randomNumber5;


