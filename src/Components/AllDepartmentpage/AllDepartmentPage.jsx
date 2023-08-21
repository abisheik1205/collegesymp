import React from "react";
import AllDepartmentPageHeader from "./AllDepartmentPageHeader/AllDepartmentPageHeader";
import "./AllDepartmentPage.css";
import AllDepartmentPageContainer from "./AllDepartmentPageContainer/AllDepartmentPageContainer";
import Divider from "../Divider/Divider";

const AllDepartmentPage = () => {
    return(
        <div className="AllDepartmentPage">
            <AllDepartmentPageHeader />
            <Divider margin="40px 20px 30px" color="whitesmoke"/>
            <AllDepartmentPageContainer />
        </div>
    )
}

export default AllDepartmentPage;