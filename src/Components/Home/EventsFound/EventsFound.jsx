import React from "react";
import { StorageData } from "../../Storage/Storage";
import Divider from "../../Divider/Divider";
import AllDepartmentPageEachContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";
import AllDepartmentPageContainer from "../../AllDepartmentpage/AllDepartmentPageContainer/AllDepartmentPageContainer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const EventsFound = () => {

    const [list, setList] = useState([]);

    var Data = StorageData;

    var allevents = [];

    const handleUser = () => {
        for (var i = 0; i < Data.length; i++) {
    
            var events = Data[i].events;
            for (var j = 0; j < events.length; j++) {
                const element = events[j];
                allevents = allevents.concat(element);
            }
    
            const shuffle = (array) => { 
                for (let i = array.length - 1; i > 0; i--) { 
                    const j = Math.floor(Math.random() * (i + 1)); 
                    [array[i], array[j]] = [array[j], array[i]]; 
                } 
                return array; 
            }; 
    
            shuffle(allevents);
            setList(allevents)
        }
    }

    console.log(list);

    useEffect(() => {
        handleUser();
    }, [])

    return(
        <div className="departmentEvents">
            <div className="departmentEventsFlex">
                <h2 className="departmentEventsHead">Events</h2>
                <Link to={"/allevents"}><p className="departmentEventP">View All Events</p></Link>
            </div>
            <Divider color="whitesmoke" margin="18px 70px" />
            <br />
            <br />
            <AllDepartmentPageContainer list={list} int={true}/>
        </div>
    )
}

export default EventsFound;