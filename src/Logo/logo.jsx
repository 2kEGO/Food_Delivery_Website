import "./logo.css";

export default function Logo() {
    return(
        <div className="logo-container">
            <div className="empty"></div>
            <div className="logo">
                <span>Est.</span>
                <h1>Salt'n Pepper</h1>
                <span>2035</span>
            </div>
            <div className="spinner">
                <span className=" loader">Order Online</span>
            </div>
        </div>
    );
}