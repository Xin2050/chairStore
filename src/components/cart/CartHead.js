import React from 'react';

const CartHead = ({title}) => {
    return (
        <div className="cart__head">
            <h1 className="cart__head__left">{title}</h1>
            <div className="cart__head__right">
                <div className="cart__head__right__text1">For orders, questions or concerns:</div>
                <div className="cart__head__right__text2">Please call 888 798 0202</div>
            </div>
        </div>
    );
};

export default CartHead;