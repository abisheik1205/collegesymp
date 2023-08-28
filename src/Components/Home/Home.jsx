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
    // const [isPlaying, setIsPlaying] = useState(false);
    const videoRefMobile = useRef(null);
  const videoRefDesktop = useRef(null);

  const handleInteraction = () => {

      
      // videoRefMobile.current.play;
      
    //   videoRefDesktop.current;
      videoRefMobile.current.play = true;
        // videoRefDesktop.current.play();

        // setIsVideoMuted(false);
        // }
        console.log("Callled");
        console.log(videoRefMobile);
        // console.log(videoRefMobile.current.play = true);
    };

//   useEffect(() => {
//     window.addEventListener("click", handleInteraction);
//     return () => {
//       window.removeEventListener("click", handleInteraction);
//     };
//   }, []);

  return (
    <div className="HomeMain">
      <div className="Home">
        <div className="forBoxShadow">
          <video
            className="VideoForMobile"
            ref={videoRefMobile}
            src={videoForMobile}
            loop
            onClick={() => handleInteraction()}
            muted
            pause
          />
          <video
            className="VideoForDesktop"
            onClick={() => handleInteraction()}
            ref={videoRefDesktop}
            src={VideoForDesktop}
            pause
            loop
            muted
          />
        </div>
        <div className="bgContainer">
          <Header />
          <div className="container">
            <img src={vivanata} id="logo" alt="logo" />
            <img src={i2023} id="year" alt="year" />
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
