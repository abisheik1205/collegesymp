import React from "react";
import "./AllDepartmentPageContainer.css";
import AllDepartmentPageEachContainer from "./AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import { StorageData } from "../../Storage/Storage";
import { Fade } from "react-reveal";

const AllDepartmentPageContainer = ({ list }) => {
    
    var Data = StorageData;
    var allevents = [];

    var computerScience = [];
    var informationTechnology = [];
    var ECE = [];
    var AIDS = [];
    var automobile = [];
    var Mech = [];
    var Mechetronics = [];
    var aeroEvents = [];
    var civil = [];
    var Ft = [];

    for (var i = 0; i < Data.length; i++) {

        var events = Data[i].events;
        for (var j = 0; j < events.length; j++) {
            const element = events[j];
            console.log(element);
            allevents = allevents.concat(element);
        }

        for (let computersciencecount = 0; computersciencecount < Data.length; computersciencecount++) {
            if (Data[computersciencecount].departmentName == "Computer Science") {
                computerScience = computerScience.concat(Data[computersciencecount]);
            }
            
        }
    }

    return(
        <div className="AllDepartmentPageContainer">
            {
                list.map((item, key) => {
                    return(
                        <div key={key}>
                            {
                                key%2 == 0? <Fade slow left >
                                <AllDepartmentPageEachContainer link="eventpage"  image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} shortDescription={item.shortDescription} snap={item}/>
                            </Fade> : <Fade slow right>
                                <AllDepartmentPageEachContainer link="eventpage" image={item.image} eventName={item.eventName} departmentName={item.departmentName} eventdescription={item.description} shortDescription={item.shortDescription} snap={item}/>
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