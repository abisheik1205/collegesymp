import React from "react";
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

const RegisterFor4 = ({ handleNextPaper, handlePreviousPaper, selected, bio }) => {

    const [detailEntered, setDetailsEntered] = useState(false);
    const [transactionId, setTransactionID] = useState("");
    const [imageuploaded, setImageUploaded] = useState(false);

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
        setTransactionID(e)
        if (e.length > 8) {
            setDetailsEntered(true)
        }else{
            setDetailsEntered(false)
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

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

        try {
            await setDoc(docRef, data);
            var uploadingDatasHere = await uploadingData(e.target.files[0]);

            setImageUploaded(true);

            await updateDoc(docRef, {
                "fileLink": uploadingDatasHere,
            }).then(async () => {
                const message = `Hey ${bio.name}, you've registered for these events. ${selected}. Hope you'll have a great day at college.`;

                 await emailjs
                    .send('service_txm28o2', 'template_x0ifqcc', {
                      to_name: bio.name,
                      to_mail: bio.mailAdress,
                      message: message,
                    }, "sUppWr0eFNYXsNMHD")
                    .then((response) => {
                        console.log("Email Sent. Check it out!!");
                    })
                    .catch((error) => {
                      console.error('Error sending email:', error);
                    });
            });

        } catch (error) {
            console.log(error + "Bhai")
        }
    }

    return(
        <div className="RegisterFor4">
            <form>
                <h2 className="RegisterFor4Head">Upload the screenshot</h2>
                <p className="noteInRegisterFor4">What pic&#x3F;</p>
                <div className="RegisterFor4Browse">
                    <label for="file-upload" className="custom-file-upload">
                            <i class="fa fa-upload"></i>
                        Custom Upload
                    </label>
                    <input onChange={(e) => handlesubmit(e)} accept="image/*" id="file-upload" type="file" style={{display: 'none'}}/>            
                </div>
                <div className="RegisterFor4TransactionId">
                    <input className="RegisterFor4TransactionIdInp" placeholder="Transaction ID" type="text" onChange={(e) => handleTransactionID(e.target.value)}/>
                </div>
                <div className="registerPaperButton">
                    <button className="registerPaperButtonBTN" onClick={() => handlePreviousPaper()} type="submit">Back</button>
                    {
                        detailEntered && imageuploaded?<button onClick={() => handleNextPaper()} className="registerPaperButtonBTN" type="submit">Next</button>: <></>
                    }
                </div>
            </form>
        </div>
    )
}

export default RegisterFor4;