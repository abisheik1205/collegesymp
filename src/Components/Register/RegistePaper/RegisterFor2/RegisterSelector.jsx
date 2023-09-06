import React from "react";

const RegisterSelector = ({ allevents, handleChange1, num, event1 }) => {
    return(
        <div className="RegisterFor2InputDrop">
            <label for="Event-1" className="Event_label">Event {num}:</label>
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
    )
}

export default RegisterSelector;