// soal 1

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverseArr(arr) {
  const duplicateArr =  [...arr]
    const result = duplicateArr.reverse();
    return result;
  }
// reverse();


const newArr =reverseArr(arr);
const newArr2 =reverseArr(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

console.log("---------------------------------------------------------------------------------------")

// soal 2

const arr1 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];

// function getAverage( ) { 

//  }

// console.log(getAverage(arr1))
// console.log(getAverage(arr3))

function getAverage(arr1){
  let total = 0;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i]
  }
  let avg = sum / arr1.length
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > avg) {
          total++
      }
  }
  return total;
}
console.log(getAverage(arr1))
console.log("Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8")
console.log(getAverage(arr3))
console.log("Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8")


    console.log("---------------------------------------------------------------------------")


    // soal 3

    const arr34 = [
      [10],
      [9, 7, 1],
      [2, 8],
    ];
    
    
// cara 2

function searchInArray(arr, num) {
  var newArray = arr.reduce(function(sebelum, sesudah) {
      return sebelum.concat(sesudah);
  });
  let hasil = newArray.indexOf(num);
  if (hasil == -1) {
      return null;
  } else {
      return hasil;
  }
}
    

    
    console.log(searchInArray(arr34, 3));
    console.log(searchInArray(arr34, 2));
    console.log(searchInArray(arr34, 4));
    console.log(searchInArray(arr34, 8));