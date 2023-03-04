import "./Home.css";
import { useState } from "react";
import Image from "../Image/Image";

const Home = () => {
  const onUrlChangeHandler = (event) => {
    const value = event.target.value;
    // ATTENTION! NEED TO ADD VALIDATION OF URL CORRECTNESS
    setSearch(false);
    setUrl(value);
  };

  const [url, setUrl] = useState("");
  const [search, setSearch] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Provide URL of the image for face detection"
          className="p-4 w-1/2 text-center rounded-full"
          onChange={onUrlChangeHandler}
          value={url}
        />
        <button
          name="detect"
          className="border ml-4 p-4 h-20 w-28 rounded-full hover:scale-105 active:scale-95 duration-75 bg-slate-50 hover:bg-slate-100"
          onClick={() => {
            setSearch(true);
            console.log(search, url);
          }}
        >
          Detect
        </button>
      </div>
      <Image search={search} url={url} />
    </div>
  );
};

export default Home;
