import React from "react";
import "../Login.css";

const ListRender = ({ name, phoneNumber, transactionID }) => {

    console.log(name);

    return(
        <div className="ListRender">
            <input placeholder="Search Transaction ID"/>

            <div className="allListContainer">
                <div className="allListContainerEach">
                    <div className="allListContainerEachInleft">
                        <p>{name}</p>
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="allListContainerEachInright">
                        <p>{transactionID}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListRender;