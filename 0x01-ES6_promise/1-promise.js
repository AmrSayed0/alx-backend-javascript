function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with a successful response object
      resolve({ status: 200, body: "Success" });
    } else {
      // Reject with an error message
      reject(new Error("The fake API is not working currently"));
    }
  });
}

export default getFullResponseFromAPI;
