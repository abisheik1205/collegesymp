import React from "react";
import LoginRender from "./ListRender/ListRender";
import { useEffect } from "react";
import { useState } from "react";

const MainSearch = ({ selectedEvents, name, phoneNumber, transactionID, photo, mailID, searchInput }) => {

        if (searchInput !== "") {

            return selectedEvents.map((item, key) => {


                if (item?.stringValue.toLowerCase().includes(searchInput.toLowerCase())) {
                    return <LoginRender name={name} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
                }
                return;
            })
        }

        return selectedEvents.map((item, key) => <LoginRender name={name} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
    );
}

export default MainSearch;