import React from "react";
import "./AllDepartmentPageHeader.css";

const AllDepartmentPageHeader = () => {
    return(
        <div className="AllDepartmentPageHeader">
            <h1 className="AllDepartmentPageHeaderHead">Events</h1>
            <div className="AllDepartmentPageHeaderLink">
                <p className="AllDepartmentPageHeadereachLinks AllDepartmentPageHeadereachLinksSelected">All</p>
                <p className="AllDepartmentPageHeadereachLinks">Computer Science</p>
                <p className="AllDepartmentPageHeadereachLinks">Information Technology</p>
                <p className="AllDepartmentPageHeadereachLinks">Blah</p>
            </div>
        </div>
    )
}

export default AllDepartmentPageHeader;