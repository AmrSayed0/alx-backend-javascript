// 1-main.js
import getFullResponseFromAPI from "./1-promise";

getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
