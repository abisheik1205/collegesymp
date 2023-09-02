import React, { useEffect, useState } from "react";
import "./RegisterFor2.css";
import { StorageData } from "../../../Storage/Storage";
import { Link } from "react-router-dom";

const RegisterFor2 = ({ handleNextPaper, handlePreviousPaper, finalSelectedEvents }) => {

    const [event1, setEvent1] = useState("")
    const [event2, setEvent2] = useState("")
    const [event3, setEvent3] = useState("")
    const [event4, setEvent4] = useState("")
    const [event5, setEvent5] = useState("")

    const [selectedEvents, setSelectedEvents] = useState([]);

    var Data = StorageData;

    // var selectedEvents = [];

    var allevents = [];

    for (var i = 0; i < Data.length; i++) {

        var events = Data[i].events;
        for (var j = 0; j < events.length; j++) {
            const element = events[j];
            allevents = allevents.concat(element);
        }
    }

    const handleChange1 = (e) => {
        setEvent1(e)
    }
    const handleChange2 = (e) => {
        setEvent2(e)
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
        if (event1.length > 0 || event2.length > 0 || event3.length > 0 || event4.length > 0 || event5.length > 0) {
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

            // handletosaveselectedEvents();
            // handleNextPaper();
        }else{
            alert("Select An Event");
        }
    }

    useEffect(() => {
        if (selectedEvents.length > 0) {
            handletosaveselectedEvents();
            handleNextPaper();
        }
    }, [selectedEvents])

    return(
        <div className="RegisterFor2">
            <h2 className="InputForBiohead">Choose Event</h2>
            <p className="noteonRegisterFor2"><Link to={"/allevents"} style={{color: "purple"}}>View All Events</Link></p>
            <form onSubmit={(e) => handleNext(e)}>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 1:</label>
                    <select onChange={(e) => handleChange1(e.target.value)} defaultValue={event1} name="Event-1" className="EventDropdown">
                    <option value="" selected >Select Event</option>
                        {
                            allevents.map((item, key) => {
                                return(
                                    <option key={key} value={item.eventName + " - " + item.departmentName} className="EventOption">{item.eventName} - {item.departmentName}</option> 
                                )
                            })
                        }
                    </select>
                </div>
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 2:</label> 
                    <select onChange={(e) => handleChange2(e.target.value)} defaultValue={event2} name="Event-1" className="EventDropdown"> 
                    <option value="" selected >Select Event</option>
                        {
                            allevents.map((item, key) => {
                                return(
                                    <option key={key} value={item.eventName + " - " + item.departmentName} className="EventOption">{item.eventName} - {item.departmentName}</option> 
                                )
                            })
                        } 
                    </select>
                </div>
            </div>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 3:</label>
                    <select onChange={(e) => handleChange3(e.target.value)} defaultValue={event3} name="Event-1" className="EventDropdown"> 
                    <option value="" selected >Select Event</option>
                        {
                            allevents.map((item, key) => {
                                return(
                                    <option key={key} value={item.eventName + " - " + item.departmentName} className="EventOption">{item.eventName} - {item.departmentName}</option> 
                                )
                            })
                        }
                    </select>
                </div>
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 4:</label> 
                    <select onChange={(e) => handleChange4(e.target.value)} defaultValue={event4} name="Event-1" className="EventDropdown"> 
                    <option value="" selected >Select Event</option>
                        {
                            allevents.map((item, key) => {
                                return(
                                    <option key={key} value={item.eventName + " - " + item.departmentName} className="EventOption">{item.eventName} - {item.departmentName}</option> 
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 5:</label> 
                    <select onChange={(e) => handleChange5(e.target.value)} defaultValue={event5} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        {
                            allevents.map((item, key) => {
                                return(
                                    <option key={key} value={item.eventName + " - " + item.departmentName} className="EventOption">{item.eventName} - {item.departmentName}</option> 
                                )
                            })
                        }
                    </select>
                </div>
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