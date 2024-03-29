import React from "react";
import "./AllDepartmentPageContainer.css";
import AllDepartmentPageEachContainer from "./AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import { Fade } from "react-reveal";

const AllDepartmentPageContainer = ({ list, int }) => {

    return(
        <div className="AllDepartmentPageContainer">
            {
                list.map((item, key) => {
                    if (int) {
                        if (key > 2) {
                            return;
                        }
                    }

                    return(
                        <div key={key}>
                            {
                                key%2 === 0? <Fade slow left >
                                <AllDepartmentPageEachContainer round1={item.round1} round2={item.round2} link="eventpage" entertainmentPic={item.entertainmentPhoto} departmentMotto={item} image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} textLink={item.textLink} theme={item.theme} shortDescription={item.shortDescription} snap={item}/>
                            </Fade> : <Fade slow right>
                                <AllDepartmentPageEachContainer link="eventpage" departmentMotto={item} round={item.round1} round2={item.round2} image={item.image} entertainmentPic={item.entertainmentPhoto} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} textLink={item.textLink} theme={item.theme} shortDescription={item.shortDescription} snap={item}/>
                            </Fade>
                            }
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllDepartmentPageContainer;