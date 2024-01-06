//FUNCTIONAL PROGRAMMING - ENVATO TUTS +

//Declaring functions
function add(x,y){
    return x + y;
}

//This is a function expression
const product = function(r,t){
    return r * t;
}
add(3,4);

//passing a function as an argument to another function

document.addEventListener('click', function(e){
    //Some code
});

//Returning a function
// function greet(salutaion, firstName){
//     return `${salutaion} ${firstName}`;
// }

const greet = function(salutaion){
    return function(firstName){
        return `${salutaion} ${firstName}`;
    }
};

const hello = greet('Hello');
const howdy = greet('howdy');

howdy('Jim');