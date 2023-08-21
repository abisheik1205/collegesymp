import React from "react";
import './EventPage.css';
import { useLocation } from 'react-router-dom'
import EventPageHeader from "./EventPageHeader/EventpageHeader";

export const Eventpage = () => {
    
    const location = useLocation();
    const { departmentName, image, eventName, shortDescription, eventdescription, rules, venue, phoneNumber, date, time, facultyName, coodinatorName } = location.state
    
    return(
        <div className="EventMainPage">
            <EventPageHeader departmentName={departmentName}/>
        <div className="Event_div">
            <div className="EventLeftColumn">
                <div className="EventImage"><div className="EventImageInside"><img className="EventImageImg" alt="logo" src={image}/></div></div>
                {/* <div className="EventLinkbox">
                <a href="ae" className="EventLinks">link1</a>
                <a href="eagae" className="EventLinks">link2</a>
                <a href="aa" className="EventLinks">link3</a>
                </div> */}
                <div className="EventRegister"><button id="EventRegisterButton">REGISTER | $150</button></div>
            </div>
            <div className="EventRightColumn">
                <div className="EventName">
                    <h1 className="EventRightColumnEventHeader">{eventName}</h1>
                    <p className="EventRightColumnEventHeadertext">{shortDescription}</p>
                </div>
                <div className="EventDescription">
                    <h2 className="EventDescriptionSubHeads">Description</h2>
                    <p className="EventDescriptiontext">{eventdescription}</p>
                </div>
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
                <div className="EventPDC">
                    <div className="EventPrize pdc">
                        <h2 className="EventPrizeSubHeads">Prize</h2>
                        <p className="EventPrizetext">Participate and win exciting prizes</p>
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
                            <p className="EventDetailsListEach"><span className="ListInBold">Co-ordinator</span>:  {coodinatorName} </p>
                            <p className="EventDetailsListEach"><span className="ListInBold"> Faculty</span>: {facultyName}</p>
                            <p className="EventDetailsListEach"><span className="ListInBold"> Phone</span>: {phoneNumber} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                           </div>
    )
}