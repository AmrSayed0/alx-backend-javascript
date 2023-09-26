import { uploadPhoto, createUser } from "./utils";

/**
 * Handles the profile signup process by uploading a photo and creating a user.
 *
 * @returns {Promise<void>} A Promise that handles the profile signup process and logs the result.
 */
export default function handleProfileSignup() {
  // Use Promise.all to concurrently upload a photo and create a user.
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // When both promises are resolved, log a message with the uploaded photo's body
      // and the user's first name and last name.
      console.log(
        `${values[0].body} ${values[1].firstName} ${values[1].lastName}`
      );
    })
    .catch(() => {
      // If there is any error during the signup process, log a message indicating
      // that the signup system is offline.
      console.log("Signup system offline");
    });
}
