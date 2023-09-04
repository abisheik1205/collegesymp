import React from "react";
import "./Register.css";
import RegisterHeader from "./RegisterHeader/RegisterHeader";
import RegistePaper from "./RegistePaper/RegistePaper";

const Register = () => {
    return(
        <div className="RegisterPage">
            <RegisterHeader />
            <RegistePaper />
        </div>
    )
}

export default Register;    