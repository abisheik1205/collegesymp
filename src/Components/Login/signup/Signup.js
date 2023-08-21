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
        await updateProfile(user, { displayName: values.name });
        navigate("/");
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
          placeholder="enter your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        ></InputControl>
        <h3>Email :</h3>
        <InputControl
          lable="Email"
          placeholder="enter the email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        ></InputControl>
        <h3>Password :</h3>
        <InputControl
          lable="Password"
          placeholder="enter the password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        ></InputControl>
        <div className={styles.footer}>
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
              <Link to="/login">login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;