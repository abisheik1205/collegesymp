import React from "react";
import LoginRender from "./ListRender/ListRender";

const MainSearch = ({ selectedEvents, name, phoneNumber, transactionID, photo, mailID,  }) => {
    
    console.log(selectedEvents);

    return(
        selectedEvents.map((item, key) => {
            return(
            <LoginRender name={name} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
            )
        })
    )
}

export default MainSearch;