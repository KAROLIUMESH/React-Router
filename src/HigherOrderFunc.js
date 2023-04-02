/* 
A Higher-Order function is a function 
that receives a function as an argument 
or returns the function as output.
*/

const HofComponent = () => {};

/* map, filter, reduce */
const arr1 = [1, 2, 3];
const arr2 = arr1.map((item) => {
  return item * 2;
});

console.log('MAP', arr2);

// creating own higher order function
/* const numArray = [1, 2, 3, 4, 5, 6];
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]) ? newArray.push(arr[i]) : null;
  }
  return newArray;
}

//filter odd numbers
const filterOdd = (x) => {
  return x % 2 != 0;
};

//filter even numbers
const filterEven = (x) => {
  return x % 2 === 0;
};

const filterOddNumber = mapForEach(numArray, filterOdd);
const filterEvenNumber = mapForEach(numArray, filterEven);
console.log(filterOddNumber);
console.log(filterEvenNumber); */

/* const catculate = (type) => {
  if (type === 'ADD') {
    return (a, b) => {
      return a + b;
    };
  } else if (type === 'SUB') {
    return (a, b) => {
      return a - b;
    };
  }
};

const a = catculate('SUB');
console.log(a(2, 3)); */

export default HofComponent;
