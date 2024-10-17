import "./logo.css";
import img from  './Logo_img/orderonline.png';
import basketImg from './Logo_img/shopping_basket_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import React, {useState} from "react";

export default function Logo() {
    const [count, setCount] = useState(0);
    const display = document.getElementById('menuToggle');

    function Toggle() {
        if (display.style.display == 'none') {
            display.style.display = 'block';
        } else {
            display.style.display = 'none';
        }
    }

    return(
        <div className="logo-container">

            {/* <div className="empty"></div> */}
            <div className="logo">
                <span>Est.</span>
                <h1>Salt'n Pepper</h1>
                <span>2035</span>
            </div>
            {/* <div className="spinner">
                <div className="spinner-container">
                    <img src={img} alt="" id="spin" href='#'/>
                    <div id="arrow"></div>
                </div>
            </div> */}

            <div className="basket-container">
                <img src={basketImg} alt="" />
                <div>{count}</div>
            </div>
            
            <div className="hamburger-container">

                <div className="hamburgerToggle" id="menuToggle" onClick={Toggle}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    );
}   