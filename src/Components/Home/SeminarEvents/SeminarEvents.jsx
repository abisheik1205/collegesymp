import React from "react";
import "./SeminarEvents.css";
import Divider from "../../Divider/Divider";

const SeminarEvents = () => {

    var SeminarEvents = [
        {
            "topic": "Cyber Security",
            "Date": "22-09-2023",
            "Venue": "KMC Auditorium",
            "Speaker Name": "Varsha Sundar M",
            "Designation": "Technical Lead",
            "Company": "Tata Consultancy Services pvt Ltd",
            "Time": "yet to be declined",
        }
    ];

    return(
        <div className="SeminarEvents">
            <h2 className="departmentEventsHead">Seminar Events</h2>
            <Divider margin="25px 0px"/>
            <br />
            <div className="SeminarEventsDiv">
                {
                    SeminarEvents.map((item, key) => {
                        return(
                            <div className="Seminar">
                                <img className="SeminarImg" alt="SeminarImg" src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
                                <div className="SeminarContent">
                                    <h3>Cyber Security</h3>
                                    <p>Tata Consultancy Services pvt Ltd</p>
                                    <p>Designation: Technical Lead</p>
                                    <p>Date: 22-09-23</p>
                                    <p>Hall: KMC Auditorium</p>
                                    <p>By: Varsha Sundar M</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SeminarEvents;