//Pure and Impure functions

//Pure functions

/** Pure functions are consistent
 * Easy to tests and easy to predict
 * Return same results with the same input
 */

function add(x,y){
    return x + y;
}
add(2,4); //6

//impure function -> relies on external data or information
function add2(x,y){
    console.log(x+y); //Here console.log is external and has an observable side effect
    return x + y;
}

