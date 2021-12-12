/*
    const obj = {
        key: value
    };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2:20,
    f1() {},
    f2: () => {},
    [mystery]:42,
    InverseOfPI, // or below
    // InverseOfPI: InverseOfPI, 
};

console.log(obj.mystery);
// undefined
console.log(obj.answer);
// 42