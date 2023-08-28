import React from "react";
import "./DepartmentEvents.css";
import Divider from "../../Divider/Divider";
import { StorageData } from "../../Storage/Storage";
import AllDepartmentPageEachContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";

const DepartmentEvents = () => {

    var Data = StorageData;
    var mainEvents = [];

    for (var i = 0; i < Data.length; i++) {
        var events = Data[i];
        mainEvents = mainEvents.concat(events);
    }

    return(
        <div className="departmentEvents">
            <h2 className="departmentEventsHead">Department</h2>
            <Divider color="whitesmoke" margin="18px 70px" />
            <br />
            <br />
            <div className="departmentsInGrid">
                { 
                    mainEvents.map((item, key) => {
                        return(
                            <AllDepartmentPageEachContainer key={key} link="allevents" departmentMotto={item.departmentMotto} departmentName={item.departmentName} mainEventsimage={item.image} mainEventsdepartmentName={item.departmentName}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DepartmentEvents;