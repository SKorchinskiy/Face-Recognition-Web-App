const PAT = "ce8d314c48f64d6b88c2a73045b01b04";
const USER_ID = "clarifai";
const APP_ID = "main";
const MODEL_ID = "general-image-recognition";
const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

const raw = JSON.stringify({
  user_app_id: {
    user_id: USER_ID,
    app_id: APP_ID,
  },
  inputs: [
    {
      data: {
        image: {
          url: IMAGE_URL,
        },
      },
    },
  ],
});

const requestOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Key " + PAT,
  },
  body: raw,
};

fetch(
  "https://api.clarifai.com/v2/models/" +
    MODEL_ID +
    "/versions/" +
    MODEL_VERSION_ID +
    "/outputs",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
