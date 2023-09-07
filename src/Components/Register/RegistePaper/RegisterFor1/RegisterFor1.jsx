import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { doc, setDoc, serverTimestamp  } from 'firebase/firestore';

const RegisterFor1 = ({ handleNextPaper, handleBio }) => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [collegeName, setCollegeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [mail, setMail] = useState("");

    const handleClick = (e) => {

        e.preventDefault();
        if (name.length > 8 || departmentName.length > 8 || phoneNumber.length > 8 || collegeName.length > 5) {
            handleBio(name, collegeName, departmentName, phoneNumber, mail);
            handleNextPaper();
        }else{
            alert("Fill Credentials");
        }
    }

    const handlename = (e) => {
        var name = localStorage.getItem("name");
        if (name) {
            setName(name);
        }

        if (e) {
            setName(e.target.value)
            localStorage.setItem("name", e.target.value);
        }
    }
    const handlephoneNumber = (e) => {
        var phoneNumber = localStorage.getItem("phoneNumber");
        if (phoneNumber) {
            setPhoneNumber(phoneNumber);
        }

        if (e) {
            setPhoneNumber(e.target.value)
            localStorage.setItem("phoneNumber", e.target.value);
        }
    }
    const handlecollegeName = (e) => {
        var collegeName = localStorage.getItem("collegename");
        if (collegeName) {
            setCollegeName(collegeName);
        }

        if (e) {
            setCollegeName(e.target.value)
            localStorage.setItem("collegename", e.target.value);
        }
    }
    const handledepartmentname = (e) => {
        var departmentName = localStorage.getItem("departmentName");
        if (departmentName) {
            setDepartmentName(departmentName);
        }

        if (e) {
            setDepartmentName(e.target.value)
            localStorage.setItem("departmentName", e.target.value);
        }
    }
    const handlemail = (e) => {
        var mail = localStorage.getItem("email");
        if (mail) {
            setMail(mail)   
        }
        
        if (e) {
            setMail(e.target.value)
            localStorage.setItem("email", e.target.value);
        }
    }

    useEffect(() => {
        handlename()
        handlephoneNumber()
        handlecollegeName()
        handledepartmentname()
        handlemail()

    }, [name, mail, departmentName, collegeName, phoneNumber])

    return(
        <>
            <form onSubmit={(e) => handleClick(e)}>
                <h2 className="InputForBiohead">Personal Detail</h2>
                <div className="InputForBio">
                    <input onChange={handlename} value={name} className="mainRegisterPaperInput" required type="text" placeholder="Name *" />
                    <input onChange={handlephoneNumber} value={phoneNumber} className="mainRegisterPaperInput" required type="number" placeholder="Phone Number *" />
                </div>
                <div className="InputForBiofordepartName">
                    <input onChange={handlecollegeName} value={collegeName} className="mainRegisterPaperInput" required type="text" placeholder="College Name *" />
                    <input onChange={handledepartmentname} value={departmentName} className="mainRegisterPaperInput" required type="text" placeholder="Department Name *" />
                </div>
                <div className="InputForBiofordepartName">
                    <input onChange={handlemail}  value={mail} className="mainRegisterPaperInput" required type="email" placeholder="Mail Address *" />
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