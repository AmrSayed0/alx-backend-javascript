/**
 * Simulates an error when attempting to upload a photo with a given filename.
 *
 * @param {string} filename - The filename of the photo being uploaded.
 * @returns {Promise<Error>} A Promise that rejects with an error message indicating
 *                            that the specified filename cannot be processed.
 */
export default function uploadPhoto(filename) {
  // Create and immediately reject a Promise with an error message indicating that
  // the provided filename cannot be processed.
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
