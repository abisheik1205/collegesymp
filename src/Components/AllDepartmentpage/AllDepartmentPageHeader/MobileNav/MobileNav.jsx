import React from "react";

const MobileNav = () => {
    return(
        <div className="MobileNav">
            <div className="AllDepartmentPageHeaderLink">
                <p onClick={() => handlefilter("all")} className={`AllDepartmentPageHeadereachLinks ${selected === "all"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>All</p>
                <p onClick={() => handlefilter("Computer Science")} className={`AllDepartmentPageHeadereachLinks ${selected === "Computer Science"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>CSE</p>
                <p onClick={() => handlefilter("Information Technology")} className={`AllDepartmentPageHeadereachLinks ${selected === "Information Technology"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>IT</p>
                <p onClick={() => handlefilter("Fashion Technology")} className={`AllDepartmentPageHeadereachLinks ${selected === "Fasion Technology"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>FT</p>
                <p onClick={() => handlefilter("ECE")} className={`AllDepartmentPageHeadereachLinks ${selected === "ECE"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>ECE</p>
                <p onClick={() => handlefilter("EEE")} className={`AllDepartmentPageHeadereachLinks ${selected === "EEE"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>EEE</p>
                <p onClick={() => handlefilter("Mechatronics")} className={`AllDepartmentPageHeadereachLinks ${selected === "Mechatronics"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Mechatronics</p>
                <p onClick={() => handlefilter("Aero")} className={`AllDepartmentPageHeadereachLinks ${selected === "Aero"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Aero</p>
                <p onClick={() => handlefilter("Civil")} className={`AllDepartmentPageHeadereachLinks ${selected === "Civil"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Civil</p>
                <p onClick={() => handlefilter("Automobile")} className={`AllDepartmentPageHeadereachLinks ${selected === "Automobile"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Automobile</p>
                <p onClick={() => handlefilter("Mechanical")} className={`AllDepartmentPageHeadereachLinks ${selected === "Mechanical"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>Mech</p>
                <p onClick={() => handlefilter("AIDS")} className={`AllDepartmentPageHeadereachLinks ${selected === "AIDS"? "AllDepartmentPageHeadereachLinksSelected": ""}`}>AIDS</p>
            </div>
        </div>
    )
}

export default MobileNav;