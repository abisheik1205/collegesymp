import React, { useState } from "react";
import "./AllDepartmentPageEachContainer.css";
import Divider from "../../../Divider/Divider";
import { Fade } from "react-reveal";

const AllDepartmentPageEachContainer = () => {

    const [over, setOver] = useState(false);

    const handleOver = () => {
        setOver(true);
    }

    const handleOut = () => {
        setOver(false);
    }

    return( 
        <div className="AllDepartmentPageEachContainer">
            <div className={over? "AllDepartmentPageContainerEach": "AllDepartmentPageContainerEachOnHover"} style={over? {backdropFilter: 'blur(5px)'}: {}} onMouseOver={() => handleOver()} onMouseOut={() => handleOut()}>
                <img className="AllDepartmentPageContainerEachImg" src="https://media.geeksforgeeks.org/wp-content/uploads/20190902105053/Debugging-Tips-To-Get-Better-At-It.png" alt="loho"/>
                <div className="AllDepartmentPageContainerEachStackForm" style={over? {justifyContent: 'center', backdropFilter: 'blur(3px)'}: {justifyContent: 'center'}}>
                    <div className="AllDepartmentPageContainerEachStackFormHeader" style={over? {marginBottom: '40px'}: {}}>
                        <h2 className="AllDepartmentPageContainerEachStackFormHeaderHead">Bridge It</h2>
                        <Divider margin="5px 20px" color="whitesmoke"/>
                        <p className="AllDepartmentPageContainerEachStackFormHeaderPara">One min to win it all!!</p>
                    </div>
                    <div className={over? "AllDepartmentPageContainerEachStackFormContent":'AllDepartmentPageContainerEachStackFormContentHide'}>
                        <Fade bottom>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae voluptas laborum in sit at.</p>
                        </Fade>
                    </div>
                    <div className="AllDepartmentPageContainerEachStackFormFooter">
                        <div>Computer Science</div>
                        <div>View</div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default AllDepartmentPageEachContainer;