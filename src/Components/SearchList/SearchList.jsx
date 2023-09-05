import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginPage from "./LoginPage";
import { Firestore, Query, QueryOrderByConstraint, collection, getDocs, orderBy, query } from "firebase/firestore";
import { firebasee } from '../../firebase';
import 'firebase/firestore';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MainSearch from "./MainSearch";

const SearchList = () => {

    const [loggedIn, setLoggedIn] = useState(true);
    const [docs, setDocs] = useState([]);

    const [pass, setPass] = useState("");
    const [searchInput, setSearchInput] = useState("");
    
    const handleClick = async () => {

        const query1 = collection(firebasee, "users");

            // const bb = query(query1, orderBy('timeStamp', 'desc'));

            const aa = await getDocs(query1); 

            setDocs(aa?.docs);
    }

    const handleChange = () => {
        setLoggedIn(false);
    }

    const handlePassword = (e) => {
        const pass = e.target.value;

        setPass(pass)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pass === "vivanta23") {
            handleChange();
        }else{
            alert("Incorrect Password")
        }
    }

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);
    }

    useEffect(() =>{
        if (!loggedIn) {
            handleClick();
        }
    }, [loggedIn])

    return(
        <div className="SearchList">
                {/* <tr><th>Name</th><th>Event Name</th><th>Phone Number</th><th>Photo Link</th><th>Mail-ID</th></tr> */}
            {
                loggedIn? <LoginPage handleSubmit={handleSubmit} handlePassword={handlePassword} />:<div className="ListInside"><div className="SearchInputDiv"><input onChange={handleSearchChange} className="SearchInput" placeholder="Search Event Name"/></div><TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name </TableCell>
                            <TableCell>Event Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Transaction ID</TableCell>
                            <TableCell>Link</TableCell>
                            <TableCell>Mail-ID</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        docs?.map((item, key) => {
                            console.log(item?._document?.data?.value?.mapValue?.fields?.name?.stringValue);
                            var name = item?._document?.data?.value?.mapValue?.fields?.Name?.stringValue;
                            var transactionID = item?._document?.data?.value?.mapValue?.fields?.transactionId?.stringValue;
                            var phonenumber = item?._document?.data?.value?.mapValue?.fields?.phoneNumber?.stringValue;
                            var Email = item?._document?.data?.value?.mapValue?.fields?.Email?.stringValue;
                            var phoneNumber = item?._document?.data?.value?.mapValue?.fields?.phoneNumber?.stringValue;
                            var SelectedEvents = item?._document?.data?.value?.mapValue?.fields?.SelectedEvents?.arrayValue?.values;
                            
                            return <MainSearch selectedEvents={SelectedEvents} name={name} phoneNumber={phonenumber}  transactionID={transactionID} photo={phoneNumber} searchInput={searchInput} mailID={Email}/>
                        })
                    }
                </Table>
        </TableContainer>
        </div>
            }
        </div>
    )
}

export default SearchList;