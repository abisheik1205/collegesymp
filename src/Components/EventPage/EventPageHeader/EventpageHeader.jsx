import React from "react";
import "./EventpageHeader.css";

const EventPageHeader = ({ departmentName, handleNavigation }) => {


    return(
        <div className="EventpageHeader">
            <div className="EventpageHeaderType">
                <p className="EventpageHeaderTypePara"><a href="/">Home</a> &gt; <a href="/allevents">Event</a> &gt; {departmentName}</p>
            </div>
            <div className="GoBack">
                <p className="GoBackPara" onClick={() => handleNavigation()}>Back</p>
            </div>
        </div>
    )
}

export default EventPageHeader;