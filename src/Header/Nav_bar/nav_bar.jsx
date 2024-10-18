import "./nav_bar.css";
import basketImg from "./Nav_bar_img/shopping_basket_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import React, {useState} from "react";
// import CustomerBasket from './button/CustomerBasket.jsx';

export default function Navbar() {
    const [count, setCount] = useState(0);

    return (

        <div className="nav-bar-container">
            <nav className="nav-bar">
                <ul>
                    
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Order Online</a>
                    </li>
                    <li>
                        <a href="#">Book a table</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Hours & Locations</a>
                    </li>
                    <li>
                        <img src={basketImg} alt="" />
                        <div>{count}</div>
                    </li>

                </ul>
            </nav>
        </div>
    );
}