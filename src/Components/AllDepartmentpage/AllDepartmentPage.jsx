import React, { useEffect, useState } from "react";
import AllDepartmentPageHeader from "./AllDepartmentPageHeader/AllDepartmentPageHeader";
import "./AllDepartmentPage.css";
import AllDepartmentPageContainer from "./AllDepartmentPageContainer/AllDepartmentPageContainer";
import Divider from "../Divider/Divider";
import { StorageData } from "../Storage/Storage";
import Footer from "../Footer/Footer";

const AllDepartmentPage = () => {

    const [list, setList] = useState([]);

    var Data = StorageData;
    var allevents = [];

    var computerScience = [];
    var informationTechnology = [];
    var ECE = [];
    var AIDS = [];
    var automobile = [];
    var Mech = [];
    var Mechetronics = [];
    var aeroEvents = [];
    var civil = [];
    var Ft = [];

    for (var i = 0; i < Data.length; i++) {

        var events = Data[i].events;
        for (var j = 0; j < events.length; j++) {
            const element = events[j];
            console.log(element);
            allevents = allevents.concat(element);
        }

        for (let computersciencecount = 0; computersciencecount < Data.length; computersciencecount++) {
            if (Data[computersciencecount].departmentName == "Computer Science") {
                computerScience = computerScience.concat(Data[computersciencecount]);
            }
            
        }
    }

    useEffect(() => {
        setList(allevents);
        window.scrollTo(0, 0)
    }, [])

    const handlefilter = () => {
        setList()
    }

    return(
        <div className="AllDepartmentPage">
            <AllDepartmentPageHeader />
            <br />
            <Divider margin="40px 20px 30px" color="whitesmoke"/>
            <AllDepartmentPageContainer list={list}/>
            <Footer />
        </div>
    )
}

export default AllDepartmentPage;