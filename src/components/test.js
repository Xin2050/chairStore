
const _ = require('lodash');

const options= [1,2,3,4,5]


const [,...rest] = options;
console.log(rest);

const index = {};

console.log(!index);