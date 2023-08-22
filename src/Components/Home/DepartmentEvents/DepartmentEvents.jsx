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

        var events = Data[i].events;
        for (var j = 0; j < events.length; j++) {
            const element = events[j];
            console.log(element);
            mainEvents = mainEvents.concat(element);
        }
        console.log(Data.length);
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
                        
                        if (key > 5) {
                            return null;
                        }

                        if (key === 5) {
                            return(
                                <div className="departmentsInGridMore">
                                    <Link to={"/allevents"}>
                                        <h2 className="departmentsInGridMoreHead">More Details</h2>
                                    </Link>
                                </div>
                            );                            
                        }

                        return(
                            <AllDepartmentPageEachContainer image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} shortDescription={item.shortDescription} snap={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DepartmentEvents;