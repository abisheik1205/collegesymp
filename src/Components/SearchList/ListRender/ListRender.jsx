import React from "react";
import "../Login.css";
import TableRow from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const ListRender = ({ key, name, phoneNumber, collegeName, transactionID, departmentname, photo, mailID, Eventname }) => {

    return(
        <TableRow
        key={key}
            className="ListRender"
        >
            <TableCell className="ListRenderParaName">{name}</TableCell>
            <TableCell className="ListRenderPara">{Eventname}</TableCell>
            <TableCell className="ListRenderPara">{phoneNumber}</TableCell>
            <TableCell className="ListRenderPara">{departmentname}</TableCell>
            <TableCell className="ListRenderPara">{transactionID}</TableCell>
            <TableCell className="ListRenderPara">{collegeName}</TableCell>
            <TableCell className="ListRenderPara"><a style={{color: 'blue', textDecoration: 'underline'}} rel="noreferrer" target="_blank" href={photo}>Photo</a></TableCell>
            <TableCell className="ListRenderPara">{mailID}</TableCell>
        </TableRow>
    )
}

export default ListRender;