import "./Home.css";
import { useEffect, useState } from "react";
import Image from "../Image/Image";
import FaceRecognition from "../FaceRecognition/FaceRecognition";

const Home = ({ id, username, entries }) => {
  const onUrlChangeHandler = (event) => {
    const value = event.target.value;
    // ATTENTION! NEED TO ADD VALIDATION OF URL CORRECTNESS
    setSearch(false);
    setUrl(value);
  };

  const [count, setCount] = useState(entries);
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const increaseUserEntries = async () => {
      const data = await fetch("http://localhost:3001/image", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
        }),
      });
      const user = await data.json();
      setCount(user.entries);
    };
    if (search) {
      increaseUserEntries();
    }
  }, [search, id]);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="text-4xl mb-10">
        {username}, your entries scrore is <b>{count}</b>
      </div>
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
          }}
        >
          Detect
        </button>
      </div>
      <div className="relative h-[400px] w-auto m-10">
        {search ? (
          <>
            <Image search={search} url={url} />
            <FaceRecognition url={url} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
