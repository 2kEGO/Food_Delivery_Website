import "./Header.css"
import img from "./Header-img/default-avatar-icon-of-social-media-user-vector.jpg"

export default function MainPage(){
    return (
         <header>
            <div className="redline-header">

                <div className="logo-left-side">
                </div>

                <div className="header-title-container">
                    <a href="#" className="title">
                        Join the Salt'n Pepper club 
                    </a>
                    <span> & get $10 off your next visit</span>
                </div>

                <div className="logo-sign-In" href="#">
                    <a href="#">
                        <h4>Sign In/Sign Up</h4>
                        <img src={img} alt="" />
                    </a>
                </div>

            </div>
         </header>
    )
}