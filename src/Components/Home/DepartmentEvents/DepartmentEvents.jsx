import React from "react";
import "./DepartmentEvents.css";
import DepartmentEach from "./DepartmentEach";

const DepartmentEvents = () => {

    return(
        <div className="departmentEvents">
            <h2 className="departmentEventsHead">Department</h2>
            <div className="divider"></div>
            <br />
            <br />
            <div className="departmentsInGrid">
                { 
                    ["nwe", "age", "nwe", "age", "nwe", "age", "wrh"].map((items, key) => { 
                        
                        if (key > 5) {
                            return null;
                        }

                        if (key === 5) {
                            return(
                                <div className="departmentsInGridMore">
                                    <h2 className="departmentsInGridMoreHead">More Details</h2>
                                </div>
                            );                            
                        }

                        return(
                            <DepartmentEach />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DepartmentEvents;