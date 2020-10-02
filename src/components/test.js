
const _ = require('lodash');
const data = {
    id:'1'
}
const options= {
    '1': {
        id: '1',
        price: 1745,
        options: {
            '1': {
                itemId: 2,
                price: '100.00'
            },
            '2': {
                itemId: 1,
                price: '300.00'
            }
        },
        optionsTotal: 0,
        total: 1745
    }
}
//console.log(Object.values(options['1'].options));
// const subtotal = _.reduce(Object.values(options['1'].options),(sum,item)=>{
//     return sum+Number(item.price)
// },0)
// console.log(subtotal);


console.log('ok');
