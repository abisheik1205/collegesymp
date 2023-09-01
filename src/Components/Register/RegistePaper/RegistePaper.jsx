import React from "react";
import Registerinstruction from "../RegisterInstruction/RegisterInstruction";
import "./RegistePaper.css";
import { useState } from "react";
import RegisterFor1 from "./RegisterFor1/RegisterFor1";
import RegisterFor2 from "./RegisterFor2/RegisterFor2";
import RegisterFor3 from "./RegisterFor3/RegisterFor3";
import RegisterFor4 from "./RegisterFor4/RegisterFor4";

const RegistePaper = () => {

    const [currentPaper, setCurrentPaper] = useState(1);

    const handleNextPaper = () => {
        setCurrentPaper(currentPaper + 1);
        
        console.log("Calling");
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
                currentPaper === 0? <RegisterFor1 handleNextPaper={handleNextPaper}/>: currentPaper === 1? <RegisterFor2 handleNextPaper={handleNextPaper}/>: currentPaper === 2? <RegisterFor3 />: currentPaper ===3? <RegisterFor4 />: <></>
            } 

            </div>
        </div>
    )
}

export default RegistePaper;