import React from "react";
import Features from "./components/Features";
import Futter from "./components/futter";
import Header from "./components/Header";
import Main from "./components/Main";
import Team from "./components/Team";
import Vission from "./components/Vission";

const Container = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-logo">
                    <h1>
                        BMARCK
                    </h1>
                </div>
                <div className="nav-menu">
                    <a href="#">Contact Center</a>
                    <a href="#">Ecommerce</a>
                    <a href="#">Blog</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="nav-btn">
                    <button>Sign in</button>
                    <button>Sign out</button>
                </div>
            </nav>
            <Header />
            <Main />
            <Vission /> 
            <Features />
            <Team />
            < Futter />
        </React.Fragment>
    )
}

export default Container;