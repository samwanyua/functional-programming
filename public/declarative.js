//Declarative programming

const numbers = [1,2,3,4,5,6];

//imperative code
for(let i = 0; i < numbers.length; i++ ){
    numbers[i];
}

//Declarative code

const outPut = item => console.log(item);

numbers.forEach(outPut);

//for each
// numbers.forEach((item) => {
//     console.log(item);
// });

forEach(outPut, numbers);

/**
 *  In finctional programming we tend to avoid use of for, 
 *  while, do loop, if else, switch statement
 */

//Ternary operator

const value = condition ? 'this value' : 'that value';





