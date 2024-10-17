import "./logo.css";
import img from  './Logo_img/orderonline.png';


export default function Logo() {
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

            <div className="hamburger-container">

                <div className="hamburgerToggle" id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    );
}   