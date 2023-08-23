import React from "react";
import "./AllDepartmentPageHeader.css";

const AllDepartmentPageHeader = ({ handlefilter }) => {
    return(
        <div className="AllDepartmentPageHeader">
            <h1 className="AllDepartmentPageHeaderHead">Events</h1>
            <div className="AllDepartmentPageHeaderLink">
                <p onClick={() => handlefilter("all")} className="AllDepartmentPageHeadereachLinks AllDepartmentPageHeadereachLinksSelected">All</p>
                <p onClick={() => handlefilter("Computer Science")} className="AllDepartmentPageHeadereachLinks">CSE</p>
                <p onClick={() => handlefilter("Information Technology")} className="AllDepartmentPageHeadereachLinks">IT</p>
                <p onClick={() => handlefilter("Fasion Technology")} className="AllDepartmentPageHeadereachLinks">FT</p>
                <p onClick={() => handlefilter("ECE")} className="AllDepartmentPageHeadereachLinks">ECE</p>
                <p onClick={() => handlefilter("EEE")} className="AllDepartmentPageHeadereachLinks">EEE</p>
                <p onClick={() => handlefilter("Mechatronics")} className="AllDepartmentPageHeadereachLinks">Mechatronics</p>
                <p onClick={() => handlefilter("Aero")} className="AllDepartmentPageHeadereachLinks">Aero</p>
                <p onClick={() => handlefilter("Civil")} className="AllDepartmentPageHeadereachLinks">Civil</p>
                <p onClick={() => handlefilter("Automobile")} className="AllDepartmentPageHeadereachLinks">Automobile</p>
                <p onClick={() => handlefilter("Mechanical")} className="AllDepartmentPageHeadereachLinks">Mech</p>
                <p onClick={() => handlefilter("AIDS")} className="AllDepartmentPageHeadereachLinks">AIDS</p>
            </div>
        </div>
    )
}

export default AllDepartmentPageHeader;