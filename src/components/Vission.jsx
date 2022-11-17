import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io"
const Vission = () => {
    return (
        <div className="vission-page">
            <div className="vission-paragraph">
                <h1>Our vison & Our goal</h1>
                <p>Transcosmos’ business is uniting people and technology to provide exceptional customer experiences. </p>
            </div>
            <div className="vission-box">
                <div className="vission-contact">
                    <img src={require("../images/Contact center (1).png")} alt="" />
                    <h3>Contact center</h3>
                    <p>For over 50 years, transcosmos has been designing solutions that prioritize the customer experience.</p>
                    <button>Read More <IoIosArrowRoundForward /></button>
                </div>
                <div className="vission-contact">
                    <img src={require("../images/Group (3).png")} alt="" />
                    <h3>Ecommerce</h3>
                    <p>Whether you’re looking for a complete end-to-end ecommerce solution or a specific service, transcosmos America</p>
                    <button>Read More <IoIosArrowRoundForward /></button>
                </div>
                <div className="vission-contact">
                    <img src={require("../images/Vector (13).png")} alt="" />
                    <h3>Business process outsourcing</h3>
                    <p>transcosmos America’s BPO services team will perform an intensive investigation for the tasks of all of the applicable</p>
                    <button>Read More <IoIosArrowRoundForward /></button>
                </div>
            </div>
        </div>
    )
}

export default Vission;