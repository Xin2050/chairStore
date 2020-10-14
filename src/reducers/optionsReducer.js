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
                        options: _loadInitOptions(action.payload.profileCategories), //load all default options
                        optionsTotal: 0,
                        total: +action.payload.price
                    })
            }
            _calTotal(newoptions,action.payload.id);

            return newoptions;
        case OPTIONS_CHANGE:

            const changedState = _.chain(state)
                .cloneDeep()
                .set([action.payload.productId, 'options', action.payload.categoryId],
                    {
                        categoryId:action.payload.categoryId,
                        itemId: action.payload.itemId,
                        price: action.payload.price
                    })
                .value()
            _calTotal(changedState,action.payload.productId);
            return changedState;

        default:
            return state;
    }
}
const _loadInitOptions = (items)=>{
    const options = {};
    items.forEach(item=>{
        let system_default = _.findIndex(item.profileItems, {"checked": true});
        if (-1===system_default){
            system_default = 0;
        }
        options[item.id]= _createOption(item,system_default)
    })

    return options;
}
const _calTotal = (state,productId)=>{
    const subtotal = _.reduce(Object.values(state[productId].options),
        (sum, item) => {
            return sum + Number(item.price)
        }, 0)

    state[productId].optionsTotal = subtotal;
    state[productId].total =  state[productId].price + subtotal;
    //return state;
}
const _createOption = (item,index)=>{
    return {
        categoryId:item.id,
        itemId: item.profileItems[index].id,
        price:item.profileItems[index].price
    }
}