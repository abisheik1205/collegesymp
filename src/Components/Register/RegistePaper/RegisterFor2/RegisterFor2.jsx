import React, { useState } from "react";
import "./RegisterFor2.css";

const RegisterFor2 = ({ handleNextPaper }) => {


    const [selectedEvents, setSelectedEvents] = useState([]);

    const handleOnChange = (e) => {

        var Value = e.target.value;

        if (Value !== "") {
            setSelectedEvents((prevEvents) => [
                ...prevEvents, Value
            ])
        }
    }

    const handleNext = (e) => {

        e.preventDefault();
        if (selectedEvents.length > 0) {
            handleNextPaper();
        }else{
            alert("Select Events");
        }
    }

    return(
        <div className="RegisterFor2">
            <h2 className="InputForBiohead">Choose Event</h2>\
            <form onSubmit={(e) => handleNext(e)}>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 1:</label>
                    <select onChange={handleOnChange} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        <option value="rigatoni" className="EventOption">Event x</option> 
                        <option value="dave" className="EventOption">Event y</option> 
                        <option value="pumpernickel" className="EventOption">Event z</option> 
                        <option value="reeses" className="EventOption">Event a</option> 
                    </select>
                </div>
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 2:</label> 
                    <select onChange={handleOnChange} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        <option value="rigatoni" className="EventOption">Event x</option> 
                        <option value="dave" className="EventOption">Event y</option> 
                        <option value="pumpernickel" className="EventOption">Event z</option> 
                        <option value="reeses" className="EventOption">Event a</option> 
                    </select>
                </div>
            </div>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 3:</label>
                    <select onChange={(e) => handleOnChange(e)} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        <option value="rigatoni" className="EventOption">Event x</option> 
                        <option value="dave" className="EventOption">Event y</option> 
                        <option value="pumpernickel" className="EventOption">Event z</option> 
                        <option value="reeses" className="EventOption">Event a</option> 
                    </select>
                </div>
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 4:</label> 
                    <select onChange={(e) => handleOnChange(e)} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        <option value="rigatoni" className="EventOption">Event x</option> 
                        <option value="dave" className="EventOption">Event y</option> 
                        <option value="pumpernickel" className="EventOption">Event z</option> 
                        <option value="reeses" className="EventOption">Event a</option> 
                    </select>
                </div>
            </div>
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 5:</label> 
                    <select onChange={(e) => handleOnChange(e)} name="Event-1" className="EventDropdown"> 
                        <option value="" selected >Select Event</option>
                        <option value="rigatoni" className="EventOption">Event x</option> 
                        <option value="dave" className="EventOption">Event y</option> 
                        <option value="pumpernickel" className="EventOption">Event z</option> 
                        <option value="reeses" className="EventOption">Event a</option> 
                    </select>
                </div>
            </div>
            <div className="registerPaperButton">
                <button className="registerPaperButtonBTN" type="submit">Next</button>
            </div>
            </form>
        </div>
    )
}

export default RegisterFor2;