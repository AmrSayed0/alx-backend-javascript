/**
 * Handles the response from an API Promise, providing a default success response
 * and logging that a response was received.
 *
 * @param {Promise<any>} promise - The Promise to handle the response for.
 * @returns {Promise<Object>} A Promise that resolves with a default response object
 *                            and logs a message when the Promise settles.
 */
export default function handledResponseFromAPI(promise) {
  // Create a default success response object.
  const res = { status: 200, body: "success" };

  // Use Promise chaining to handle the response.
  return promise
    .then(() => res) // Resolve with the default response on success.
    .catch(() => new Error()) // Catch any errors and create a generic error object.
    .finally(() => {
      // Log a message when the Promise settles (regardless of success or failure).
      console.log("Got a response from the API");
    });
}
