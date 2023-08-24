import React, { useState } from "react";
import "./AllDepartmentPageEachContainer.css";
import Divider from "../../../Divider/Divider";
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

const AllDepartmentPageEachContainer = ({ mainEventsimage, mainEventsdepartmentName, link, image, departmentName, eventName, eventdescription, shortDescription, snap }) => {

    const [over, setOver] = useState(false);

    const handleOver = () => {
        setOver(true);
    }

    const handleOut = () => {
        setOver(false);
    }

    const dataToSend = {
        departmentName,
        back: false,
        departmentNamefoundBACk: false
    };

    return(
        <>
        {
                link === "eventpage"? <div className="AllDepartmentPageEachContainer">
                <div className={over? "AllDepartmentPageContainerEach": "AllDepartmentPageContainerEachOnHover"} style={over? {backdropFilter: 'blur(5px)'}: {}} onMouseOver={() => handleOver()} onMouseOut={() => handleOut()}>
                    <Link to={"/eventpage"} state={{ departmentName, image, eventName, shortDescription, eventdescription, rules: snap.rules, venue: snap.details.venue, phoneNumber: snap.coordinator.phoneNumber, date: snap.details.date, time: snap.details.time, facultyName: snap.faculty.name, coodinatorName: snap.coordinator.name }}>
                    <img className="AllDepartmentPageContainerEachImg" src={image} alt={departmentName}/>
                    <div className="AllDepartmentPageContainerEachStackForm" style={over? {justifyContent: 'center', backdropFilter: 'blur(3px)'}: {justifyContent: 'center'}}>
                        <div className="AllDepartmentPageContainerEachStackFormHeader" style={over? {marginBottom: '50px'}: {}}>
                            <h2 className="AllDepartmentPageContainerEachStackFormHeaderHead">{eventName}</h2>
                            <Divider margin="5px 20px" color="whitesmoke"/>
                            <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{shortDescription}</p>
                        </div>
                        <div className={over? "AllDepartmentPageContainerEachStackFormContent":'AllDepartmentPageContainerEachStackFormContentHide'}>
                            <Fade bottom>
                                <p>{eventdescription}</p>
                            </Fade>
                        </div>
                        {
                            !over? <><br /><br /></>: <></>
                        }
                        <div className="AllDepartmentPageContainerEachStackFormFooter">
                            <div>{departmentName}</div>
                            <div>View</div>
                        </div>  
                    </div>
                    </Link>
                </div>
            </div>: 
            <div className="AllDepartmentPageEachContainer">
                <div className={over? "AllDepartmentPageContainerEach": "AllDepartmentPageContainerEachOnHover"} style={over? {backdropFilter: 'blur(5px)'}: {}} onMouseOver={() => handleOver()} onMouseOut={() => handleOut()}>
                    <Link to={"/allevents"} state={{ dataToSend }}>
                    <img className="AllDepartmentPageContainerEachImg" src={mainEventsimage} alt={departmentName}/>
                    <div className="AllDepartmentPageContainerEachStackForm" style={over? {justifyContent: 'center', backdropFilter: 'blur(3px)'}: {justifyContent: 'center'}}>
                        <div className="AllDepartmentPageContainerEachStackFormHeader" style={over? {marginBottom: '50px'}: {}}>
                            <h2 className="AllDepartmentPageContainerEachStackFormHeaderHead">{mainEventsdepartmentName}</h2>
                            <Divider margin="5px 20px" color="whitesmoke"/>
                            <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{shortDescription}</p>
                        </div>
                        <div className={over? "AllDepartmentPageContainerEachStackFormContent":'AllDepartmentPageContainerEachStackFormContentHide'}>
                            <Fade bottom>
                                <p>{eventdescription}</p>
                            </Fade>
                        </div>
                        {
                            !over? <><br /><br /></>: <></>
                        }
                        <div className="AllDepartmentPageContainerEachStackFormFooter">
                            {/* <div>{departmentName}</div> */}
                            <div>View</div>
                        </div>  
                    </div>
                   </Link>
                </div>
            </div>
        }
        </>
    )
}

export default AllDepartmentPageEachContainer;