function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Asynchronous API call or any other logic here
    // Resolve with a message after a timeout
    setTimeout(() => {
      resolve("API response data"); // Resolve with your data
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
