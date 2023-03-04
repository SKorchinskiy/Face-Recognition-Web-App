const RequestOptions = (url) => {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: "k4bsa4finptx",
      app_id: "face-recognition-web-app",
    },
    inputs: [
      {
        data: {
          image: {
            url,
          },
        },
      },
    ],
  });
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key a9be1c157ec34ca087261fc9a67c7920",
    },
    body: raw,
  };
};

export default RequestOptions;
