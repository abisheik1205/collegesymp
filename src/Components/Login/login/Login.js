import React,{useState} from "react";
import styles from "./login.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

function Login() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handlesubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill All Fields");
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/register");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>
          <center>Login</center>
          <b className={styles.error}>{errorMsg}</b>
        </h1>
        <h3>Email :</h3>
        <InputControl
          lable="Email"
          placeholder="Enter the email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        ></InputControl>
        <h3>Password :</h3>
        <InputControl
          lable="Password"
          placeholder="Enter the password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        ></InputControl>
        <div className={styles.footer} style={{marginTop: "15px"}}>
          <button type="button" disabled={submitButtonDisabled} onClick={handlesubmission}>Login</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">&nbsp;<span style={{color: 'blue'}}>signup</span></Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
