import React from "react";
import Registerinstruction from "../RegisterInstruction/RegisterInstruction";
import "./RegistePaper.css";
import { useState } from "react";
import RegisterFor1 from "./RegisterFor1/RegisterFor1";
import RegisterFor2 from "./RegisterFor2/RegisterFor2";
import RegisterFor3 from "./RegisterFor3/RegisterFor3";
import RegisterFor4 from "./RegisterFor4/RegisterFor4";
import RegisterFor5 from "./RegisterFor5/RegisterFor5";

const RegistePaper = () => {

    const [currentPaper, setCurrentPaper] = useState(0);

    const handleNextPaper = () => {
    
        setCurrentPaper(currentPaper + 1);
    
    }

    const handlePreviousPaper = () => {
        
        setCurrentPaper(currentPaper - 1);

    }

    return(
        <div className="RegistePaper">
            <Registerinstruction />
            <div className="mainRegisterPaper">
                <div className="RegistePaperIndicator">
                    <p className="RegistePaperIndicatorEach">1</p>
                    <p className="RegistePaperIndicatorEach">2</p>
                    <p className="RegistePaperIndicatorEach">3</p>
                    <p className="RegistePaperIndicatorEach">4</p>
                    <p className="RegistePaperIndicatorEach">5</p>
                </div>
            
            {
                currentPaper === 0? <RegisterFor1 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper}/>: currentPaper === 1? <RegisterFor2 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper}/>: currentPaper === 2? <RegisterFor3 handlePreviousPaper={handlePreviousPaper} handleNextPaper={handleNextPaper}/>: currentPaper ===3? <RegisterFor4 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper}/>: <RegisterFor5 handlePreviousPaper={handlePreviousPaper}/>
            } 

            </div>
        </div>
    )
}

export default RegistePaper;