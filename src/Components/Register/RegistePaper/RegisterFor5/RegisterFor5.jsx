import React from "react";
import "./RegisterFor5.css";

const RegisterFor5 = ({ handlePreviousPaper, handleclick, selected, bio }) => {
    return(
        <div className="RegisterFor5">
            <h2 className="RegisterFor5Head">Details</h2>
            <div className="RegisterFor5Container">
                <div className="RegisterFor5ContainernameandNumber">
                    <p className="RegisterFor5ContainernameandNumberPara">{bio.name}</p>
                    <p className="RegisterFor5ContainernameandNumberPara">{bio.phoneNumber}</p>
                </div>
                <div className="RegisterFor5ContainernameandNumber">
                    <p className="RegisterFor5ContainernameandNumberPara">{bio.collegeName}</p>
                </div>
                <br />
                <div className="RegisterFor5Container">
                    <h2 className="RegisterFor5ContainerHead">Events Selected: </h2>
                    <div className="RegisterFor5ContainerList">
                        {
                            selected.map((item, key) => {
                                return(
                                    <div className="RegisterFor5ContainerMapingRow">
                                        <p className="RegisterFor5ContainerMapingRowKey">0{key+1}.  </p>
                                        <br />
                                        <div className="RegisterFor5ContainerMaping">
                                            <h2 className="RegisterFor5ContainerMapinghead">{item}</h2>
                                            <p className="RegisterFor5ContainerMapingpara">Computer Science</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="registerPaperButton">
                <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                <button className="registerPaperButtonBTN" onClick={() => handleclick()} type="submit">Submit</button>
            </div>
        </div>
    )
}

export default RegisterFor5;