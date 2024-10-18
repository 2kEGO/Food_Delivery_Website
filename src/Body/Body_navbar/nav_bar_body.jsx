import "./nav_bar_body.css";
import foodImg from "./Body_navbar_img/food.jpg";

export default function NavBarBody() {
    return (
        <div className="navbar-container">
            
            <div className="navbar-img-section">
                <img src={foodImg} alt="" />
                <h1>Italian Inspired kitchen in the Heart of San Francisco</h1>
                {/* <section>
                    <img src={foodImg} alt="" />
                </section> */}
            </div>

            <div className="button-container">
                <button></button>
                <button></button>
                <button></button>
            </div>

        </div>
    )
}