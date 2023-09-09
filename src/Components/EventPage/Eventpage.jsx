import React, { useEffect, useState } from "react";
import './EventPage.css';
import { useLocation  } from "react-router-dom";
import EventPageHeader from "./EventPageHeader/EventpageHeader";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';
import iplEntertainmentPic from "../../assets/iplEntertainmentPic.png";

export const Eventpage = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    const { departmentName, image, entertainmentPic, theme, eventName, shortDescription, eventdescription, rules, venue, phoneNumber, date, time, facultyName, coodinatorName } = location.state

    const dataToSend = {
        back: true,
        departmentNamefoundBACk: departmentName
    };

    const [isImageavailable, setisImageavailable] = useState(false);
    const [imgChanged, setImgChange] = useState(false);
    const [Changedimage, setImageChanged] = useState(entertainmentPic);

    const handleNavigation = () => {
        navigate(-1, { state: { data: dataToSend } });
    };

    const handleRegister = () => {
        navigate("/register");
    }

    var biodetails = {
        coordinatorName: coodinatorName,
        contactNumber: phoneNumber
    }

    const handleImageChange = () => {
        if (isImageavailable) {
            setImgChange(!imgChanged);
        }
    } 

    useEffect(() => {
        if (Changedimage) {
            setisImageavailable(true);
        }
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="EventMainPage" style={isImageavailable? imgChanged? {backgroundImage: `url(${Changedimage})`, backgroundPosition: 'center'}: {backgroundImage: `url(${image})`}: {backgroundImage: `url(${image})`}}>
            <EventPageHeader departmentName={departmentName} handleNavigation={handleNavigation}/>
        <div className="Event_div">
            <div className="EventLeftColumn">
                <div className="EventImage">
                    <div className="EventImageInside">
                        <img onClick={() => handleImageChange()} className="EventImageImg" alt="logo" src={imgChanged ? Changedimage: image}/>
                    </div>
                </div>
                <div className="EventRegister"><button id="EventRegisterButton" onClick={() => handleRegister()}>REGISTER</button></div>
            </div>
            <div className="EventRightColumn">
                <div className="EventName">
                    <h1 className="EventRightColumnEventHeader">{eventName}</h1>
                    <p className="EventRightColumnEventHeadertext">{shortDescription}</p>
                </div>
                <div className="EventLeftColumnfORmoBILE">
                    <div className="EventImage"><div className="EventImageInside"><img onClick={() => handleImageChange()} className="EventImageImg" alt="logo" src={imgChanged ? Changedimage: image}/></div></div>
                </div>
                <div className="EventDescription">
                    <h2 className="EventDescriptionSubHeads">Description</h2>
                    <p className="EventDescriptiontext">{eventdescription}</p>
                </div>
                {
                    theme? <div className="EventRules">
                        <h2 className="EventRulesSubHeads">Theme</h2>
                        <ul className="RulesList">
                            {
                                theme?.map((item, key) => { 
                                    return(
                                        <>
                                            <li className="RulesListEach">{item}</li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>: <></>   
                }
                <div className="EventRules">
                    <h2 className="EventRulesSubHeads">Rules</h2>
                    <ul className="RulesList">
                        {
                            rules?.map((item, key) => {
                                return(
                                    <>
                                        <li className="RulesListEach">{item}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="EventRegisterMobile"><button id="EventRegisterButton" onClick={() => handleRegister()}>REGISTER</button></div>
                <div className="EventPDC">
                    <div className="EventPrize pdc">
                        <h2 className="EventPrizeSubHeads">Prize</h2>
                        <p className="EventPrizetext"><span className="ListInBold">Winner:</span> &#8377;2000</p>
                        <p className="EventPrizetext"><span className="ListInBold">Runner Up:</span> &#8377;1000</p>
                    </div>
                    <div className="EventDetails pdc">
                        <h2 className="EventDetailsSubHeads subpdc">Details</h2>
                        <div className="EventDetailsList">
                            <p className="EventDetailsListEach"><span className="ListInBold">Venue:</span> {venue}</p>
                            <p className="EventDetailsListEach"><span className="ListInBold">Date: </span>{date}</p>
                            <p className="EventDetailsListEach"><span className="ListInBold"> Time: </span>{time}</p>
                        </div>
                    </div>
                    <div className="EventContact pdc">
                        <h2 className="EventContactSubHeads subpdc">Contact</h2>
                        <div className="EventContactList">
                            <p className="EventDetailsListEach"><span className="ListInBold"> Faculty</span>: {facultyName}</p>
                            <p className="EventDetailsListEach"><span className="ListInBold">Co-ordinator</span>:  {coodinatorName} </p>
                            <p className="EventDetailsListEach"><span className="ListInBold"> Contact Number</span>: {phoneNumber} </p>
                        </div>
                    </div>
                </div>
                <div className="EventPDCForMobile">
                    <div className="EventPrizeForMobile">
                        <h2 className="EventPrizeSubHeads">Prize</h2>
                        <p className="EventPrizetext"><span className="ListInBold">Winner:</span> &#8377;2000</p>
                        <p className="EventPrizetext"><span className="ListInBold">Runner Up:</span> &#8377;1000</p>
                    </div>
                    <div className="EventPDCForMobileFlex">
                        <div className="EventDetailsForMobile">
                            <h2 className="EventDetailsSubHeadsForMobile">Details</h2>
                            <div className="EventDetailsList">
                                <p className="EventDetailsListEach"><span className="ListInBold">Venue:</span> {venue}</p>
                                <p className="EventDetailsListEach"><span className="ListInBold">Date: </span>{date}</p>
                                <p className="EventDetailsListEach"><span className="ListInBold"> Time: </span>{time}</p>
                            </div>
                        </div>
                        <div className="EventDetailsForMobile">
                            <h2 className="EventDetailsSubHeadsForMobile">Contact</h2>
                            <div className="EventContactList">
                                <p className="EventDetailsListEach"><span className="ListInBold"> Faculty</span>: {facultyName}</p>
                                <p className="EventDetailsListEach"><span className="ListInBold">Co-ordinator</span>:  {coodinatorName} </p>
                                <p className="EventDetailsListEach"><span className="ListInBold"> Contact Number</span>: {phoneNumber} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer name="" biodetails={biodetails}/> 
    </div>
    )
}