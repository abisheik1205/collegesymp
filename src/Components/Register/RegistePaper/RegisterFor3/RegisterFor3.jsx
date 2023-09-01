import React from "react";
import "./RegisterFor3.css";

const RegisterFor3 = ({ handleNextPaper, handlePreviousPaper }) => {

    const handleClick = () => {
        handleNextPaper()
    }

    return(
        <div className="RegisterFor3">
            <div className="ScanningCont">
                <div className="QrCodeHead">
                    <h1 className="QrCodeHeadHead">Scan the QR code to pay</h1>
                    <h1 className="QrCodeHeadHead">&#x20B9; 130</h1>
                </div>
                <div className="QrCode">
                    <img alt="QrCode" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO29jpK02kOHa3YX21knBGZT8z1ilBHEyt2g&usqp=CAU" className="QrCodeImage"/>
                </div>
                <div className="registerPaperButton">
                    <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                    <button className="registerPaperButtonBTN" onClick={() => handleClick()} type="submit">Next</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterFor3;