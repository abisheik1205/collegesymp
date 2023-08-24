import React from "react";
import "./Register.css";

const Register = () => {
    return(
        <div className="RegisterPage">
            <div className="InstructionsCont">
            <div className="RegHeader InContL2">
                    <h1 id="h1Register">REGISTER</h1>
                
            <div className="InstructionHead">
                <h2 id="h2Instructions">INSTRUCTIONS: </h2>
            </div>
            <div className="InstructionBody">
                <ol className="ListOfInstructions" type="1">
                    <li className="Instructions">Rule 1</li>
                    <li className="Instructions">Rule 1</li>
                    <li className="Instructions">Rule 1</li>
                    <li className="Instructions">Rule 1</li>
                </ol>
            </div>
            </div>
         </div>
         <div className="Register">
            <div className="RegContentsBox">
                
                <div className="RegEventsDropdown-1 RegEventsDropdown">
                <label for="Event-1" id="Event_label">Event 1:</label> 
                   <select name="Event-1" className="Event-1 Event"> 
                      <option value="" disabled selected >Select Event</option>
                      <option value="rigatoni" className="EventOption">Event x</option> 
                      <option value="dave" className="EventOption">Event y</option> 
                      <option value="pumpernickel" className="EventOption">Event z</option> 
                      <option value="reeses" className="EventOption">Event a</option> 
                   </select>
                </div>
                <div className="RegEventsDropdown-2 RegEventsDropdown">
                <label for="Event-1" id="Event_label">Event 2:</label> 
                   <select name="Event-1" className="Event-1 "> 
                      <option value="" disabled selected >Select Event</option>
                      <option value="rigatoni" className="EventOption">Event x</option> 
                      <option value="dave" className="EventOption">Event y</option> 
                      <option value="pumpernickel" className="EventOption">Event z</option> 
                      <option value="reeses" className="EventOption">Event a</option> 
                   </select>
                </div>
                <div className="RegEventsDropdown-3 RegEventsDropdown">
                <label for="Event-1" id="Event_label">Event 3:</label> 
                   <select name="Event-1" className="Event-1 "> 
                      <option value="" disabled selected >Select Event</option>
                      <option value="rigatoni" className="EventOption">Event x</option> 
                      <option value="dave" className="EventOption">Event y</option> 
                      <option value="pumpernickel" className="EventOption">Event z</option> 
                      <option value="reeses" className="EventOption">Event a</option> 
                   </select>
                </div>
                <div className="RegEventsDropdown-4 RegEventsDropdown">
                <label for="Event-1" id="Event_label">Event 4:</label> 
                   <select name="Event-1" className="Event-1 "> 
                      <option value="" disabled selected >Select Event</option>
                      <option value="rigatoni" className="EventOption">Event x</option> 
                      <option value="dave" className="EventOption">Event y</option> 
                      <option value="pumpernickel" className="EventOption">Event z</option> 
                      <option value="reeses" className="EventOption">Event a</option> 
                   </select>
                </div>
                <div className="RegEventsDropdown-5 RegEventsDropdown">
                <label for="Event-1" id="Event_label">Event 5:</label> 
                   <select name="Event-1" className="Event-1"> 
                      <option value="" disabled selected >Select Event</option>
                      <option value="rigatoni" className="EventOption">Event x</option> 
                      <option value="dave" className="EventOption">Event y</option> 
                      <option value="pumpernickel" className="EventOption">Event z</option> 
                      <option value="reeses" className="EventOption">Event a</option> 
                   </select>
                </div>
                <div className="RegisterBtnCont">
                    <button className="RegisterButton"> Register </button>
                </div>
            </div>
            <div className="ScanningCont">
                <div className="QrCodeHead">
                    <h1>Scan the QR code to pay</h1>
                </div>
                <div className="QrCode">
                    <img alt="QrCode" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO29jpK02kOHa3YX21knBGZT8z1ilBHEyt2g&usqp=CAU" className="QrCodeImage"/>
                </div>
                <div className="RegInputs">
                    {/*<label for="InputPhone">Phone No:</label>*/}
                    <div className="RegInp">
                    <input name="Transaction-id" className="Transaction-id" type="text" placeholder="Enter the transaction id"/>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Register;