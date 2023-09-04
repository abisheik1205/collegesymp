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
                    <h1 className="QrCodeHeadHead">Card Details</h1>
                    <h1 className="QrCodeHeadHead">&#x20B9; 130</h1>
                </div>
                <div className="QrCode">
                    <div className="QrCodeInside">
                        <p className="QrCodePara"><span className="QrCodeParaBold">Bank Name: </span> Union Bank Of India</p>
                        <p className="QrCodePara"><span className="QrCodeParaBold">Branch Name: </span> SSI Guindy, Chennai 600032</p>
                        <p className="QrCodePara"><span className="QrCodeParaBold">IFSC Code: </span> UBIN0552631</p>
                        <p className="QrCodePara"><span className="QrCodeParaBold">Account No: </span> 526301010020010</p>
                        <br />
                        <p className="noteInqr">Kindly mention name and college while making the payments</p>
                    </div>
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