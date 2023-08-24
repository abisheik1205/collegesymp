import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";
import DepartmentEvents from "./DepartmentEvents/DepartmentEvents";
import video from "../../assets/21.mp4";
import vivanata from"../../assets/VIVANATA (2).png";
import i2023 from "../../assets/2023.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    localStorage.clear();

    return(
        <div className="HomeMain">
            <div className="Home">
                <div className="bgContainer">
                <Header />
                <video  src={video} autoPlay loop muted/>
                <div className="container">
                    <img src={vivanata} id="logo" alt=""/>
                    <img src={i2023} id="year" alt="" />
                    </div>
                </div>
            </div>
            <br />
            <AboutUs />
            <DepartmentEvents />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Home;