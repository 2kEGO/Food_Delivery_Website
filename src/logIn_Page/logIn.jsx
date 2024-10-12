// import { useState } from "react";
import "./logIn.css";
import logInImg from "./log_In_page/town.webp";
import google from "./log_In_page/Google.png";
import apple from "./log_In_page/Apple.png";

export default function LogInPage(){
    

    return(
        <div className="body_container">

            <div className="body-left">
                <img src={logInImg} alt="" />
            </div>

            <div className="body-right">
                <div className="log-in-container">

                    <div className="log-in-title">
                        <h1>Sign In</h1>
                    </div>
                    

                    <div className="input-container">
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Password" className="password"/>
                        <button className="button">
                            <img src="" alt=""/>
                        </button>
                    </div>

                    <div className="option-container">
                        <div className="checkbox-container">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>

                        <a href="#">Forgot Password?</a>

                    </div>

                    <div className="sign-in-button">
                        <button>Sign in</button>
                    </div>

                    <div className="log-in-with-title">
                        <span>Or log in with</span>
                    </div>

                    <div className="option-button-container">

                        <button>
                            <img src={google} alt="" />
                            <span>Google</span>
                        </button>

                        <button>
                            <img src={apple} alt="" />
                            <span>Apple</span>
                        </button>
                        
                    </div>

                    <div className="sign-up-container">
                        <span>Don't have an account?</span>
                        <a href="#">Sign Up now</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}