import React, { useEffect } from "react";
import "./RegisterFor4.css";
import { useState } from "react";
import { storage, firebasee } from "../../../../firebase";
import { CollectionReference, addDoc, collection, getDocs, updateDoc, deleteDoc, Firestore } from "firebase/firestore";
import { doc, setDoc, serverTimestamp  } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable, updateMetadata } from "firebase/storage";
import firebase from 'firebase/compat/app';
import emailjs from 'emailjs-com';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from "@mui/material";
import imginhelp from "../../../../assets/for help in screenshot.png";

const RegisterFor4 = ({ handleNextPaper, handlePreviousPaper, selected, bio }) => {

    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionID] = useState("");
    const [photo, setPhoto] = useState(null);
    const [imageuploaded, setImageUploaded] = useState(false);

    const [dialog, setDialog] = useState(true);

    const [uploadedLink, setuploadedLink] = useState([])

    const uploadingData = async (e) => {
        var downloadURLS = [];
        const storageRef = ref(storage, `files/${e.name}`);
        console.log("UPLOADING");

        await uploadBytesResumable(storageRef, e).then( async (snapshot) => {
            await getDownloadURL(snapshot.ref).then(url => {
                console.log(url);
                downloadURLS.push(url);
            });
        });

        return downloadURLS;
    }

    const handleTransactionID = (e) => {
        setTransactionID(e.target.value)
    }

    const handleChangePhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const handlesubmit = async (e) => {

        e.preventDefault();
        setLoading(true);
        const collectionRef = collection(firebasee, `users`);

        let data = {
            SelectedEvents: selected,
            Name: bio.name,
            Email: bio.mailAdress,
            phoneNumber: bio.phoneNumber,
            collegeName: bio.collegeName,
            departmentname: bio.departmentName,
            transactionId: transactionId,
            timeStamp: serverTimestamp(),
            fileLink: [],
        };

        const docRef = doc(collectionRef);

        console.log("came Herre")

        setuploadedLink(uploadingDatasHere)

        try {
            await setDoc(docRef, data);
            var uploadingDatasHere = await uploadingData(photo);

            setImageUploaded(true);

            await updateDoc(docRef, {
                "fileLink": uploadingDatasHere,
                transactionId: transactionId
            }).then(async () => {
                const message = `Hey ${bio.name}, you've registered for these events. ${selected}. Hope you'll have a great day at college.`;

                 await emailjs
                    .send('service_txm28o2', 'template_x0ifqcc', {
                      to_name: bio.name,
                      to_mail: bio.mailAdress,
                      message: message,
                    }, "sUppWr0eFNYXsNMHD")
                    .then((response) => {
                        handleNextPaper();
                        console.log("Email Sent. Check it out!!");
                    })
                    .catch((error) => {
                      console.error('Error sending email:', error);
                    });
            });
            setLoading(false)
        } catch (error) {
            console.log(error + "Bhai")
        }
    }

    return(
        <div className="RegisterFor4">
            <form>
                <h2 className="RegisterFor4Head">Upload the screenshot</h2>
                <p onClick={() => setDialog(true)} className="noteInRegisterFor4">What pic&#x3F;</p>
                <Dialog open={dialog}>
                    {/* <p className="dialogBoxHeadX">X</p> */}
                    <DialogTitle style={{textAlign: 'center'}} className="dialogBoxHeadInstruc">Proof of transaction</DialogTitle>
                    <div className="imgInHelp">
                        <img className="imgInHelpImg" src={imginhelp}/>
                    </div>
                    {/* <p className="dialogBoxHeadInstrucRule"><span className="dialogBoxHeadInstrucRuleBold"></span>5. College sends a confirmation email to the registered email ID.</p> */}
                    <br />
                    <button onClick={() => setDialog(false)} className="DialogBtn">Understood</button>
                    <br />
                    <br />
                </Dialog>
                <div className="RegisterFor4Browse">
                    {
                        photo? <h2 className="uploadHead">Done!!</h2>: <><label for="file-upload" className="custom-file-upload">
                        <i class="fa fa-upload"></i>
                    Custom Upload
                </label>
                <input accept="image/*" id="file-upload" type="file" style={{display: 'none'}} onChange={(e) => handleChangePhoto(e)}/></>
                    } </div>
                <div className="RegisterFor4TransactionId">
                    <input className="RegisterFor4TransactionIdInp" placeholder="Transaction ID" type="text" onChange={handleTransactionID}/>
                </div>
                <div className="registerPaperButton">
                    <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                        {
                            photo && transactionId.length > 8? loading? <button className="registerPaperButtonBTN" type="submit">Uploading</button> :<button onClick={(e) => handlesubmit(e)} className="registerPaperButtonBTN" type="submit">Next</button>: <></>
                       } 
                </div>
            </form>
        </div>
    )
}

export default RegisterFor4;