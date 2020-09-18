'use strict'

function getMin(arr) {
  let minNumber;

  document.getElementById('userArrayFirst').innerHTML = arr;

  function compareNumeric(a, b) {
     return a - b;
  }

  arr.sort(compareNumeric);

  minNumber = arr[0];

  document.getElementById('getMin').innerHTML = minNumber;

} // first task

document.getElementById('btn1').onclick = () => getMin([4, 8, 12, 63, 5, 21, 9]);


function getEven(arr) {
  let evenNumbers = [];

  document.getElementById('userArraySecond').innerHTML = arr;

  arr.forEach(function(a) {
    if (a % 2 === 0) {
      evenNumbers.push(a);
    }
  })

  document.getElementById('getEven').innerHTML = evenNumbers;
} // second task

document.getElementById('btn2').onclick = () => getEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


function searchByName() {
  let value = document.getElementById('outObject').value;
  let result = [];
  let arrObj = [
    { name: 'Jonny Walker', birthDate: '1995-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' },
    { name: 'Viktor', birthDate: '1998-11-09' },
    { name: 'Andrew', birthDate: '2011-05-09' }
  ];

  for (let key in arrObj) {
    if (value === arrObj[key].name) {
      for (let key1 in arrObj[key]) {
        result.push(arrObj[key][key1])
      }
    }
  }

  document.getElementById('searchByName').innerHTML = result;
} // last task
