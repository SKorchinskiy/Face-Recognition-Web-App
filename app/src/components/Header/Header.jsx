import "./Header.css";
import brain from "./brain.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 p-4 flex absolute w-full opacity-80">
      <div className=" p-4 bg-zinc-300 rounded-lg animate-pulse hover:animate-none hover:opacity-75 duration-200 active:scale-95 hover:cursor-pointer">
        <img src={brain} alt="logo" className="h-8 w-auto" />
      </div>
    </div>
  );
};

export default Header;
