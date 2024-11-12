import './Register_Page.css';
import img from './Register_Page_img/Halloumi Burgers.jfif';


export default function RegisterPage() {
    
    function saveInfo(){

    }
    
    return (
        <div className="body_container">
            
            <div className="body-left">
                <img src={img} alt="" />
            </div>

            <div className="body-right">
                
                <form className="register-container" onChange={saveInfo()}>

                    <div className="signup-form-title">
                        <h1>Create Your Account</h1>
                    </div>

                    <div className="signup-form">

                        {/* <div className="signup-form-title">
                            <h3>Name</h3>
                        </div> */}

                        <div className="signup-form-input">
                            {/* <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/> */}
                            <input type="text" placeholder='Full Name' />
                        </div>

                        {/* <div className="signup-form-title">
                            <h3>User Name</h3>
                        </div>  */}

                        <div className="signup-form-input">
                            <input type="text" placeholder='UserName'/>
                        </div>

                        <div className="signup-form-input">
                            <input type="text" placeholder='Email' />
                        </div>

                        <div className="signup-form-input">
                            <input type="password" placeholder='Password'/>
                        </div>

                        <div className="signup-form-input">
                            <input type="password" placeholder='Confirm Password'/>
                        </div>

                    </div>

                    <div className="submit-button-container">
                        <button type='submit'>Sign Up</button>
                    </div>

                </form>
            </div>


        </div>
    )
}