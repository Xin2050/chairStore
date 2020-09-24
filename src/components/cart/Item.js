import React from 'react';
import {deleteFromCart} from "../../actions";
import {connect} from 'react-redux';

const Item = ({product,deleteFromCart,readonly}) => {
    const onDelete=()=>{
        let row = document.getElementById(`row_${product.id}`);
        row.classList.add('cart__table__body__row--delAnimation');
        setTimeout(()=>{
            row.classList.add('cart__table__body__row--deleted');
        },600)
        setTimeout(()=>{deleteFromCart(product.id)},650)

    }
    return (
        <div className="cart__table__body__col__item">
            <div className="cart__table__body__col__item__left">
                <img src={product.media.split("|")[0]} alt="img"
                     className="cart__table__body__col__item__left__img"/>
            </div>
            <div className="cart__table__body__col__item__right">
                <div>{product.name}</div>
                <div
                    className="cart__table__body__col__item__right--smallText"
                    onClick={onDelete}
                >
                    {product.description}
                </div>
                {readonly?null:<div className="cart__button" onClick={onDelete}>Remove Item</div>}

            </div>

        </div>
    );
};

export default connect(null,{deleteFromCart})(Item);
