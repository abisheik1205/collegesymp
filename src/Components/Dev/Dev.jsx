import React from "react";
import './Dev.css';

var Dev;

export default Dev = () =>{
    return(
        <div className="DevPage">
           <h1 className="Devhead">Developers</h1>
           <div className="DevBox">
               <div className="space">
               <div className="Developer" onClick={() => { window.open('https://www.linkedin.com/in/arul-rosario-2b1970225/', '_blank'); }}>
                 {/*<div className="Developer" onClick={() => {window.location.href = 'https://www.linkedin.com/in/arul-rosario-2b1970225/';}}>*/}
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/518/437/desktop-wallpaper-saitama-in-2020-saitama-iphone.jpg" className="DevImg" />
                      </div>
                      <div className="back">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8e0ryw9QFoqSj-mUHDJ35_cTleA5OLIBP0A&usqp=CAU" className="DevImg" />
                      </div>
                    </div>
                  </div>
                   <p className="DevName">ROSARIO</p>
                 </div>
                
               </div>
               <div className="space">
               <div className="Developer" onClick={() => { window.open('https://www.linkedin.com/in/deepak-rajkumar-b-b7942423b/', '_blank'); }}>
                 {/*<div className="Developer" onClick={() => {window.location.href = 'https://www.linkedin.com/in/deepak-rajkumar-b-b7942423b/';}}>*/}
                 <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/518/437/desktop-wallpaper-saitama-in-2020-saitama-iphone.jpg" className="DevImg" />
                      </div>
                      <div className="back">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8e0ryw9QFoqSj-mUHDJ35_cTleA5OLIBP0A&usqp=CAU" className="DevImg" />
                      </div>
                    </div>
                  </div>
                   <p className="DevName">DEEPAK</p>
                 </div>
               </div>
               <div className="space">
                <div className="Developer" onClick={() => { window.open('https://www.linkedin.com/in/dhinesh-ramachandran-531712219/', '_blank'); }}>
                 {/*<div className="Developer" onClick={() => {window.location.href = 'https://www.linkedin.com/in/dhinesh-ramachandran-531712219/';}}>*/}
                 <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/518/437/desktop-wallpaper-saitama-in-2020-saitama-iphone.jpg" className="DevImg" />
                      </div>
                      <div className="back">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8e0ryw9QFoqSj-mUHDJ35_cTleA5OLIBP0A&usqp=CAU" className="DevImg" />
                      </div>
                    </div>
                  </div>
                   <p className="DevName">DHINESH</p>
                 </div>
               </div>
               <div className="space">
               <div className="Developer" onClick={() => { window.open('https://www.linkedin.com/in/spoorthy-pateel-85679923b/', '_blank'); }}>
                 {/*<div className="Developer" onClick={() => {window.location.href = 'https://www.linkedin.com/in/spoorthy-pateel-85679923b/';}}>*/}
                 <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/518/437/desktop-wallpaper-saitama-in-2020-saitama-iphone.jpg" className="DevImg" />
                      </div>
                      <div className="back">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8e0ryw9QFoqSj-mUHDJ35_cTleA5OLIBP0A&usqp=CAU" className="DevImg" />
                      </div>
                    </div>
                  </div>
                   <p className="DevName">SPOORTHY</p>
                 </div>
               </div>
           </div>
        </div>
    )
}