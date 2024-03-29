import React, { useState, useEffect } from "react";
import "./DepartmentEvents.css";
import Divider from "../../Divider/Divider";
import { StorageData } from "../../Storage/Storage";
import AllDepartmentPageEachContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import arrow from "../../../assets/arrow.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const DepartmentEvents = () => {
    var Data = StorageData;
    var mainEvents = [];

    const [itsMobile, setMobile] = useState();
    const [scrollAmount, setScrollAmount] = useState(1);

    for (var i = 0; i < Data.length; i++) {
        var events = Data[i];
        mainEvents = mainEvents.concat(events);
    }

    if (window.innerWidth > 1000) {
        // Filter and sort mainEvents based on departmentName
        mainEvents = mainEvents.filter(event => event.departmentName); // Remove any events without a departmentName
        mainEvents.sort((a, b) => a.departmentName.localeCompare(b.departmentName)); // Sort by departmentName in alphabetical order
    }else{
        const shuffle = (array) => { 
            for (let i = array.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [array[i], array[j]] = [array[j], array[i]]; 
            } 
            return array; 
        }; 

        shuffle(mainEvents);
    }

    return (    
        <div className="departmentEvents">
            <div className="departmentEventsFlex">
                <h2 className="departmentEventsHead">Departments</h2>
                {
                    window.innerWidth < 1000?<Link to={"/allevents"}><p className="departmentEventP">View All</p></Link>: <></>   
                }
            </div>
            <Divider color="whitesmoke" margin="18px 70px" />
             <br /> 
            <div className="departmentsInGrid">
                {mainEvents.map((item, key) => {

                    return (
                            <AllDepartmentPageEachContainer
                                link="allevents"
                                key={key}
                                departmentMotto={item.departmentMotto}
                                departmentName={item.departmentName}
                                mainEventsimage={item.image}
                                mainEventsdepartmentName={item.departmentName}
                            />
                    );
                    
                })}
            </div>
        </div>
    );
}

export default DepartmentEvents;
