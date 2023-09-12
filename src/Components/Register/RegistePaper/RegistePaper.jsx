import React from "react";
import Registerinstruction from "../RegisterInstruction/RegisterInstruction";
import "./RegistePaper.css";
import { useState, useEffect } from "react";
import RegisterFor1 from "./RegisterFor1/RegisterFor1";
import RegisterFor2 from "./RegisterFor2/RegisterFor2";
import RegisterFor3 from "./RegisterFor3/RegisterFor3";
import RegisterFor4 from "./RegisterFor4/RegisterFor4";
import RegisterFor5 from "./RegisterFor5/RegisterFor5";
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const RegistePaper = () => {
    const navigate = useNavigate();

    const [dialog, setDialog] = useState(true);

    const [currentPaper, setCurrentPaper] = useState(0);
    const [selected, setSelectedEvents] = useState([]);

    const [bio, setBio] = useState({
        name: "",
        departmentName: "",
        phoneNumber: "",
        collegeName: "",
        mailAdress: "",
    });

    const handleNextPaper = () => {
        setCurrentPaper(currentPaper + 1);
    }

    var registerDone = localStorage.getItem("register");

    var mailIDRegistered = localStorage.getItem("mailAdress");
    var mailIDLoggedIn = localStorage.getItem("email");

    console.log(mailIDRegistered);
    console.log(mailIDLoggedIn);

    const handlePreviousPaper = () => {
        setCurrentPaper(currentPaper - 1);
    }

    const selectedEvents = (selectedEvents) => {
        setSelectedEvents(selectedEvents);
        console.log(selectedEvents);
    }

    const handleclick = () => {
        localStorage.setItem("register", "Done");
        localStorage.setItem("mailAdress", bio.mailAdress);

        navigate('/', { replace: true });
    }   

    const handleBio = (name, collegeName, departmentName, phoneNumber, mailAdress) => {
        setBio({
            name: name,
            collegeName: collegeName,
            departmentName: departmentName,
            phoneNumber: phoneNumber,
            mailAdress: mailAdress,
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        registerDone === "Done" && mailIDLoggedIn == mailIDRegistered ? <div style={{display:'flex', fontFamily: 'poppins', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '100px 40px'}}>
            <h1 style={{textAlign: 'center', color: 'whitesmoke'}}>You've Already Regisetered!!</h1>
            <br />
            <br />
            <p style={{textAlign: 'center', color: 'whitesmoke', fontSize: 'small'}}>If you have any changes, you can come to college on 22nd/23rd and change. </p>
        </div> :
        <div className="RegistePaper">
            <Dialog open={dialog}>
              {/* <p className="dialogBoxHeadX">X</p> */}
              <DialogTitle style={{textAlign: 'center'}} className="dialogBoxHeadInstruc">Steps To Be Followed</DialogTitle>
              <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>1. Enter the personal info on the first page.</p>
              <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>2. Can select up to 5 events or atleast one event.</p>
              <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>3. Should make a manual payment of Rs. 130 with the given IFSC code/account number.</p>
              <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>4. Upload the screenshot and enter the transaction ID on the following page.</p>
              <p className="dialogBoxHeadInstrucRuledisclaimer">Incase of payment failure college won't take responsiblity</p>
              {/* <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>5. College sends a confirmation email to the registered email ID.</p> */}
              <br />
              <button onClick={() => setDialog(false)} className="DialogBtn">Done!</button>
              <br />
              <br />
            </Dialog>
              <br />
            <Registerinstruction />
            <div className="mainRegisterPaper">
                <div className="RegistePaperIndicator">
                    <p className={currentPaper === 0? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>1</p>
                    <p className={currentPaper === 1? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>2</p>
                    <p className={currentPaper === 2? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>3</p>
                    <p className={currentPaper === 3? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>4</p>
                    <p className={currentPaper === 4? "RegistePaperIndicatorEachSelected" :"RegistePaperIndicatorEach"}>5</p>
                </div>
            
            {
                currentPaper === 0? <RegisterFor1 handleNextPaper={handleNextPaper} handleBio={handleBio} handlePreviousPaper={handlePreviousPaper}/>: currentPaper === 1? <RegisterFor2 handleNextPaper={handleNextPaper} handlePreviousPaper={handlePreviousPaper} finalSelectedEvents={selectedEvents}/>: currentPaper === 2? <RegisterFor3 handlePreviousPaper={handlePreviousPaper} handleNextPaper={handleNextPaper}/>: currentPaper ===3? <RegisterFor4 handleNextPaper={handleNextPaper} bio={bio} selected={selected} handlePreviousPaper={handlePreviousPaper}/>: <RegisterFor5 handlePreviousPaper={handlePreviousPaper} handleclick={handleclick} bio={bio} selected={selected}/>
            } 

            </div>
        </div>
    )
}

export default RegistePaper;