
import React, {useState} from "react";
import basketImg from "./Nav_bar_img/shopping_basket_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

export default function Basket(){
    const [count, setCount] = useState(0);
    return (
        <div className="basket-container">
            <img src={basketImg} alt="" />
            <div>{count}</div>
        </div>
        
    );
}