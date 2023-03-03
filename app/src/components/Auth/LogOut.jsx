import "./Auth.css";

const LogOut = ({ changeAuthHandler }) => {
  return (
    <>
      <button
        name="login"
        className="text-center hover:pointer border border-white/50 px-4 m-1 h-12 hover:scale-105 duration-100 rounded-xl active:scale-95 bg-slate-300/60"
        onClick={changeAuthHandler}
      >
        LogOut
      </button>
    </>
  );
};

export default LogOut;
