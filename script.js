'use strict'

function getMin() {
  let arr = [];
  let numberFromPrompt;
  let minNumber;

  while (true) {
    numberFromPrompt = prompt('Enter number for array: (press cancel to finish)');
    arr.push(+numberFromPrompt);
    if (numberFromPrompt === null) break;
  } // array from prompt

  arr.pop();

  document.getElementById('userArrayFirst').innerHTML = arr;

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }

  arr.sort(compareNumeric);

  minNumber = arr[0];

  document.getElementById('getMin').innerHTML = minNumber;
} // first task


function getEven() {
  let arr = [];
  let evenNumbers = [];
  let numberFromPrompt;

  while (true) {
    numberFromPrompt = prompt('Enter number for array: (press cancel to finish)');
    arr.push(+numberFromPrompt);
    if (numberFromPrompt === null) break;
  } // array from prompt

  arr.pop();

  document.getElementById('userArraySecond').innerHTML = arr;

  arr.forEach(function(a) {
    if (a % 2 === 0) {
      evenNumbers.push(a);
    }
  })

  document.getElementById('getEven').innerHTML = evenNumbers;
} // second task


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
