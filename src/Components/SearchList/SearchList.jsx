import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginPage from "./LoginPage";
import { Firestore, Query, QueryOrderByConstraint, collection, getDocs, orderBy, query } from "firebase/firestore";
import { firebasee } from '../../firebase';
import 'firebase/firestore';
import ListRender from "./ListRender/ListRender";

const SearchList = () => {

    const [loggedIn, setLoggedIn] = useState(true);
    const [docs, setDocs] = useState([]);
    
    const handleClick = async () => {

        const query1 = collection(firebasee, "users");

            // const bb = query(query1, orderBy('timeStamp', 'desc'));

            const aa = await getDocs(query1); 

            setDocs(aa?.docs);
            console.log(aa?.docs);
    }

    const handleChange = () => {
        setLoggedIn(true);
    }

    useEffect(() =>{
        // if (loggedIn) {
            
            handleClick();
        // }
    }, [loggedIn])

    return(
        <div className="SearchList">
            {
                loggedIn? <LoginPage />: <div>
                    {
                        docs.map((item, key) => {
                            console.log(item?._document?.data?.value?.mapValue?.fields?.name?.stringValue);
                            var name = item?._document?.data?.value?.mapValue?.fields?.name?.stringValue;
                            // var transactionID = item?._document?.data?.value?.mapValue?.fields?.transactionId.stringValue;
                            // var phonenumber = item?._document?.data?.value?.mapValue?.fields?.phoneNumber.stringValue;
                            // var collegeName = item?._document?.data?.value?.mapValue?.fields?.collegeName.stringValue;
                            // var SelectedEvents = item?._document?.data?.value?.mapValue?.fields?.SelectedEvents;
                            // var fileLink = item?._document?.data?.value?.mapValue?.fields?.fileLink.stringValue;

                            return <ListRender name={name} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default SearchList;