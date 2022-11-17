import React from "react";

const Main = () => {
    return (
        <div className="main w-full">
            <div className='main-paragraph'>
                <h1>Our amazing clients</h1>
            </div>
            <div className="main-img">
                <img src={require("../images/Group 22.png")} alt="" />
            </div>
            <div className="main-box">
                <div className="main-left">
                    <img className="align-self-start" src={require("../images/main1.png")} alt="" />
                    <img className="align-self-end" src={require("../images/main2.png")} alt="" />
                </div>
                <div className="main-right">
                    <h1>We are here for your business solutions</h1>
                    <p>As an organization focused on customer experience, the measure of our success is always based on the satisfaction of our clients, customers, and employees.
                        Launching in 1966, transcosmos has grown to be a global leader in customer experience with over 58,000 employees across 30 countries.</p>
                    <div className="amazing-box">
                        <div className="project">
                            <h1>53k</h1>
                            <p>Projects Done</p>
                        </div>
                        <div className="clients">
                            <h1>300</h1>
                            <p>Amazing Clients</p>
                        </div>
                        <div className="award">
                            <h1>1+</h1>
                            <p>Get Awards</p>
                        </div>
                    </div>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Main;