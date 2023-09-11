import React, { useState } from "react";
import "./AllDepartmentPageEachContainer.css";
import Divider from "../../../Divider/Divider";
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

const AllDepartmentPageEachContainer = ({ mainEventsimage, forHome, entertainmentPic, theme, departmentMotto, mainEventsdepartmentName, link, image, departmentName, eventName, eventdescription, shortDescription, snap }) => {

    const [over, setOver] = useState(false);

    const handleOver = () => {
        if (window.innerWidth > 1000) {
            if (!forHome) {
                setOver(true);
            }
        }
    }

    const handleOut = () => {

        if (window.innerWidth > 1000) {
            if (!forHome) {
                setOver(false);
            }
        }

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
                <div className={over? "AllDepartmentPageContainerEach": "AllDepartmentPageContainerEachOnHover"} style={over? forHome? {backdropFilter: 'blur(5px)', width: '150px', height: '150px'}: {backdropFilter: 'blur(5px)'}: forHome? {width: '150px', height: '150px'}: {}} onMouseOver={() => handleOver()} onMouseOut={() => handleOut()}>
                    <Link to={"/eventpage"} style={forHome? {cursor: 'none'}: {}} state={{ departmentName, entertainmentPic, image, theme, eventName, shortDescription, eventdescription, rules: snap.rules, venue: snap.details.venue, phoneNumber: snap.coordinator.phoneNumber, date: snap.details.date, time: snap.details.time, facultyName: snap.faculty.name, coodinatorName: snap.coordinator.name }}>
                    <img className="AllDepartmentPageContainerEachImg" style={forHome? {width: '150px', height: '150px'}: {}} src={image} alt={departmentName}/>
                    <div className="AllDepartmentPageContainerEachStackForm" style={over? forHome? {justifyContent: 'center', height: '150px', backdropFilter: 'blur(3px)'}: {justifyContent: 'center',  backdropFilter: 'blur(3px)'}: {justifyContent: 'center'}}>
                        <div className="AllDepartmentPageContainerEachStackFormHeader" style={over? {marginBottom: '50px'}: {}}>
                            <h2 className="AllDepartmentPageContainerEachStackFormHeaderHead">{eventName}</h2>
                            <Divider margin="5px 20px" color="whitesmoke"/>
                            <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{shortDescription}</p>
                        </div>
                        <div className={over? "AllDepartmentPageContainerEachStackFormContent":'AllDepartmentPageContainerEachStackFormContentHide'}>
                            <Fade bottom>
                                <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{eventdescription}</p>
                            </Fade>
                        </div>
                        {
                            !over? <><br /><br /></>: <></>
                        }
                        <div className="AllDepartmentPageContainerEachStackFormFooter" style={forHome? {height: '150px'}: {}}>
                            <div>{departmentName}</div>
                            <div>View</div>
                        </div>  
                    </div>
                    </Link>
                </div>
            </div>: 
            <div className="AllDepartmentPageEachContainer">
                <div className={over? "AllDepartmentPageContainerEach": "AllDepartmentPageContainerEachOnHover"} style={over? forHome? {backdropFilter: 'blur(5px)', width: '150px', height: '150px'}: {backdropFilter: 'blur(5px)'}: forHome? {width: '150px', height: '150px'}: {}} onMouseOver={() => handleOver()} onMouseOut={() => handleOut()}>
                    <Link to={"/allevents"} state={{ dataToSend }}>
                    <img className="AllDepartmentPageContainerEachImg" style={forHome? {width: '150px', height: '150px'}: {}} src={mainEventsimage} alt={departmentName}/>
                    <div className="AllDepartmentPageContainerEachStackForm" style={over? forHome? {justifyContent: 'center', top: "10%", height: '150px', backdropFilter: 'blur(3px)'}: {justifyContent: 'center',  backdropFilter: 'blur(3px)'}: {justifyContent: 'center'}}>
                        <div className="AllDepartmentPageContainerEachStackFormHeader" style={over? {marginBottom: '50px'}: forHome? {marginBottom: '0px'}: {}}>
                            <h2 className="AllDepartmentPageContainerEachStackFormHeaderHead" style={forHome? {fontSize: '1.25rem'}: {}}>{mainEventsdepartmentName}</h2>
                            <Divider margin="5px 20px" color="whitesmoke"/>
                            {/* <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{departmentMotto}</p> */}
                        </div>
                        <div className={over? "AllDepartmentPageContainerEachStackFormContent":'AllDepartmentPageContainerEachStackFormContentHide'}>
                            <Fade slow bottom>
                                <p className="AllDepartmentPageContainerEachStackFormHeaderPara">{departmentMotto}</p>
                            </Fade>
                        </div>
                        {
                            !over? <><br /><br /></>: <></>
                        }
                        {/* <div className="AllDepartmentPageContainerEachStackFormFooter" style={forHome? {height: '150px'}: {}}> */}
                            {/* <div>{departmentName}</div> */}
                            {/* <div>View</div> */}
                        {/* </div>   */}
                    </div>
                   </Link>
                </div>
            </div>
        }
        </>
    )
}

export default AllDepartmentPageEachContainer;