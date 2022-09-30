import fetch from "node-fetch";

export const getData = async () => {
  try {
    const data = await fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "633653cf51a80d792f103c6a",
      },
    });

    const jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

getData();