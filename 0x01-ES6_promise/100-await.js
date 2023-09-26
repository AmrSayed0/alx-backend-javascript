import { uploadPhoto, createUser } from "./utils";

/**
 * Asynchronously uploads a user's photo and creates a user.
 *
 * @returns {Promise<Object>} A Promise that resolves with an object containing
 *                            the uploaded photo and created user, or rejects with
 *                            an object containing null values if an error occurs.
 */
export default async function asyncUploadUser() {
  try {
    // Attempt to create a user asynchronously and store the result in 'user'.
    const user = await createUser();

    // Attempt to upload a photo asynchronously and store the result in 'photo'.
    const photo = await uploadPhoto();

    // Return an object with the uploaded photo and created user on success.
    return {
      photo,
      user,
    };
  } catch (error) {
    // If an error occurs during either operation, return an object with null values.
    return {
      photo: null,
      user: null,
    };
  }
}
