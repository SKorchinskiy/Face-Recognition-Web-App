import "./Image.css";

const Image = ({ search, url }) => {
  return (
    <div className="h-[400px] w-auto m-10">
      {search ? (
        <img src={url} alt={"pics"} className={"h-full w-full"} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Image;
