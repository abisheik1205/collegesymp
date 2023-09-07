import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";
import DepartmentEvents from "./DepartmentEvents/DepartmentEvents";
import videoForMobile from "../../assets/video.mp4";
import VideoForDesktop from "../../assets/21 (2).mp4";
import vivanata from "../../assets/vivantaForReal.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EventsFound from "./EventsFound/EventsFound";
import HomeFotter from "./HomeFooter/HomeFotter";

const Home = () => {
    const [isPlayingforDesktop, setIsPlayingforDesktop] = useState(false);
    const [isPlayingforMobile, setIsPlayingforMobile] = useState(false);

    const [scrolledDown, setScrolleddown] = useState();

    const videoRefMobile = useRef(null);
    const videoRefDesktop = useRef(null);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.screenY;
        setScrollPosition(position);
    };


    const handleOnclick = () => {
        if (window.innerWidth > 1000) {
          setIsPlayingforDesktop(true)
        }else{
          setIsPlayingforMobile(true)
        }
    }

    useEffect(() => {

      localStorage.clear();

      function handleScroll() {
        // Your function to be called when scrolling down goes here
        // You can check the scroll position and trigger your function accordingly
        if (window.scrollY > 1) { // Example: Call the function when the user has scrolled down 100 pixels
          // Call your function here
          handleScrolledDown()
        }
        else{
          setScrolleddown(false);
          if (window.innerWidth > 1000) {
            if (videoRefDesktop.current) {
              // videoRefMobile.current.play();
              videoRefDesktop.current.play();
            }
          }else{
            if (videoRefMobile.current) {
              // videoRefMobile.current.play();
              videoRefMobile.current.play();
            }
          }
        }
      }

      function handleScrolledDown() {
        setScrolleddown(true);
        if (window.innerWidth > 1000) {
          if (videoRefDesktop.current) {
            // videoRefMobile.current.play();
            videoRefDesktop.current.pause();
          }
        }else{
          if (videoRefMobile.current) {
            // videoRefMobile.current.play();
            videoRefMobile.current.pause();
          }
        }
      }

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    window.addEventListener('scroll', handleScroll);
  return (
    <div className="HomeMain">
      <div className="Home">
        <div className="forBoxShadow" onClick={() => handleOnclick()}>
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
        <div className="bgContainer" style={scrolledDown? {background: 'rgba(0, 0, 0, 0.800)'}: {backgroundColor: "transparent"}}>
          <Header />
          { 
            window.innerWidth < 1000? <div className={!scrolledDown && isPlayingforMobile?"containerPlaying": "container"} onClick={() => handleOnclick()}>
            <img src={vivanata} id={!scrolledDown && isPlayingforMobile? "logoPlaying": "logo"  } alt="logo" />
  
            <p className="HomeNote">{isPlayingforMobile? "": "INSPIRING INNOVATION"} </p> 
          </div> : <div className={!scrolledDown && isPlayingforDesktop?"containerPlaying": "container"} onClick={() => handleOnclick()}>
            <img src={vivanata} id={!scrolledDown && isPlayingforDesktop? "logoPlaying": "logo"  } alt="logo" />
  
            <p className="HomeNote">{isPlayingforDesktop? "": "INSPIRING INNOVATION"} </p> 
          </div>
          }
        </div>
      </div>
      <br />
      <AboutUs />
      <DepartmentEvents />
      <br />
      <br />
      <EventsFound />
      <br />
      <br />
      <HomeFotter />
      <Footer name="" />
    </div>
  );
};

export default Home;
