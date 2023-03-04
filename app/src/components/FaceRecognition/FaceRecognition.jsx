import { useEffect, useState } from "react";
import "./FaceRecognition.css";
import RequestOptions from "./requestOptions";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "ce8d314c48f64d6b88c2a73045b01b04",
});

const FaceRecognition = ({ url }) => {
  const [boxes, setBoxes] = useState();
  useEffect(() => {
    const requestOptions = RequestOptions(url);
    const fetchData = async () => {
      app.models
        .predict(
          {
            id: "face-detection",
            name: "face-detection",
            version: "6dc7e46bc9124c5c8824be4822abe105",
            type: "visual-detector",
          },
          url
        )
        // .then((response) => response.json())
        .then((result) => {
          const img = document.getElementById("uploadedImg");
          const height = Number(img.height);
          const width = Number(img.width);
          const data = result.outputs[0].data.regions.map((region) => {
            const { top_row, left_col, right_col, bottom_row } =
              region.region_info.bounding_box;
            return {
              top: top_row,
              bottom: bottom_row,
              right: right_col,
              left: left_col,
              height,
              width,
            };
          });
          setBoxes(data);
        })
        .catch((error) => console.log("error", error));
    };
    fetchData();
  }, []);
  return (
    <>
      {boxes === undefined ? (
        <></>
      ) : (
        boxes.map((box, index) => {
          return (
            <div
              key={index}
              className={`absolute border-blue-300 border-2`}
              style={{
                top: box.height * box.top,
                left: box.width * box.left,
                height: box.height * (box.bottom - box.top),
                width: box.width * (box.right - box.left),
              }}
            ></div>
          );
        })
      )}
    </>
  );
};

export default FaceRecognition;
