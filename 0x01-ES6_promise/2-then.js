export default function handledResponseFromAPI(promise) {
  // Create a default success response object.
  const res = { status: 200, body: "success" };
  // Use Promise chaining to handle the response.
  return promise
    .then(() => res)
    .catch(() => new Error())
    .finally(() => {
      console.log("Got a response from the API");
    });
}
