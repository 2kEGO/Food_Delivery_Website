import "./nav_bar_body.css";
import foodImg from "./Body_navbar_img/food.jpg";

export default function NavBarBody() {
    return (
        <div className="navbar-container">
            
            <div className="navbar-img-section">
                <img src={foodImg} alt="" />
                <div className="blurImg"></div>
                <h1>Italian Inspired kitchen in the Heart of San Francisco</h1>
                
            </div>

            <div className="button-container">
                <div className="button">
                    <button>Our Menu</button>
                    <div>
                        <span>&#8594;</span>
                    </div>
                </div>
                <div className="button">
                    <button>Delivery & Pickup</button>
                    <div>
                        <span>&#8594;</span>
                    </div>
                </div>
                <div className="button">
                    <button>Book a Table</button>
                    <div>
                        <span>&#8594;</span>
                    </div>
                </div>
                
            </div>

        </div>
    )
}