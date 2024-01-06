//Immutability -> Cannot be changed thus consistent and safe

let salutation = 'Hello';
salutation = 'bye'; //it is being mutated

const greeting = 'Hello'; // This is immutable

const person ={
    firstName: 'Jim',
}

//we can be mutated
person.lastName = 'Doe';


//This object is immutable
const movie = Object.freeze({
    title: 'London has fallen'
});


const indexes = Object.freeze([0,1,2,3,4,5]);

function addElement(arr){
    //indexes.push(arr.length); //this is not the way

    return Object.freeze([...arr, arr.length]);

}

addElement(addElement(indexes)); //You go on bracketing the function after adding a new array


