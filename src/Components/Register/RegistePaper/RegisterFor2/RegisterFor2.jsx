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

    const [val, setVal] = useState(["one", "two", "three", "four", "five"]);

    const [allevents, setAllEvents] = useState([]);

    const [selectedEvents, setSelectedEvents] = useState([]);

    var Data = StorageData;

    const handleChange1 = (e) => {
        const selectedValue = e.target.value;
        setEvent1(selectedValue);
        const updatedVal = [e.target.value, ...val.slice(1)];
        
        // Update the state with the new array
        setVal(updatedVal);
    }

    const handleChange2 = (e) => {
        const selectedValue = e.target.value;

        const updatedVal = [val[0], e.target.value, ...val.slice(2)];
        setEvent2(selectedValue);

        // Update the state with the new array
        setVal(updatedVal);
    }

    const handleChange3 = (e) => {
        const selectedValue = e.target.value;
        setEvent3(selectedValue)
        const updatedVal = [val[0], val[1], e.target.value, ...val.slice(3)];
        
        // Update the state with the new array
        setVal(updatedVal);
    }
    const handleChange4 = (e) => {
        
        const selectedValue = e.target.value;
        setEvent4(selectedValue)
        const updatedVal = [val[0], val[1], val[2], e.target.value, ...val.slice(4)];

        // Update the state with the new array
        setVal(updatedVal);
    }
    const handleChange5 = (e) => {
        const selectedValue = e.target.value;
        setEvent5(selectedValue);
        const updatedVal = [val[0], val[1], val[2], val[3], e.target.value, ...val.slice(5)];

        // Update the state with the new array
        setVal(updatedVal);
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

            oollEvents = oollEvents.filter(event => event.departmentName); // Remove any events without a departmentName
            oollEvents.sort((a, b) => a.departmentName.localeCompare(b.departmentName)); // Sort by departmentName in alphabetical order

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
                <RegisterSelector event1={event1} num="1" selectedEvents={val} handleChange1={handleChange1} allevents={allevents} />
                <RegisterSelector event1={event2} num="2" selectedEvents={val} handleChange1={handleChange2} allevents={allevents} />
            </div>
            <div className="RegisterFor2Input">
                <RegisterSelector event1={event3} num="3" selectedEvents={val} handleChange1={handleChange3} allevents={allevents} />

                <RegisterSelector event1={event4} num="4" selectedEvents={val} handleChange1={handleChange4} allevents={allevents} />
            </div>
            <div className="RegisterFor2Input">
                <RegisterSelector event1={event5} num="5" selectedEvents={val} handleChange1={handleChange5} allevents={allevents} />
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