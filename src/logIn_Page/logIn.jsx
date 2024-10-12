import { useState } from "react";
import "./logIn.css";

export default function LogInPage(){
    

    return(
        <div className="body_container">

            <div className="body-left">
                <img src="" alt="" />
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
                            <img src="" alt="" />
                            Google
                        </button>

                        <button>
                            <img src="" alt="" />
                            Apple
                        </button>
                        
                    </div>

                    <div className="sign-up-container">
                        <h5>Don't have an account?</h5>
                        <a href="#">Sign Up now</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}