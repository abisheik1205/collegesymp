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
    const [selected, setSelectedEvents] = useState([]);

    const handleNextPaper = () => {
        setCurrentPaper(currentPaper + 1);
    }

    const handlePreviousPaper = () => {
        setCurrentPaper(currentPaper - 1);
    }

    const selectedEvents = (selectedEvents) => {
        setSelectedEvents(selectedEvents);
        console.log(selectedEvents);
    }

    return(
        <div className="RegistePaper">
            <Registerinstruction />
            <div className="mainRegisterPaper">
                <div className="RegistePaperIndicator">
                    <p className={currentPaper == 0? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>1</p>
                    <p className={currentPaper == 1? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>2</p>
                    <p className={currentPaper == 2? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>3</p>
                    <p className={currentPaper == 3? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>4</p>
                    <p className={currentPaper == 4? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>5</p>
                </div>
            
            {
                currentPaper === 0? <RegisterFor1 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper}/>: currentPaper === 1? <RegisterFor2 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper} finalSelectedEvents={selectedEvents}/>: currentPaper === 2? <RegisterFor3 handlePreviousPaper={handlePreviousPaper} handleNextPaper={handleNextPaper}/>: currentPaper ===3? <RegisterFor4 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper}/>: <RegisterFor5 handlePreviousPaper={handlePreviousPaper}/>
            } 

            </div>
        </div>
    )
}

export default RegistePaper;