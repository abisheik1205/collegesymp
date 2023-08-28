import React from "react";
import "./AllDepartmentPageContainer.css";
import AllDepartmentPageEachContainer from "./AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import { Fade } from "react-reveal";

const AllDepartmentPageContainer = ({ list }) => {

    return(
        <div className="AllDepartmentPageContainer">
            {
                list.map((item, key) => {
                    return(
                        <div key={key}>
                            {
                                key%2 === 0? <Fade slow left >
                                <AllDepartmentPageEachContainer link="eventpage" departmentMotto={item} image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} shortDescription={item.shortDescription} snap={item}/>
                            </Fade> : <Fade slow right>
                                <AllDepartmentPageEachContainer link="eventpage" departmentMotto={item} image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} shortDescription={item.shortDescription} snap={item}/>
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