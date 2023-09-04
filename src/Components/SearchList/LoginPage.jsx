import React from "react";

const LoginPage = ({ handleSubmit }) => {
    return(
        <div className="LoginPage">
            <h2>Administrator</h2>
            <input placeholder="Administrator Password" required onSubmit={() => handleSubmit()}/>
        </div>
    )
}

export default LoginPage;