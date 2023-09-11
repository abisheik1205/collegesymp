import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { StorageData } from "../Storage/Storage";
import { Fade } from "react-reveal";

const Header = () => {

    var Data = StorageData;
    const [allevents, setAllEvents] = useState([]);
    const [desktop, setDesktop] = useState(false);
    
    
    const handleinitial = () => {
        if (window.innerWidth > 1000) {
            setDesktop(true)
        }
        var oollEvents = [];
        if (allevents.length === 0) {
            for (var i = 0; i < Data.length; i++) {
    
                var events = Data[i].departmentName;
                oollEvents = oollEvents.concat(events);
            }
            
            oollEvents = oollEvents.filter(event => event); // Remove any events without a departmentName
            oollEvents.sort((a, b) => a.localeCompare(b)); // Sort by departmentName in alphabetical order
            
            setAllEvents(oollEvents);
        }else{
            //Error Found? Funny
        }
    }

    useEffect(() => {
        handleinitial();
    })

    return(
        <div className="HeaderMain">
            {
                desktop? <><div className="HeaderMainLinkEvent">    
                <Link to={"/allevents"}><p className="HeaderMainLinkEventhOVER">Events</p></Link>
                <Fade>
                    <div className="NavForEvents">
                        {
                            allevents.map((item, key) => {

                                const dataToSend = {
                                    departmentName: item,
                                    back: false,
                                    departmentNamefoundBACk: false
                                };
                                
                                return <>
                                <Link to={"/allevents"} state={{ dataToSend }}>
                                    <p style={{color: 'black'}} key={key} className="NavForEventsLink">{item}</p>
                                </Link>
                                </> 
                            })
                        }
                    </div>
                </Fade>
            </div>
            <Link to={"/signup"}><p className="HeaderMainLink">Sign Up</p></Link></> : <>
            <Link to={"/allevents"}><p className="HeaderMainLinkEventhOVER">Events</p></Link>
            <Link to={"/signup"}><p className="HeaderMainLink">Sign Up</p></Link>
</>
            }
        </div>
    )
}

export default Header;