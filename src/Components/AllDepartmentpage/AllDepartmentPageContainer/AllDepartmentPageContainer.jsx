import React from "react";
import "./AllDepartmentPageContainer.css";
import AllDepartmentPageEachContainer from "./AllDepartmentPageEachContainer/AllDepartmentPageEachContainer";

const AllDepartmentPageContainer = () => {
    return(
        <div className="AllDepartmentPageContainer">
            <AllDepartmentPageEachContainer />
            <AllDepartmentPageEachContainer />
            <AllDepartmentPageEachContainer />
            <AllDepartmentPageEachContainer />
            <AllDepartmentPageEachContainer />
            <AllDepartmentPageEachContainer />
        </div>
    )
}

export default AllDepartmentPageContainer;