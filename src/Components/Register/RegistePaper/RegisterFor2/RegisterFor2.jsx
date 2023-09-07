import React, { useEffect, useState } from "react";
import "./RegisterFor2.css";
import { StorageData } from "../../../Storage/Storage";
import { Link } from "react-router-dom";
import RegisterSelector from "./RegisterSelector";

const RegisterFor2 = ({ handleNextPaper, handlePreviousPaper, finalSelectedEvents }) => {

    const [event1, setEvent1] = useState("")
    const [event2, setEvent2] = useState("")
    const [event3, setEvent3] = useState("")
    const [event4, setEvent4] = useState("")
    const [event5, setEvent5] = useState("")

    const val = "";

    const [allevents, setAllEvents] = useState([]);

    const [selectedEvents, setSelectedEvents] = useState([]);

    var Data = StorageData;

    const handleChange1 = (e) => {
        setEvent1(e);
    }
    const handleChange2 = (e) => {
        setEvent2(e);
    }
    const handleChange3 = (e) => {
        setEvent3(e)
    }
    const handleChange4 = (e) => {
        setEvent4(e)
    }
    const handleChange5 = (e) => {
        setEvent5(e)
    }

    const handletosaveselectedEvents = () => {
        finalSelectedEvents(selectedEvents);
    }

    const handleNext = (e) => {

        e.preventDefault();
        if (event1 || event2 || event3 || event4 || event5) {

            // setSelectedEvents([event1, event2, event3, event4, event5].filter(Boolean));

            if (event1 !== "") {
                setSelectedEvents((prevItems) => [
                    ...prevItems, event1
                ]);
            }
            if (event2.length > 1) {
                setSelectedEvents((prevItems) => [
                    ...prevItems, event2
                ])
            }
            if (event3.length > 1) {
                setSelectedEvents((prevItems) => [
                    ...prevItems, event3
                ])
            }
            if (event4.length > 1) {
                setSelectedEvents((prevItems) => [
                    ...prevItems, event4
                ])
            }
            if (event5.length > 1) {
                setSelectedEvents((prevItems) => [
                    ...prevItems, event5
                ])
            }

            handletosaveselectedEvents();
            // handleNextPaper();
        }else{
            alert("Select An Event");
        }
    }

    const handleinitial = () => {
        var oollEvents = [];
        if (allevents.length === 0) {
            for (var i = 0; i < Data.length; i++) {
    
                var events = Data[i].events;
                for (var j = 0; j < events.length; j++) {
                    const element = events[j];
                    
                    oollEvents = oollEvents.concat(element);
                }

            }
            setAllEvents(oollEvents);
        }else{
            console.log(allevents);
        }
    }

    useEffect(() => {
        handleinitial();
        if (selectedEvents.length > 0) {
            handletosaveselectedEvents();
            handleNextPaper();
        }
    }, [selectedEvents])

    return(
        <div className="RegisterFor2">
            <h2 className="InputForBiohead">Choose Event</h2>
            <p className="noteonRegisterFor2"><Link to={"/allevents"} style={{color: "grey"}}>View All Events</Link></p>
            <form onSubmit={(e) => handleNext(e)}>
            <div className="RegisterFor2Input">
                <RegisterSelector event1="val" num="1" handleChange1={handleChange1} allevents={allevents} />
                <RegisterSelector event1="val" num="2" handleChange1={handleChange2} allevents={allevents} />
            </div>
            <div className="RegisterFor2Input">
                <RegisterSelector event1={val} num="3" handleChange1={handleChange3} allevents={allevents} />

                <RegisterSelector event1={val} num="4" handleChange1={handleChange4} allevents={allevents} />
            </div>
            <div className="RegisterFor2Input">
                <RegisterSelector event1={val} num="5" handleChange1={handleChange5} allevents={allevents} />
            </div>
            <div className="registerPaperButton">
                <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                <button className="registerPaperButtonBTN" type="submit">Next</button>
            </div>
            </form>
        </div>
    )
}

export default RegisterFor2;