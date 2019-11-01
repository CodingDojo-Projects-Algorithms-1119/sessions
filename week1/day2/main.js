/**
 * Push Front
Given an array and an additional value, insert this value at the beginning of the array.
Do this without using any built-in array methods.
 *
*/
var values = [1, 2, 3, 4, 5, 6, 7, 10];

function pushFront(array, value) {
  // array[array.length]
  // for (var index = array.length; index > 0; index--) {
  //   var currentValue = array[index - 1];
  //   array[index] = currentValue;
  //   // console.log(array);
  // }

  // array[0] = value;

  // return array;

  return insertAt(array, 0, value);
}

console.log('push front', pushFront(values, 99));


/**  
 * Insert At
Given an array, index, and additional value, insert the value into array at given index. 
Do this without using built-in array methods.
 * 
*/

function insertAt(array, position, value) {
  console.log('using insert at');
  for (var index = array.length; index > position; index--) {
    var currentValue = array[index - 1];
    array[index] = currentValue;

    // console.log(array);
  }

  array[position] = value;

  return array;
}



// console.log('values', values);
/**  
 * Pop Front
Given an array, remove and return the value at the beginning of the array. 
Do this without using any built-in array methods except pop().
 * 
*/

function popFront(array) {
  // var returnValue = array[0];

  // for (var index = 1; index < array.length; index++) {
  //   var currentValue = array[index];
  //   array[index - 1] = currentValue;

  // }

  // array.length--;
  // // console.log(array);

  // return returnValue;

  return removeAt(array, 0);
}


console.log('pop fronot', popFront(values));


console.log(insertAt(values, 5, 999));


/**  
 * Remove At
Given an array and an index into array, remove and return the array value at that index. 
Do this without using built-in array methods
 * 
 * 
*/

function removeAt(array, position) {
  var returnValue = array[position];

  console.log('before', array);

  for (var index = position; index < array.length; index++) {
    var currentValue = array[index + 1];
    array[index] = currentValue;
  }

  array.pop();
  console.log('removeAt', array);

  return returnValue;
}


console.log(removeAt(values, 3));

/**
 * Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it.
 * Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.
 * As always, do this without using built-in functions.
 *
*/



function min2Front(array) {
  // var minValue = array[0];

  // console.log('min', minValue)
  var mindex = 0;
  // find the min value in array
  for (var index = 1; index < array.length; index++) {
    var currentValue = array[index];

    if (currentValue < array[mindex]) {
      // minValue = currentValue;
      mindex = index;
      console.log('fouond a new min', mindex);
    }
  }

  return pushFront(array, removeAt(array, mindex));
  // console.log('our min value is ' + mindex, array);

  // return array;
}


var vals = [23, 65, 1, 756, -9, 7];
// console.log('AZ' < 'AB');
// console.log('z'.charCodeAt(0));

console.log(min2Front(vals));