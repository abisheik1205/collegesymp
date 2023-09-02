import React from "react";
import "./Footer.css";
import image from "../../assets/vivantaForReal.png";
                    
const Footer = ({ name, biodetails }) => {

    console.log(biodetails);

    return( 
        <footer>
            <div className="Footer_left">
                <div className="logo">
                    <img className="logo_img" alt="logo_img" src={image}/>
                </div>
                <div className="FooterNameAdd">
                    <h1 className="FooterCollegeName">KCG COLLEGE OF TECHNOLOGY</h1>
                    <p className="FooterCollegeAddress">KARAPAKKAM, CHENNAI, TAMILNADU, PIN 600097</p>
                </div>
            </div>
            <div className="Footer_right">
            <div className="FooterLocation FooterSub">
                    <h2 className="FooterLocationHead FooterSubhead">Location</h2>
                    <div className="Contentlinks">
                        <iframe className="MapLocation" title="Kcg College Of Technology"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7880929375274!2d80.23729427463127!3d12.921337015979162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8cd40b76e7%3A0x681487984b55f7bb!2sKCG%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1692678569564!5m2!1sen!2sin"
          width="150"
          height="100"
          style={{border:0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>   
                    </div>
                </div>
                <div className="FooterWebsite FooterSub">
                    <h2 className="FooterWebsiteHead FooterSubhead">Website</h2>
                    <div className="Contentlinks">
                        <a href="https://kcgcollege.ac.in/" className="Contents">College Site</a>
                        <a href="https://youtu.be/dQw4w9WgXcQ?feature=shared" className="Contents">Developers</a>
                    </div>
                </div>
                <div className="FooterSupport FooterSub">
                    <h2 className="FooterSupportHead FooterSubhead">Support</h2>
                    <div className="Contentlinks">
                        {
                            name? <>
                                <p className="Contents"><span className="ContentlinksPspan">Coordinator: </span> {biodetails.coordinatorName}</p>
                                {/* {faculty !== ""? <p className="Contents"><span className="ContentlinksPspan">Faculty: </span> {faculty}</p>: <></>} */}
                                <p className="Contents"><span className="ContentlinksPspan">Contact Number: </span> {biodetails.contactNumber}</p>
                            </> : 
                                <><p className="Contents"><span className="ContentlinksPspan">President: </span> Sherin Chezhian</p>
                                <p className="Contents"><span className="ContentlinksPspan">Faculty: </span> Dr. Prashad</p>
                                <p className="Contents"><span className="ContentlinksPspan">Contact Number: </span> ???</p></>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;