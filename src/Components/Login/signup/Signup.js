import React, { useState } from "react";
import styles from "./signup.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import "./signup.module.css"

function Signup() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handlesubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill All Fields");
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        localStorage.setItem("email", values.email);
        
        // await updateProfile(user, { displayName: values.name });
        navigate("/register");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>
          <center>Sign Up</center>
        </h1>
        <b className={styles.error}>{errorMsg}</b>
        <h3>Name:</h3>
        <InputControl
          lable="Name"
          className="input"
          placeholder="Enter your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          ></InputControl>
        <h3>Email :</h3>
        <InputControl
          lable="Email"
          className="input"
          placeholder="Enter the email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          ></InputControl>
        <h3>Password :</h3>
        <InputControl
          lable="Password"
          className="input"
          placeholder="Enter the password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          ></InputControl>
        <div className={styles.footer} style={{marginTop: '15px'}}>
          <button
            type="button"
            onClick={handlesubmission}
            disabled={submitButtonDisabled}
          >
            Sign Up
          </button>
          <p> 
            Already have an account?{" "}
            <span>
              <Link to="/login">&nbsp;<span style={{color: 'blue'}}>login</span></Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
