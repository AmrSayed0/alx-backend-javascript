/**
 * Returns a Promise that simulates a response from a fake API.
 *
 * @param {boolean} success - A boolean indicating whether the API call should succeed.
 * @returns {Promise<Object>} A Promise that resolves with a response object if successful,
 *                            or rejects with an error if unsuccessful.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If 'success' is true, simulate a successful API response.
      resolve({ status: 200, body: "Success" });
    } else {
      // If 'success' is false, simulate a failed API response with an error.
      reject(new Error("The fake API is not working currently"));
    }
  });
}
