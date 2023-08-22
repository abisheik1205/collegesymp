import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="HeaderMain">
            <Link to={"/allevents"}><p className="HeaderMainLink">Events</p></Link>
            <Link to={"/signup"}><p className="HeaderMainLink">Sign Up</p></Link>
        </div>
    )
}

export default Header;