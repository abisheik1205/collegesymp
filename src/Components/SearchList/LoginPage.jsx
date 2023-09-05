import React from "react";  

const LoginPage = ({ handleSubmit, handlePassword }) => {
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="LoginPage">

                <h2 className="LoginPageHead">Administrator</h2>
                <input className="LoginPageInp" placeholder="Administrator Password" onChange={handlePassword} required/>
                <br />
                <input className="LoginPageBtn" type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default LoginPage;