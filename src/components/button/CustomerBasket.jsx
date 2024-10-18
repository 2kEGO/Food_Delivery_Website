import './button.css';
import basketImg from './Logo/Logo_img/shopping_basket_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import React, { useState } from 'react';

export default function CustomerBasket() {
    const [count, setCount] = useState(0);
    return (
        <>
            <img src={basketImg} alt="" />
            <div>{count}</div>
        </>
    );
}