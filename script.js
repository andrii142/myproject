'use strict'

function getMin() {
  let arr = [2, 4, 5, 7, 9, 4, 1, 16];
  
  arr = Math.min(...arr);

  document.getElementById('getMin').innerHTML = arr;
} // first task


function getEven() {
  let arr = [2, 4, 5, 7, 9, 4, 1, 16];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  document.getElementById('getEven').innerHTML = result;
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