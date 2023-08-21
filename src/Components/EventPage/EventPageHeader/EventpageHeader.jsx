import React from "react";
import "./EventpageHeader.css";
import { useNavigate } from 'react-router-dom';


const EventPageHeader = ({ departmentName }) => {

    const navigate = useNavigate();

    return(
        <div className="EventpageHeader">
            <div className="EventpageHeaderType">
                <p className="EventpageHeaderTypePara">Event / {departmentName}</p>
            </div>
            <div className="GoBack">
                <p className="GoBackPara" onClick={() => navigate(-1)}>Back</p>
            </div>
        </div>
    )
}

export default EventPageHeader;