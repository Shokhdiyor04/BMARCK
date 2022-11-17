
import React from "react"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>
                    Your customer experience solution
                </h1>
                <p>For over 50 years, transcosmos has been designing solutions that prioritize the customer experience</p>
                <div className="inp-box">
                    <input type="text" placeholder="Enter your email" />
                    <button>Discover Now</button>
                </div>
                <p className="clicking">*By clicking the button, you are agreeing with our <span>Terms & Conditions</span></p>
            </div>
            <div className="header-right">
                <img src={require("../images/011 1.png")} alt="" />
            </div>
        </div>
    )
}

export default Header;