import "./Home.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Provide URL of the image for face detection"
          className="p-4 w-1/2 text-center rounded-full"
        />
        <button
          name="detect"
          className="border ml-4 p-4 h-20 w-28 rounded-full hover:scale-105 active:scale-95 duration-75 bg-slate-50 hover:bg-slate-100"
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default Home;
