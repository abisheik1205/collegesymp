import React from "react";
import "./EventpageHeader.css";

const EventPageHeader = ({ departmentName, handleNavigation }) => {


    return(
        <div className="EventpageHeader">
            <div className="EventpageHeaderType">
                <p className="EventpageHeaderTypePara">Event / {departmentName}</p>
            </div>
            <div className="GoBack">
                <p className="GoBackPara" onClick={() => handleNavigation()}>Back</p>
            </div>
        </div>
    )
}

export default EventPageHeader;