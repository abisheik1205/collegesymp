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
    var EEE = [];
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


        // For Computer Science
            if (Data[i].departmentName == "Computer Science") {
                computerScience = computerScience.concat(Data[i].events);
            } 

        // For Information Technology
            if (Data[i].departmentName == "Information Technology") {
                informationTechnology = informationTechnology.concat(Data[i].events);
            } 

        // // For Mechatronics
            if (Data[i].departmentName == "Mechatronics") {
                Mechetronics = Mechetronics.concat(Data[i].events);
            } 

        // // For Mechanical
            if (Data[i].departmentName == "Mechanical") {
                Mech = Mech.concat(Data[i].events);
            } 

        // // For Automobile
            if (Data[i].departmentName == "Automobile") {
                automobile = automobile.concat(Data[i].events);
            } 

        // // For Civil
            if (Data[i].departmentName == "Civil") {
                civil = civil.concat(Data[i].events);
            } 

        // // For Aero
            if (Data[i].departmentName == "Aero") {
                aeroEvents = aeroEvents.concat(Data[i].events);
            } 

        // // For AIDS
            if (Data[i].departmentName == "Aero") {
                aeroEvents = aeroEvents.concat(Data[i].events);
            } 

        // // For EEE
            if (Data[i].departmentName == "EEE") {
                EEE = EEE.concat(Data[i].events);
            } 

        // // For ECE
            if (Data[i].departmentName == "ECE") {
                ECE = ECE.concat(Data[i].events);
            } 

        // // For Fasion Technology
            if (Data[i].departmentName == "Fasion Technology") {
                Ft = Ft.concat(Data[i].events);
            } 
    }

    useEffect(() => {
        setList(allevents);
        window.scrollTo(0, 0)
    }, [])

    const handlefilter = ( name ) => {
        if (name === "all") {
            setList(allevents)
        }
        if (name === "Computer Science") {
            setList(computerScience)
        }
        if (name === "Information Technology") {
            setList(informationTechnology)
        }
        if (name === "Mechatronics") {
            setList(Mechetronics)
        }
        if (name === "Mechanical") {
            setList(Mech)
        }
        if (name === "Fasion Technology") {
            setList(Ft)
        }
        if (name === "ECE") {
            setList(ECE)
        }
        if (name === "EEE") {
            setList(EEE)
        }
        if (name === "Aero") {
            setList(aeroEvents)
        }
        if (name === "Automobile") {
            setList(automobile)
        }
        if (name === "Civil") {
            setList(civil)
        }
    }

    return(
        <>
        <div className="AllDepartmentPage">
            <AllDepartmentPageHeader handlefilter={handlefilter}/>
            <br />
            <Divider margin="40px 20px 30px" color="whitesmoke"/>
            <AllDepartmentPageContainer list={list}/>
            <br />
            <br />
            <br />
        </div>
            <Footer />
        </>
    )
}

export default AllDepartmentPage;