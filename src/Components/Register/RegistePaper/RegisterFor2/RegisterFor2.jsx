import React from "react";
import "./RegisterFor2.css";

const RegisterFor2 = () => {
    return(
        <div className="RegisterFor2">
            <div className="RegisterFor2Input">
                <div className="RegisterFor2InputDrop">
                    <label for="Event-1" className="Event_label">Event 1:</label> 
                    <select name="Event-1" className="EventDropdown"> 
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
        </div>
    )
}

export default RegisterFor2;