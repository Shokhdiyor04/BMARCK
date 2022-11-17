import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaElementor } from "react-icons/fa";

const Futter = () => {
    return (
        <div className="futter-page">
            <div className="futter-paragraph">
                <h1>Get started today! It’s free</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <div className="futter-btn">
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="futter-box">
                <div className="futter-left">
                    <h1>BMARK</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    <div className="futter-icons">
                        < BsFacebook />
                        < AiOutlineTwitter />
                        < BsInstagram />
                        < AiFillLinkedin />
                    </div>
                </div>
                <div className="futter-right">
                    <div className="futter-about">
                        <h2>About us</h2>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Team</a>
                        <a href="#">Contact us</a>
                    </div>
                    <div className="futter-links">
                        <h2>Quick Links</h2>
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Contact center</a>
                        <a href="#">Reviews</a>
                    </div>
                    <div className="futter-contact">
                        <h2>Contact us</h2>
                        <div className="futter-west">
                            <div className="west-left">
                                <AiOutlineHome />
                            </div>
                            <div className="west-right">
                                <a href="#">879 West 190th Street #410, Gardena,
                                    CA 90248, USA</a>
                            </div>
                        </div>
                        <div className="futter-west">
                            <div className="west-left">
                                <AiOutlinePhone />
                            </div>
                            <div className="west-right">
                                <a href="#">310-630-0072</a>
                            </div>
                        </div>
                        <div className="futter-west">
                            <div className="west-left">
                                <FaElementor />
                            </div>
                            <div className="west-right">
                                <a href="#">310-630-0074</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futter;