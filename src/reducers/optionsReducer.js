import _ from 'lodash'
import {FETCH_OPTIONS, OPTIONS_CHANGE, OPTIONS_INIT} from "../actions/types";


export default (state = {}, action) => {

    switch (action.type) {
        case FETCH_OPTIONS:

            return {...state};
        case OPTIONS_INIT:
            const newoptions = {...state};
            if (_.findIndex(newoptions, {id: action.payload}) === -1) {
                _.set(newoptions, [action.payload.id],
                    {
                        id: action.payload.id,
                        price: +action.payload.price,
                        options: {},
                        optionsTotal: 0,
                        total: +action.payload.price
                    })
            }
            return newoptions;
        case OPTIONS_CHANGE:

            const changedState = _.chain(state)
                .cloneDeep()
                .set([action.payload.productId, 'options', action.payload.categoryId],
                    {
                        itemId: action.payload.optionId,
                        price: action.payload.price
                    })
                .value()
            const subtotal = _.reduce(Object.values(changedState[action.payload.productId].options),
                (sum, item) => {
                    return sum + Number(item.price)
                }, 0)
            changedState[action.payload.productId].optionsTotal = subtotal;
            changedState[action.payload.productId].total =  changedState[action.payload.productId].price + subtotal;

            return changedState;

        default:
            return state;
    }
}