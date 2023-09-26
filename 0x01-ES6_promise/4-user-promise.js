/**
 * Creates a new user object with the provided first name and last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<Object>} A Promise that resolves with an object containing
 *                            the user's first name and last name.
 */
export default function signUpUser(firstName, lastName) {
  // Create an object that represents the user with the provided first name and last name.
  const userObject = {
    firstName,
    lastName,
  };

  // Resolve a Promise with the user object.
  return Promise.resolve(userObject);
}
