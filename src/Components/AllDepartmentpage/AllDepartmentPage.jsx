import React, { useEffect, useState } from "react";
import AllDepartmentPageHeader from "./AllDepartmentPageHeader/AllDepartmentPageHeader";
import "./AllDepartmentPage.css";
import AllDepartmentPageContainer from "./AllDepartmentPageContainer/AllDepartmentPageContainer";
import Divider from "../Divider/Divider";
import { StorageData } from "../Storage/Storage";
import Footer from "../Footer/Footer";
import { useLocation } from 'react-router-dom';

const AllDepartmentPage = () => {

    const [selected, setSelected] = useState("");
    const [list, setList] = useState([]);
    const location = useLocation();

    var Data = StorageData;

    var allevents = [];

    var dataToSend = location.state?.dataToSend.back? location.state?.dataToSend.departmentNamefoundBACk: location.state?.dataToSend.departmentName;

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

    const handleInitialCommit = () => {
        // For Computer Science
        if (dataToSend === "Computer Science") {
            setSelected("Computer Science");
            setList(computerScience);
            console.log("its right")
        } 
        
        // For Information Technology
        if (dataToSend === "Information Technology") {
            setSelected("Information Technology");
            setList(informationTechnology)
        } 
        
        // // For Mechatronics
        if (dataToSend === "Mechatronics") {
            setSelected("Mechatronics");
            setList(Mechetronics);
        } 
        
        // // For Mechanical
        if (dataToSend === "Mechanical") {
            setSelected("Mechanical");
            setList(Mech)
        } 
        
        // // For Automobile
        if (dataToSend === "Automobile") {
            setSelected("Automobile");
            setList(automobile)
        } 
        
        // // For Civil
        if (dataToSend === "Civil") {
            setSelected("Civil");
            setList(civil)
        } 
        
        // // For Aero
        if (dataToSend  === "Aero") {
            setSelected("Aero");
            setList(aeroEvents)
        } 
        
        // For AIDS
        if (dataToSend === "AIDS") {
            setSelected("AIDS");
            setList(AIDS)
        }
        
        // // For EEE
        if (dataToSend === "EEE") {
            setSelected("EEE");
            setList(EEE)
        } 
        
        // // For ECE
        if (dataToSend === "ECE") {
            setSelected("ECE");
            setList(ECE)
        } 
        
        // // For Fasion Technology
        if (dataToSend === "Fasion Technology") {
            setSelected("Fasion Technology");
            setList(Ft)
        } 
    }

    console.log("bBEEBEB");
    console.log(location.state?.dataToSend)
    console.log(location.state?.dataToSend.back);

    for (var i = 0; i < Data.length; i++) {

        var events = Data[i].events;
        for (var j = 0; j < events.length; j++) {
            const element = events[j];
            allevents = allevents.concat(element);
        }

        const shuffle = (array) => { 
            for (let i = array.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [array[i], array[j]] = [array[j], array[i]]; 
            } 
            return array; 
        }; 

        shuffle(allevents);

        // For Computer Science
        if (Data[i].departmentName === "Computer Science") {
            computerScience = computerScience.concat(Data[i].events);
        } 

        // For Information Technology
        if (Data[i].departmentName === "Information Technology") {
            informationTechnology = informationTechnology.concat(Data[i].events);
        } 

        // // For Mechatronics
        if (Data[i].departmentName === "Mechatronics") {
            Mechetronics = Mechetronics.concat(Data[i].events);
        } 

        // // For Mechanical
        if (Data[i].departmentName === "Mechanical") {
            Mech = Mech.concat(Data[i].events);
        } 

        // // For Automobile
        if (Data[i].departmentName === "Automobile") {
            automobile = automobile.concat(Data[i].events);
        } 

        // // For Civil
        if (Data[i].departmentName === "Civil") {
            civil = civil.concat(Data[i].events);
        } 

        // // For Aero
        if (Data[i].departmentName === "Aero") {
            aeroEvents = aeroEvents.concat(Data[i].events);
        } 

        // For AIDS
        if (Data[i].departmentName === "AIDS") {
            AIDS = AIDS.concat(Data[i].events);
        } 

        // // For EEE
        if (Data[i].departmentName === "EEE") {
            EEE = EEE.concat(Data[i].events);
        } 

        // // For ECE
        if (Data[i].departmentName === "ECE") {
            ECE = ECE.concat(Data[i].events);
        } 

        // // For Fasion Technology
        if (Data[i].departmentName === "Fasion Technology") {
            Ft = Ft.concat(Data[i].events);
        } 
    }

    // console.log("HEre below")
    // console.log(selected)
    
    const handlefilter = ( name ) => {
        if (name === "all") {
            setList(allevents)
            setSelected("all")
        }
        if (name === "Computer Science") {
            setList(computerScience)
            setSelected("Computer Science")
        }
        if (name === "Information Technology") {
            setList(informationTechnology)
            setSelected("Information Technology")
        }
        if (name === "Mechatronics") {
            setList(Mechetronics)
            setSelected("Mechatronics")
        }
        if (name === "Mechanical") {
            setList(Mech)
            setSelected("Mechanical")
        }
        if (name === "Fasion Technology") {
            setList(Ft)
            setSelected("Fasion Technology")
        }
        if (name === "ECE") {
            setList(ECE)
            setSelected("ECE")
        }
        if (name === "EEE") {
            setList(EEE)
            setSelected("EEE")
        }
        if (name === "Aero") {
            setList(aeroEvents)
            setSelected("Aero")
        }
        if (name === "Automobile") {
            setList(automobile)
            setSelected("Automobile")
        }
        if (name === "Civil") {
            setList(civil)
            setSelected("Civil")
        }
        if (name === "AIDS") {
            setList(AIDS)
            setSelected("AIDS")
        }
    }
    
    useEffect(() => {
        handleInitialCommit();
        // handlefilter();
        window.scrollTo(0, 0);
    }, [])


    return(
        <>
        <div className="AllDepartmentPage">
            <AllDepartmentPageHeader handlefilter={handlefilter} selected={selected}/>
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