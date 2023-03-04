import { useState } from "react";
import "./Auth.css";
import users from "./users";

const LogIn = ({ formChangeHandler, changeAuthHandler }) => {
  const onUsernameChangeHandler = (event) => {
    const value = event.target.value;
    setMessage("");
    setUsername(value);
  };

  const onPasswordChangeHandler = (event) => {
    const value = event.target.value;
    setMessage("");
    setPassword(value);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-slate-500/50 px-16 py-16 rounded-3xl shadow-2xl">
      <div className="flex justify-between mb-4">
        <button
          name="login"
          className="text-center hover:pointer border border-white/50 px-4 m-1 h-12 hover:scale-105 duration-100 rounded-xl active:scale-95 bg-slate-300/60"
        >
          Login
        </button>
        <button
          name="signup"
          className="text-center hover:pointer border border-white/50 px-4 m-1 h-12 hover:scale-105 duration-100 rounded-xl active:scale-95"
          onClick={formChangeHandler}
        >
          Signup
        </button>
      </div>
      <div className="m-2">
        <input
          className="bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center"
          type={"text"}
          placeholder="Username"
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>
      <div className="m-2">
        <input
          className="bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center"
          type={"password"}
          placeholder="Password"
          onChange={onPasswordChangeHandler}
          value={password}
        />
      </div>
      <div className="flex justify-center">
        <button
          name="submit"
          className="bg-slate-200/90 px-4 h-10 m-4 rounded-3xl w-2/3 shadow-2xl active:scale-95 duration-75 hover:scale-105"
          onClick={() => {
            const getUserPassword = users.get(username);
            if (getUserPassword && getUserPassword === password) {
              setPassword("");
              changeAuthHandler();
            } else {
              setPassword("");
              setMessage("Invalid credentials");
            }
          }}
        >
          Login
        </button>
      </div>
      <div className="text-center text-red-700 text-sm break-words w-full">
        {message}
      </div>
    </div>
  );
};

export default LogIn;
