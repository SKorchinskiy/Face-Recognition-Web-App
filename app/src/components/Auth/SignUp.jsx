import "./Auth.css";
import "./Auth.css";
import { useState } from "react";
import users from "./users";

const SignUp = ({ formChangeHandler, changeAuthHandler }) => {
  const onUsernameChangeHandler = (event) => {
    const value = event.target.value;
    if (value.length >= 6 && users.get(value) === undefined) {
      setValidUsername(true);
      setMessage("");
    } else if (value.length > 0) {
      if (value.length >= 6) {
        setMessage(`*The username has already been taken`);
      }
      setValidUsername(false);
    } else {
      setValidUsername();
    }
    setUsername(value);
  };

  const onPasswordChangeHandler = (event) => {
    const value = event.target.value;
    if (value.length >= 8) {
      setValidPassword(true);
    } else if (value.length > 0) {
      setValidPassword(false);
    } else {
      setValidPassword();
    }
    setPassword(value);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUsername, setValidUsername] = useState();
  const [validPassword, setValidPassword] = useState();
  const [message, setMessage] = useState("");

  return (
    <div className=" px-16 py-16 bg-slate-500/50 rounded-3xl shadow-2xl">
      <div className="flex justify-between mb-4">
        <button
          name="login"
          className="text-center hover:pointer border border-white/50 px-4 m-1 h-12 hover:scale-105 duration-100 rounded-xl active:scale-95"
          onClick={formChangeHandler}
        >
          Login
        </button>
        <button
          name="signup"
          className="text-center hover:pointer border border-white/50 px-4 m-1 h-12 hover:scale-105 duration-100 rounded-xl active:scale-95 bg-slate-300/60"
        >
          Signup
        </button>
      </div>
      <div className="m-2">
        <input
          className={`bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center border-b-${
            validUsername === undefined ? "0" : "4"
          } border-b-${validUsername ? "green-700" : "red-700"}`}
          type={"text"}
          placeholder="Username"
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>
      <div className="m-2">
        <input
          className={`bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center border-b-${
            validPassword === undefined ? "0" : "4"
          } border-b-${validPassword ? "green-700" : "red-700"}`}
          type={"password"}
          placeholder="Password"
          onChange={onPasswordChangeHandler}
          value={password}
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          name="submit"
          className="border px-4 m-4 rounded-full border-white/50 w-2/3 h-10 mt-4 bg-slate-200/90 active:scale-95 duration-75 hover:scale-105"
          onClick={() => {
            if (validPassword && validUsername) {
              users.set(username, password);
              changeAuthHandler();
            }
          }}
        >
          SignUp
        </button>
      </div>
      <div className="text-red-700 text-sm break-words w-48">{message}</div>
    </div>
  );
};

export default SignUp;
