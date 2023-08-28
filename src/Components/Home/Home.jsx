import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";
import DepartmentEvents from "./DepartmentEvents/DepartmentEvents";
import videoForMobile from "../../assets/video.mp4";
import VideoForDesktop from "../../assets/21.mp4";
import vivanata from "../../assets/vivanta.png";
import i2023 from "../../assets/2023.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const [isPlayingforDesktop, setIsPlayingforDesktop] = useState(false);
    const [isPlayingforMobile, setIsPlayingforMobile] = useState(false);
    const videoRefMobile = useRef(null);
    const videoRefDesktop = useRef(null);

    const handleInteraction = () => {

      console.log("Calling Now");
        if (window.innerWidth > 1000) {
          setIsPlayingforDesktop(true)
        }else{
          setIsPlayingforMobile(true)
        }
    };

    useEffect(() => {
      // setTimeout(() => {
      //   handleInteraction()
      // }, 2700)

      window.addEventListener("click", handleInteraction);
      return () => {
        window.removeEventListener("click", handleInteraction);
      };
    }, []);

  return (
    <div className="HomeMain">
      <div className="Home">
        <div className="forBoxShadow">
          {
            isPlayingforMobile ?
            <video
              className="VideoForMobile"
              ref={videoRefMobile}
              src={videoForMobile}
              loop
              autoPlay
              />: <></>
          }         
          {
            isPlayingforDesktop ?
            <video
              className="VideoForDesktop"
              ref={videoRefDesktop}
              src={VideoForDesktop}
              autoPlay
              loop
            />: <></>
          }
        </div>
        <div className="bgContainer">
          <Header />
          <div className={isPlayingforDesktop||isPlayingforMobile?"containerPlaying": "container"}>
            <img src={vivanata} id="logo" alt="logo" />
            <img src={i2023} id="year" alt="year" />
            <p className="HomeNote">{isPlayingforDesktop||isPlayingforMobile? "": "Click anywhere to play the promo"} </p> 
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
  );
};

export default Home;
