import "./Auth.css";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { useState } from "react";

const Auth = ({ changeAuthHandler }) => {
  const [formName, setFormName] = useState("login");
  const formChangeHandler = (event) => {
    const buttonName = event.target.name;
    if (buttonName !== formName) {
      setFormName(buttonName);
    }
  };
  return (
    <div className="flex justify-center items-center p-2 h-full">
      {formName === "login" ? (
        <LogIn
          formChangeHandler={formChangeHandler}
          changeAuthHandler={changeAuthHandler}
        />
      ) : (
        <SignUp
          formChangeHandler={formChangeHandler}
          changeAuthHandler={changeAuthHandler}
        />
      )}
    </div>
  );
};

export default Auth;
