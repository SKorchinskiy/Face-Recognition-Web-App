import "./Auth.css";
import "./Auth.css";

const SignUp = ({ formChangeHandler, changeAuthHandler }) => {
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
          className="bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center"
          type={"text"}
          placeholder="Username"
        />
      </div>
      <div className="m-2">
        <input
          className="bg-slate-50 p-2 rounded-lg shadow-2xl w-full text-center"
          type={"password"}
          placeholder="Password"
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          name="submit"
          className="border px-4 m-4 rounded-full border-white/50 w-2/3 h-10 mt-4 bg-slate-200/90 active:scale-95 duration-75 hover:scale-105"
          onClick={changeAuthHandler}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
