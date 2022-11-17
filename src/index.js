import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./App";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Fragment>
        <Container />
    </React.Fragment>
)