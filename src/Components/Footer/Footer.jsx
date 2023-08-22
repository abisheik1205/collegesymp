import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer>
            <div className="Footer_left">
                <div className="logo">
                    <img className="logo_img" src="/src/assets/VIVANATA (2).png"/>
                </div>
                <div className="FooterNameAdd">
                    <h1 className="FooterCollegeName">KCG COLLEGE OF TECHNOLOGY</h1>
                    <p className="FooterCollegeAddress">KARAPAKKAM, CHENNAI, TAMILNADU, PIN 600097</p>
                </div>
            </div>
            <div className="Footer_right">
                <div className="FooterSocials FooterSub">
                    <h2 className="FooterSocialsHead FooterSubhead">Socials</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                    </div>
                </div>
                <div className="FooterEvents FooterSub">
                    <h2 className="FooterEventsHead FooterSubhead">Events</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                    </div>
                </div>
                <div className="FooterWebsite FooterSub">
                    <h2 className="FooterWebsiteHead FooterSubhead">Website</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                    </div>
                </div>
                <div className="FooterSupport FooterSub">
                    <h2 className="FooterSupportHead FooterSubhead">Support</h2>
                    <div className="Contentlinks">
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                        <a href="" className="Contents">Content</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;