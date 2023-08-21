import React, { useState } from "react";
import "./DepartmentEvents.css";
import { Fade } from "react-reveal";

const DepartmentEach = () => {

    const [hover, setHover] = useState(false);

    const handleOver = () => {
        setHover(true);
        console.log("hovering")
    }
    
    const handleOut = () => {
        setHover(false)
        console.log("!hovering")
    }

    return(
        <div className="departmentsInGridMain">
            <h2 className="departmentsInGridEachHead">
                Computer Science | Day 1
            </h2>
            <br />
            <div className="departmentsInGridEach">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="logo" />
                <div className="departmentsInGridEachStackContentBG" onMouseOver={handleOver} onj onMouseOut={handleOut}>
                    <div className={hover? "departmentsInGridEachStackContent": "departmentsInGridEachStackContentHide"} >
                        <p className="departmentsInGridEachStackContentPara"><Fade bottom>The stage's heating up, so get your spirits ignited, as it's time for you to put on a costume of confidence and swagger your moves with your crew. Prepare to leave a mark on the dance floor.</Fade></p>
                    </div>
                    <div className={hover? "departmentsInGridEachStackHOVER": "departmentsInGridEachStack"}>
                        <h3 className="departmentsInGridEachStackHead">Hype It Up</h3>
                        <p className="departmentsInGridEachStackPara" style={hover? {display: "none"}: {display: 'block'}}>23/06/23</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepartmentEach;