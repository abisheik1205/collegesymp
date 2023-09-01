import React from "react";
import "./RegisterFor4.css";
import { useState } from "react";

const RegisterFor4 = ({ handleNextPaper, handlePreviousPaper }) => {

    const [image, setImage] = useState("");

    const handleOnChange = () => {
        
    }

    const handleclick = () => {
        handleNextPaper()
    }

    return(
        <div className="RegisterFor4">
            <h2 className="RegisterFor4Head">Upload the screenshot</h2>
            <p className="noteInRegisterFor4">What pic&#x3F;</p>
            <div className="RegisterFor4Browse">
                <label for="file-upload" className="custom-file-upload">
                        <i class="fa fa-upload"></i>
                    Custom Upload
                </label>
                <input id="file-upload" type="file" style={{display: 'none'}}/>            
            </div>
            <div className="registerPaperButton">
                <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                <button className="registerPaperButtonBTN" onClick={() => handleclick()} type="submit">Next</button>
            </div>
        </div>
    )
}

export default RegisterFor4;