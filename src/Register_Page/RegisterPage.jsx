import './Register_Page.css'

export default function RegisterPage() {
    return (
        <div className="body_container">
            
            <div className="body-left">
                <img src="" alt="" />
            </div>

            <div className="body-right">
                <div className="register-container">

                    <div className="signup-form-title">
                        <h1>Create Your Account</h1>
                    </div>

                    <div className="signup-form">

                        <div className="signup-form-title">
                            <h3>Name</h3>
                        </div>

                        <div className="signup-form-input">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>

                        <div className="signup-form-title">
                            <h3>User Name</h3>
                        </div> 

                        <div className="signup-form-input">
                            <input type="text" placeholder='UserName'/>
                        </div>

                        <div className="signup-form-title">
                            <h3>Password</h3>
                        </div>

                        <div className="signup-form-input">
                            <input type="password" placeholder='Password'/>
                        </div>

                    </div>

                    <div className="submit-button-container">
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>


        </div>
    )
}