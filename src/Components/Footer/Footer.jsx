import React from "react";
import "./Footer.css";
import image from "../../assets/VIVANATA (2).png"

const Footer = () => {
    return(
        <footer>
            <div className="Footer_left">
                <div className="logo">
                    <img className="logo_img" src={image}/>
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
                        <iframe className="MapLocation"
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
                <div className="FooterSocials FooterSub">
                    <h2 className="FooterSocialsHead FooterSubhead">Socials</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Facebook</a>
                        <a href="" className="Contents">Instagram</a>
                        <a href="" className="Contents">Linkedin</a>
                        <a href="" className="Contents">Email</a>
                    </div>
                </div>
                <div className="FooterEvents FooterSub">
                    <h2 className="FooterEventsHead FooterSubhead">Events</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Technical</a>
                        <a href="" className="Contents">NonTechnical</a>
                        <a href="" className="Contents">Departments</a>
                        <a href="" className="Contents">Others</a>
                    </div>
                </div>
                <div className="FooterWebsite FooterSub">
                    <h2 className="FooterWebsiteHead FooterSubhead">Website</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Account</a>
                        <a href="" className="Contents">College Site</a>
                        <a href="" className="Contents">Developers</a>
                        <a href="" className="Contents">Content</a>
                    </div>
                </div>
                <div className="FooterSupport FooterSub">
                    <h2 className="FooterSupportHead FooterSubhead">Support</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Coordinators</a>
                        <a href="" className="Contents">Contact</a>
                        <a href="" className="Contents">Developer</a>
                        <a href="" className="Contents">Report</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;