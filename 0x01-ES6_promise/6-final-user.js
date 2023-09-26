import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

/**
 * Handles the profile signup process by signing up a user and uploading a photo.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The filename of the photo to be uploaded.
 * @returns {Promise<Array>} A Promise that resolves with an array of objects representing
 *                           the results of signing up the user and uploading the photo.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to concurrently sign up a user and upload a photo.
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const resultArray = [];

    // Iterate through the results of the Promises.
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        // If the Promise was fulfilled, push an object with status and value to the resultArray.
        resultArray.push({
          status: result.status,
          value: result.value,
        });
      } else {
        // If the Promise was rejected, push an object with status and error message to the resultArray.
        resultArray.push({
          status: result.status,
          value: `Error: ${result.reason.message}`,
        });
      }
    });

    return resultArray;
  });
}
