import React from "react";
import "./RegisterHeader.css";

import { useNavigate } from "react-router-dom";

const RegisterHeader = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <div className="RegisterHeader">
            <p className="RegisterHeaderback" onClick={() => handleClick()}>Back</p>
        </div>
    )
}

export default RegisterHeader;