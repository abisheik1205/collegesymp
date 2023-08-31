import React from "react";
import { useState } from "react";

const RegisterFor1 = ({ handleNextPaper }) => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [collegeName, setCollegeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [mail, setMail] = useState("");

    const handleClick = (e) => {

        e.preventDefault();
        if (name.length > 8 || departmentName.length > 8 || phoneNumber.length > 8 || collegeName.length > 5) {
            handleNextPaper();
        }else{
            alert("Fill Credentials");
        }
    }

    return(
        <>
        <form onSubmit={(e) => handleClick(e)}>
            <h2 className="InputForBiohead">Personal Detail</h2>
            <div className="InputForBio">
                <input onChange={(e) => setName(e.target.value)} className="mainRegisterPaperInput" required type="text" placeholder="Name *" />
                <input onChange={(e) => setPhoneNumber(e.target.value)} className="mainRegisterPaperInput" required type="number" placeholder="Phone Number *" />
            </div>
            <div className="InputForBiofordepartName">
                <input onChange={(e) => setCollegeName(e.target.value)} className="mainRegisterPaperInput" required type="text" placeholder="College Name *" />
                <input onChange={(e) => setDepartmentName(e.target.value)} className="mainRegisterPaperInput" required type="text" placeholder="Department Name *" />
            </div>
            <div className="InputForBiofordepartName">
                <input onChange={(e) => setMail(e.target.value)} className="mainRegisterPaperInput" required type="email" placeholder="Mail Address" />
            </div>

            <div className="registerPaperButton">
                <button className="registerPaperButtonBTN" type="submit">Next</button>
            </div>
        </form>
            <br />
        </>
    )
}

export default RegisterFor1;