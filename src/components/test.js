const _ = require('lodash');

const options = [
    {
        id: 1,
        options: {a: 1, b: 2},
        q:1
    },
    {
        id: 2,
        options: {a: 2, b: 3},
        q:2
    },
    {
        id: 2,
        options: {a: 2, b: 4},
        q:3
    },
]


const index = _.findIndex(options,{id:2,options: {a: 2, b: 4}});

options[index].q += 1;

console.log(options);