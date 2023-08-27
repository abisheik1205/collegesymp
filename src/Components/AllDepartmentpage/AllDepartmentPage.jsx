import React, { useEffect, useState } from "react";
import AllDepartmentPageHeader from "./AllDepartmentPageHeader/AllDepartmentPageHeader";
import "./AllDepartmentPage.css";
import AllDepartmentPageContainer from "./AllDepartmentPageContainer/AllDepartmentPageContainer";
import Divider from "../Divider/Divider";
import { StorageData } from "../Storage/Storage";
import Footer from "../Footer/Footer";
import { useLocation } from 'react-router-dom';

const AllDepartmentPage = () => {

    const [selected, setSelected] = useState("all");
    const [list, setList] = useState([]);
    const location = useLocation();

    const [mobileClick, setMobileClick] = useState(false);

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

        if (localStorage.getItem("val")) {
            if (localStorage.getItem("val") === "all") {
                setSelected("all");
                setList(allevents);
            }
            if (localStorage.getItem("val") === "Computer Science") {
                setSelected("Computer Science");
                setList(computerScience);
            }
            if (localStorage.getItem("val") === "Information Technology") {
                setSelected("Information Technology");
                setList(informationTechnology)
            }
            if (localStorage.getItem("val") === "Mechatronics") {
                setSelected("Mechatronics");
                setList(Mechetronics);
            } 
            if (localStorage.getItem("val") === "Mechanical") {
                setSelected("Mechanical");
                setList(Mech)
            }
            if (localStorage.getItem("val") === "Automobile") {
                setSelected("Automobile");
                setList(automobile)
            }
            if (localStorage.getItem("val") === "Civil") {
                setSelected("Civil");
                setList(civil)
            }
            if (localStorage.getItem("val") === "Aero") {
                setSelected("Aero");
                setList(aeroEvents)
            }
            if (localStorage.getItem("val") === "AIDS") {
                setSelected("AIDS");
                setList(AIDS)
            }
            if (localStorage.getItem("val") === "EEE") {
                setSelected("EEE");
                setList(EEE)
            }
            if (localStorage.getItem("val") === "ECE") {
                setSelected("ECE");
                setList(ECE)
            }
            if (localStorage.getItem("val") === "Fasion Technology") {
                setSelected("Fasion Technology");
                setList(Ft)
            }
        }  else{
            // For ALL
            if (dataToSend === "all") {
                console.log("ITS ALLL NOWW")
                setList(allevents);
            } 
            
            // For Computer Science
            if (dataToSend === "Computer Science") {
                setSelected("Computer Science");
                setList(computerScience);
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
    }

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
    // console.log(location.state)
    
    const handlefilter = ( name ) => {
        if (name === "all") {
            setList(allevents)
            // dataToSend = "all";
            localStorage.setItem("val", "all")
            setSelected("all")
        }
        
        if (name === "Computer Science") {
            setList(computerScience)
            // dataToSend = "Computer Science";
            localStorage.setItem("val", "Computer Science")
            setSelected("Computer Science")
        }
        if (name === "Information Technology") {
            setList(informationTechnology)
            localStorage.setItem("val", "Information Technology")
            // dataToSend = "Information Technology";
            setSelected("Information Technology")
        }
        if (name === "Mechatronics") {
            setList(Mechetronics)
            localStorage.setItem("val", "Mechatronics")
            // dataToSend = "Mechatronics";
            setSelected("Mechatronics")
        }
        if (name === "Mechanical") {
            setList(Mech)
            localStorage.setItem("val", "Mechanical")
            // dataToSend = "Mechanicalz";
            setSelected("Mechanical")
        }
        if (name === "Fasion Technology") {
            setList(Ft)
            localStorage.setItem("val", "Fasion Technology")
            // dataToSend = "Fasion Technology";
            setSelected("Fasion Technology")
        }
        if (name === "ECE") {
            setList(ECE)
            localStorage.setItem("val", "ECE")
            // dataToSend = "ECE";
            setSelected("ECE")
        }
        if (name === "EEE") {
            setList(EEE)
            localStorage.setItem("val", "EEE")
            // dataToSend = "EEE";
            setSelected("EEE")
        }
        if (name === "Aero") {
            setList(aeroEvents)
            localStorage.setItem("val", "Aero")
            // dataToSend = "Aero";
            setSelected("Aero")
        }
        if (name === "Automobile") {
            setList(automobile)
            localStorage.setItem("val", "Automobile")
            // dataToSend = "Automobile";
            setSelected("Automobile")
        }
        if (name === "Civil") {
            setList(civil)
            localStorage.setItem("val", "Civil")
            // dataToSend = "Civil";
            setSelected("Civil")
        }
        if (name === "AIDS") {
            setList(AIDS)
            // dataToSend = "AIDS";
            localStorage.setItem("val", "AIDS")
            setSelected("AIDS")
        }
    }

    const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = "Are you sure you want to leave? Your changes may not be saved.";
        localStorage.clear();
    };

    const handleMobileClick = () => {
        setMobileClick(!mobileClick);
    }

    const handleFilterAdvanced = (name) => {
        handlefilter(name)
        setMobileClick(false);
    }
    
    useEffect(() => {
        setList(allevents)
        handleInitialCommit();
        window.scrollTo(0, 0);

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
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
            <div className={mobileClick ? "NavOnMobile": "NavOnMobileClick"}>
                <p className="NavOnMobileP" onClick={() => handleMobileClick()}>|||</p>
                <div className="AllDepartmentPageHeaderLinkInMobile">
                    <p onClick={() => handleFilterAdvanced("all")} className={`AllDepartmentPageHeadereachLinks ${selected === "all"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>All</p>
                    <p onClick={() => handleFilterAdvanced("Computer Science")} className={`AllDepartmentPageHeadereachLinks ${selected === "Computer Science"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>CSE</p>
                    <p onClick={() => handleFilterAdvanced("Information Technology")} className={`AllDepartmentPageHeadereachLinks ${selected === "Information Technology"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>IT</p>
                    <p onClick={() => handleFilterAdvanced("Fasion Technology")} className={`AllDepartmentPageHeadereachLinks ${selected === "Fasion Technology"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>FT</p>
                    <p onClick={() => handleFilterAdvanced("ECE")} className={`AllDepartmentPageHeadereachLinks ${selected === "ECE"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>ECE</p>
                    <p onClick={() => handleFilterAdvanced("EEE")} className={`AllDepartmentPageHeadereachLinks ${selected === "EEE"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>EEE</p>
                    <p onClick={() => handleFilterAdvanced("Mechatronics")} className={`AllDepartmentPageHeadereachLinks ${selected === "Mechatronics"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Mechatronics</p>
                    <p onClick={() => handleFilterAdvanced("Aero")} className={`AllDepartmentPageHeadereachLinks ${selected === "Aero"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Aero</p>
                    <p onClick={() => handleFilterAdvanced("Civil")} className={`AllDepartmentPageHeadereachLinks ${selected === "Civil"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Civil</p>
                    <p onClick={() => handleFilterAdvanced("Automobile")} className={`AllDepartmentPageHeadereachLinks ${selected === "Automobile"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Automobile</p>
                    <p onClick={() => handleFilterAdvanced("Mechanical")} className={`AllDepartmentPageHeadereachLinks ${selected === "Mechanical"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Mech</p>
                    <p onClick={() => handleFilterAdvanced("AIDS")} className={`AllDepartmentPageHeadereachLinks ${selected === "AIDS"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>AIDS</p>
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default AllDepartmentPage;