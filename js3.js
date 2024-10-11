//1
let a1 = 'ss'
let a2 = Boolean(a1)
console.log(typeof a2);

let a3 = 22
let a4 = Boolean(a3)
console.log(typeof a4);

let a5 = 'ff'
let a6 = Number(a5)
console.log(typeof a6);

let a7 = null
let a8 = Boolean(a7)
console.log(typeof a8);

let a9
let a10 = Boolean(a9)
console.log(typeof a10);
//2
const mesage = confirm('go?')
if (mesage) {
    console.log('You confirmed popup')
}
else {
    console.log('Confirm Error')
}
//3
const msg = confirm('gogo?');
msg > 0 ?
console.log('You confirmed popup'):
console.log('Confirm Error');
//4
const pro = Number(prompt('age'));
if (pro <= 0) {
    console.log ('enter the number');
} else if ( pro >= 1 && pro <= 12 ) {
    console.log('you are child');
} else if ( pro >= 12 && pro <= 18) {
    console.log('you are teenager');
} else if ( pro >= 18 && pro <= 60) {
    console.log('you are adult person');
} else if ( pro >= 60) {
    console.log ('you are so old'); 
} else {
    console.log ('enter the number');
}
//5
const swc = prompt('Name')
switch (swc) {
    case 'Admin': console.log('I have full access');
    break;
    case 'Student': console.log('Im student');
    break;
    case 'Teacher': console.log('Im teacher');
    break;
    case 'Young': console.log('I young and ready to party');
    break;
    default: console.log('You entered own name')
}
//6 
let b1 = 1;

let b2 = 3;

let b3 = b1 < b2
console.log(b3);

let b4 = b1 > b2
console.log(b4);

let b5 = 2 >= 1
console.log(b5);

let b6 = 2 <= 1
console.log(b6);

let b7 = 2 == '1'
console.log(b7);

let b8 = 2 === '1'
console.log(b8);

let b9 = 2 != '1'
console.log(b9);

let b10 = 2 !== '1'
console.log(b10);

let a = 1
let b = 0
console.log( a > 0 || b > 0);

let c = 1
let d = 0
console.log( a > 0 && b > 0);