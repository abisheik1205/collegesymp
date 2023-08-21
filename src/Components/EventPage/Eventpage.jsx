import React from "react";
// import { useState } from "react";
import './EventPage.css';

export const Eventpage = () => {
    return(
        <div className="EventMainPage">

        <div className="Event_div">
            <div className="EventLeftColumn">
                <img className="EventImage" alt="logo" src="https://www.cittakshashila.in/bgs/BUSINESS%20MARKETTING.webp"/>
                <div className="EventLinkbox">
                <a href="ae" className="EventLinks">link1</a>
                <a href="eagae" className="EventLinks">link2</a>
                <a href="aa" className="EventLinks">link3</a>
                </div>
                <div className="EventRegister"><button id="EventRegisterButton">REGISTER</button></div>
            </div>
            <div className="EventRightColumn">
                <div className="EventName">
                    <h1 className="EventHeader">Business Strategy</h1>
                    <p className="text">This is a Quote</p>
                </div>
                <div className="EventDescription">
                    <h2 className="SubHeads">Description</h2>
                    <p className="text">The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot pr
ovide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/e
slint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md </p>
                </div>
                <div className="EventRules">
                    <h2 className="SubHeads">Rules</h2>
                    <ul className="RulesList">
                        <li>Rule 1 Rule 1 Rule 1 Rule 1 Rule 1 Rule 1 Rule 1 Rule 1</li>
                        <li>Rule 2 Rule 2 Rule 2 Rule 2 Rule 2 Rule 2 Rule 2 Rule 2 </li>
                        <li>Rule 3 Rule 3 Rule 3 Rule 3 Rule 3 Rule 3 Rule 3 Rule 3</li>
                        <li>Rule 4 Rule 4 Rule 4 Rule 4 Rule 4 Rule 4 Rule 4 Rule 4</li>
                    </ul>
                </div>
                <div className="EventPDC">
                    <div className="EventPrize pdc">
                        <h2 className="SubHeads">Prize</h2>
                        <p className="text">Participate and win exciting prizes</p>
                    </div>
                    <div className="EventDetails pdc">
                        <h2 className="SubHeads subpdc">Details</h2>
                        {/* <p className="text">Department: Computer Science <b/>
                           Date: 22/09/23 </p> */}
                           <p className="text pdctext">Department: Computer Science</p>
                           <p className="text">Date: 22/09/23</p>
                    </div>
                    <div className="EventContact pdc">
                        <h2 className="SubHeads subpdc">Contact</h2>
                        <p className="text pdctext">Co-ordinator: xyz </p>
                        <p className="text pdctext">Email: xyz@gmail.com </p>
                        <p className="text pdctext">Phone: 1234567890 </p>
                           {/* Email: xyz@mail.com 
                           Phone: 1234567890 </p> */}
                    </div>
                </div>
            </div>
        </div>
                           </div>
    )
}