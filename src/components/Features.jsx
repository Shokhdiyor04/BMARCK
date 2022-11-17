
import React from "react";

const Features = () => {
    return (
        <div className="features-page">
            <div className="features-left">
                <h1>How we work features for customers</h1>
                <p>Whether you need help launching a single product in a specific country or are looking for a global</p>
                <div className="discover-page">
                    <div className="discover-right">
                        <img src={require("../images/Group (6).png")} alt="" />
                    </div>
                    <div className="discover-left">
                        <h3>Discover new ideas</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="discover-page">
                    <div className="discover-right">
                        <img src={require("../images/Group (4).png")} alt="" />
                    </div>
                    <div className="discover-left">
                        <h3>Discover new ideas</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="discover-page">
                    <div className="discover-right">
                        <img src={require("../images/Group (5).png")} alt="" />
                    </div>
                    <div className="discover-left">
                        <h3>Discover new ideas</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="features-right">
            <img src={require("../images/men.png")} alt="" />
            </div>
        </div>
    )
}

export default Features;