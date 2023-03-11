import "./Auth.css";
import "./Auth.css";
import { useEffect, useState } from "react";

const SignUp = ({ formChangeHandler, changeAuthHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {}, [username]);
  useEffect(() => {}, [password]);

  const register = async (username, password) => {
    const response = await fetch("http://localhost:3001/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const user = await response.json();
    if (user) {
      const { id, entries } = user;
      changeAuthHandler(id, username, entries);
    }
  };

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
          className={`bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center`}
          type={"text"}
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className="m-2">
        <input
          className={`bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center`}
          type={"password"}
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          name="submit"
          className="border px-4 m-4 rounded-full border-white/50 w-2/3 h-10 mt-4 bg-slate-200/90 active:scale-95 duration-75 hover:scale-105"
          onClick={async () => {
            await register(username, password);
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
