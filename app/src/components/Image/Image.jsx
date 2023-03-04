import "./Image.css";

const Image = ({ url }) => {
  return (
    <img id="uploadedImg" src={url} alt={"pics"} className={"h-full w-full"} />
  );
};

export default Image;
