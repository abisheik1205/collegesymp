import React from "react";
import "./DepartmentEvents.css";
import Divider from "../../Divider/Divider";
import { StorageData } from "../../Storage/Storage";
import AllDepartmentPageEachContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import { Link } from "react-router-dom";

const DepartmentEvents = () => {

    var Data = StorageData;
    var mainEvents = [];

    for (var i = 0; i < Data.length; i++) {
        var events = Data[i];
        mainEvents = mainEvents.concat(events);
    }

    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    shuffle(mainEvents);

    return(
        <div className="departmentEvents">
            <div className="departmentEventsFlex">
                <h2 className="departmentEventsHead">Departments</h2>
                <Link to={"/allevents"}><p className="departmentEventP">View All</p></Link>
            </div>
            <Divider color="whitesmoke" margin="18px 70px" />
            <br />
            <br />
            <div className="departmentsInGrid">
                { 
                    mainEvents.map((item, key) => {

                        if (key > 2) {
                            return;
                        }

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