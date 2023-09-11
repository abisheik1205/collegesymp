import React from "react";
import LoginRender from "./ListRender/ListRender";
import { useEffect } from "react";
import { useState } from "react";

const MainSearch = ({ selectedEvents, collegeName, name, phoneNumber, transactionID, photo, mailID, searchInput }) => {

        if (searchInput !== "") {

            return selectedEvents.map((item, key) => {


                if (item?.stringValue.toLowerCase().includes(searchInput.toLowerCase())) {
                    return <LoginRender key={key} name={name} collegeName={collegeName} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
                }
                return;
            })
        }

        return selectedEvents.map((item, key) => <LoginRender key={key} collegeName={collegeName} name={name} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
    );
}

export default MainSearch;