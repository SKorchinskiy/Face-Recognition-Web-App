import "./Header.css";
import brain from "./brain.png";
import LogOut from "../../components/Auth/LogOut";

const Header = ({ auth, changeAuthHandler }) => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 p-4 absolute w-full opacity-80">
      <div className=" p-4 bg-zinc-300 rounded-lg animate-pulse hover:animate-none hover:opacity-75 duration-200 active:scale-75 hover:cursor-pointer">
        <img src={brain} alt="logo" className="h-8 w-auto" />
      </div>
      {auth ? (
        <div className="flex justify-between">
          <LogOut changeAuthHandler={changeAuthHandler} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
