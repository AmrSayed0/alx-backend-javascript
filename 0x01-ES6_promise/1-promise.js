export default function getFullResponseFromAPI(success) {
  return new Promise((successCall, failureCall) => {
    if (success) {
      // Resolve with a successful response object
      successCall({ status: 200, body: "Success" });
    } else {
      // Reject with an error message
      failureCall(new Error("The fake API is not working currently"));
    }
  });
}
