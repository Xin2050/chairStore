require('lodash')

const cart = {
        '1': {
            id: 1,
            quantity: 1,
            price: '1745'
        },
        '2': {
            id: 2,
            quantity: 1,
            price: '1120'
        },
        '3': {
            id: 3,
            quantity: 2,
            price: '1995'
        },
        '6': {
            id: 6,
            quantity: 1,
            price: '725'
        },
        '8': {
            id: 8,
            quantity: 1,
            price: '845'
        },
        '10': {
            id: 10,
            quantity: 1,
            price: '845'
        }
    }


let sortedcart = {...cart,sort:{'which':'price','how':'desc'}}

console.log(sortedcart);




