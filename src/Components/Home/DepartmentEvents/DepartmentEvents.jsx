import React from "react";
import "./DepartmentEvents.css";
import Divider from "../../Divider/Divider";
import { StorageData } from "../../Storage/Storage";
import AllDepartmentPageEachContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const DepartmentEvents = () => {

    var Data = StorageData;
    var mainEvents = [];

    for (var i = 0; i < Data.length; i++) {
        var events = Data[i];
        mainEvents = mainEvents.concat(events);
    }

    // Filter and sort mainEvents based on departmentName
    mainEvents = mainEvents.filter(event => event.departmentName); // Remove any events without a departmentName
    mainEvents.sort((a, b) => a.departmentName.localeCompare(b.departmentName)); // Sort by departmentName in alphabetical order


    // const shuffle = (array) => { 
    //     for (let i = array.length - 1; i > 0; i--) { 
    //         const j = Math.floor(Math.random() * (i + 1)); 
    //         [array[i], array[j]] = [array[j], array[i]]; 
    //     } 
    //     return array; 
    // }; 

    // shuffle(mainEvents);

    return(
        <div className="departmentEvents">
            <div className="departmentEventsFlex">
                <h2 className="departmentEventsHead">Departments</h2>
                {/* <Link to={"/allevents"}><p className="departmentEventP">View All</p></Link> */}
            </div>
            <Divider color="whitesmoke" margin="18px 70px" />
            <br />
            <br />
            <div className="departmentsInGrid">
                { 
                    mainEvents.map((item, key) => {

                        // if (key > 2) {
                        //     return;
                        // }

                        if (key%2 == 0) {
                            return(
                                <Fade left>
                                    <AllDepartmentPageEachContainer key={key} link="allevents" forHome={true} departmentMotto={item.departmentMotto} departmentName={item.departmentName} mainEventsimage={item.image} mainEventsdepartmentName={item.departmentName}/>
                                </Fade>
                            )
                        }else{
                            return(
                                <Fade right>
                                    <AllDepartmentPageEachContainer key={key} link="allevents" forHome={true} departmentMotto={item.departmentMotto} departmentName={item.departmentName} mainEventsimage={item.image} mainEventsdepartmentName={item.departmentName}/>
                                </Fade>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default DepartmentEvents;