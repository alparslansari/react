// const PI = Math.PI;
// const E = Math.E;
// const SQRT = Math.SQRT;

const {PI, E, SQRT} = Math;

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// useState();

const circle = {
    label: 'circlex',
    radius: 2,
}

const circleArea = ({radius}) =>
    (PI * radius * radius).toFixed(2);

console.log(circleArea(circle));

// below precision = 2 is for defining the default value
const circleArea2 = ({radius}, {precision = 2} = {}) =>
    (PI * radius * radius).toFixed(precision);

console.log(circleArea2(circle));
console.log(circleArea2(circle, {precision: 5}));

// const [value, setValue] = useState(initialValue);
// In React, the useState function returns an array of two items.
// We use array destructuring with useState to capture these two
// items into local variables.

/* SPLITTING ARRAY */
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);

/* We can use destructuring for filtering the objects */
const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
}

const {temp1, temp2, ...person} = data; // ... rest operator

// shallow copy - copied obj is shared
const newArray = [...restOfItems];

// shallow copy - copied obj is shared
const newObject = {
    ...person
};