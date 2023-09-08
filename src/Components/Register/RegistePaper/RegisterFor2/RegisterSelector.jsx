import React from "react";

const RegisterSelector = ({ allevents, handleChange1, num, event1, selectedEvents }) => {
    return (
        <div className="RegisterFor2InputDrop">
            <label htmlFor={`Event-${num}`} className="Event_label">Event {num}:</label>
            <select onChange={handleChange1} name={`Event-${num}`} value={event1} className="EventDropdown">
                <option value="">Select Event</option>
                {
                    allevents.map((item, key) => {
                        const optionValue = `${item.eventName} - ${item.departmentName}`;
                        if (selectedEvents.includes(optionValue)) {
                            return (
                                <option key={key} value={optionValue} className="EventOption" disabled>
                                    <p>{item.eventName} - {item.departmentName}</p>
                                </option>
                            );
                        } else {
                            return (
                                <option key={key} value={optionValue} className="EventOption">
                                    {item.eventName} - {item.departmentName}
                                </option>
                            );
                        }
                    })
                }
            </select>
        </div>
    );
}




export default RegisterSelector;