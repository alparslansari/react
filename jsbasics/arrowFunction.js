const x = function() {
    // "this" here is the caller of X
};

const Y = () => {
    // "this" here is NOT the caller of Y

    // It's the same "this" found in Y's scope
}

/* 
Regular functions give access to their "calling" envirronment while arrow
functions give access to their "defining" environment

The value of the "this" keyword inside a regular function depends on How the
function was CALLED (the OBJECT that made the call).

The value of the "this" keyword inside an arrow function depends on WHERE the
function was DEFINED (the SCOPE that defined the function).

*/

//Arrow function is good for event handlers and listeners


const square1 = (a) => {
    return a * a;
};

const square2 = (a) => a * a;

const square3 = a => a * a;

[1, 2, 3, 4].map(a => a * a);
// Array(4) [ 1, 4, 9, 16 ]


