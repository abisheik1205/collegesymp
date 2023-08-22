import React from "react";
import "./DepartmentEvents.css";
import DepartmentEach from "./DepartmentEach";
import { Link } from "react-router-dom";
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

    console.log(mainEvents[0]);

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
                            <AllDepartmentPageEachContainer link="allevents" mainEventsimage={item.image} mainEventsdepartmentName={item.departmentName}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DepartmentEvents;