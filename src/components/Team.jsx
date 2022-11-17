import React from "react";

const Team = () => {
    return (
        <div className="team-page">
            <div className="team-paragraph">
                <h1>Our team members</h1>
                <p>Transcosmos’ business is uniting people and technology to provide exceptional customer experiences. </p>
            </div>
            <div className="team-box">
                <div className="team-shinchi">
                    <img src={require("../images/Shin-1 1.png")} alt="" />
                    <h2>Shinichi Nagakura</h2>
                    <p>Chairman and CEO</p>
                </div>
                <div className="team-shinchi">
                    <img src={require("../images/ToruTanii 1.png")} alt="" />
                    <h2>Toru Tanii</h2>
                    <p>President and COO</p>
                </div>
                <div className="team-shinchi">
                    <img src={require("../images/Mike 1.png")} alt="" />
                    <h2>Mike Reik</h2>
                    <p>Vice President of Sales</p>
                </div>
                <div className="team-shinchi">
                    <img src={require("../images/Greg 1.png")} alt="" />
                    <h2>Greg Bush</h2>
                    <p>Vice President of Operations</p>
                </div>
            </div>
        </div>
    )
}

export default Team;