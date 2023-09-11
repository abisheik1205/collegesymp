import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginPage from "./LoginPage";
import { collection, getDocs } from "firebase/firestore";
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
                            <TableCell>Department Name</TableCell>
                            <TableCell>Transaction ID</TableCell>
                            <TableCell>College Name</TableCell>
                            <TableCell>Link</TableCell>
                            <TableCell>Mail-ID</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        docs?.map((item, key) => {
                            var name = item?._document?.data?.value?.mapValue?.fields?.Name?.stringValue;
                            var transactionID = item?._document?.data?.value?.mapValue?.fields?.transactionId?.stringValue;
                            var phonenumber = item?._document?.data?.value?.mapValue?.fields?.phoneNumber?.stringValue;
                            var Email = item?._document?.data?.value?.mapValue?.fields?.Email?.stringValue;
                            var SelectedEvents = item?._document?.data?.value?.mapValue?.fields?.SelectedEvents?.arrayValue?.values;
                            var photo = item?._document?.data?.value?.mapValue?.fields?.fileLink?.arrayValue?.values?.[0]?.stringValue;
                            var collegeName = item?._document?.data?.value?.mapValue?.fields?.collegeName?.stringValue;
                            var departmentname = item?._document?.data?.value?.mapValue?.fields?.departmentname?.stringValue;

                            console.log(photo);
                            
                            return <MainSearch key={key} selectedEvents={SelectedEvents} departmentname={departmentname} name={name} collegeName={collegeName} phoneNumber={phonenumber}  transactionID={transactionID} photo={photo} searchInput={searchInput} mailID={Email}/>
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