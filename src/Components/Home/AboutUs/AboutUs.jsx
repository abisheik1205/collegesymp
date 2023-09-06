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
                    <div>
                            <p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Established in 1998, KCG College of Technology is a Christian minority institution dedicated to providing exceptional education in science, technology, and engineering. Affiliated with Anna University, Chennai, and approved by AICTE, New Delhi, the college's mission is to disseminate knowledge within an intellectually stimulating environment. They also prioritize socially responsive research, innovation, and entrepreneurship while nurturing holistic development and ethical values in their students.</p>
                            <br />
                            <span className="tobehidden"><p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KCG College is committed to fostering responsible citizenship and progressive leadership by focusing on students' overall development and strengthening their leadership abilities. They continually adapt their curriculum to include value-added programs, enhancing students' job prospects while aligning their offerings with industry needs. With numerous undergraduate and postgraduate programs, accreditation by NBA, and recognition as a research center by Anna University, KCG College of Technology stands as a symbol of quality education and industry partnership in the field of engineering and technology.</p></span>
                        </div>
                        <div className="collegeqoute">
                            <p className="collegeqoutePara">To Make Every Man A Success And No Man A Failure <span className="collegeqouteParaBold">&nbsp;-&nbsp;  KCG Verghese</span></p>
                        </div>
                        <div className="linkonaboutus">
                            <a href="https://kcgcollege.ac.in/" target="_blank" rel="noreferrer"><p className="linkFoundOnAboutUs">Website</p></a>
                            {/* <a><p className="linkFoundOnAboutUs">Website</p></a>
                            <a><p className="linkFoundOnAboutUs">Website</p></a> */}
                        </div>
                    </div>
                    <div className="aboutusContenttwo">
                        <h2 className="aboutUsContentHead">ABOUT VIVANTA 23</h2>
                        <br />
                        <div>
                            <p className="aboutUsContentPara">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prepare to be captivated by our esteemed technical symposium, Vivanta23, featuring over 40 dynamic events spanning a diverse spectrum, from Aerospace and Artificial Intelligence to Automobile, Civil, Computer Science, Electronics, Fashion Technology, Information Technology, Mechanical, and Mechatronics. Dive headfirst into cutting-edge technology, nurture your creative spirit, and join us in shaping the future of higher education through this immersive and transformative experience. This is a great chance to ignite your passion for innovation at Vivanta23!</p>
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