import React from "react";
import "./AboutUS.css";
import homeSide from "../../../assets/HomeS.png";

const AboutUs = () => {
    return(
        <div className="aboutUS">
            <div className="AboutUs">
                <div className="aboutusContent">
                    <div className="aboutusContentone">
                        <h2 className="aboutUsContentHead">ABOUT KCG</h2>
                        <br />
                        <br />
                        <div>
                            <p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A prominent institution ranking amongst the top colleges in Tamil Nadu, was established with an initiative to provide pragmatic learning. The institution has also partnered with a number of companies to set a worldwide standard by offering students a diverse range of possibilities that combine education and recreation.</p>
                            <br />
                            <p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The students' appetite for knowledge makes them thrive to prepare for the ready-to-serve industrial requirements. This is delivered by CIT through professional ethics which is sated by frequent guest lectures by professionals from various industries and academic backgrounds. Chennai Institute of Technology has been awarded the National Award of Excellence for Best Placements & has been ranked Second in Tamil Nadu. Our college has made dreams of thousands of students come true</p>
                        </div>
                        <div className="collegeqoute">
                            <p className="collegeqoutePara">To Make Every Man A Success And No Man A Failure <span className="collegeqouteParaBold">&nbsp;-&nbsp;  KCG FounderName</span></p>
                        </div>
                        <div className="linkonaboutus">
                            <a href="https://kcgcollege.ac.in/" target="_blank" rel="noreferrer"><p className="linkFoundOnAboutUs">Website</p></a>
                            {/* <a><p className="linkFoundOnAboutUs">Website</p></a>
                            <a><p className="linkFoundOnAboutUs">Website</p></a> */}
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="aboutusContenttwo">
                        <h2 className="aboutUsContentHead">ABOUT TECHFEST</h2>
                        <br />
                        <br />
                        <div>
                            <p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A prominent institution ranking amongst the top colleges in Tamil Nadu, was established with an initiative to provide pragmatic learning. The institution has also partnered with a number of companies to set a worldwide standard by offering students a diverse range of possibilities that combine education and recreation.</p>
                        </div>
                    </div>
                </div>
                <div className="aboutusImage">
                    <div className="imageFoundOnAboutUS">
                        <img className="imgonABoutUs" src={homeSide} alt={homeSide}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;