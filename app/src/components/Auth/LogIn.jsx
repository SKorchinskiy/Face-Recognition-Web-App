import { useState } from "react";
import "./Auth.css";

const LogIn = ({ formChangeHandler, changeAuthHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async (username, password) => {
    console.log(username, password);
    const data = await fetch("http://localhost:3001/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const user = await data.json();
    console.log(user);
    if (user) {
      const { id, username, entries } = user;
      changeAuthHandler(id, username, entries);
    }
  };

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
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className="m-2">
        <input
          className="bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center"
          type={"password"}
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-center">
        <button
          name="submit"
          className="bg-slate-200/90 px-4 h-10 m-4 rounded-3xl w-2/3 shadow-2xl active:scale-95 duration-75 hover:scale-105"
          onClick={async () => {
            await login(username, password);
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
