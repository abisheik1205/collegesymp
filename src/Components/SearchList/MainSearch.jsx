import React from "react";
import LoginRender from "./ListRender/ListRender";

const MainSearch = ({ selectedEvents, departmentname, collegeName, name, phoneNumber, transactionID, photo, mailID, searchInput }) => {

        if (searchInput !== "") {

            return selectedEvents.map((item, key) => {

                if (item?.stringValue.toLowerCase().includes(searchInput.toLowerCase())) {
                    return <LoginRender key={key} departmentname={departmentname} name={name} collegeName={collegeName} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
                }
                return null;
            })
        }

        return selectedEvents.map((item, key) => <LoginRender key={key} departmentname={departmentname} collegeName={collegeName} name={name} transactionID={transactionID} phoneNumber={phoneNumber} Eventname={item?.stringValue} mailID={mailID} photo={photo} />
    );
}

export default MainSearch;