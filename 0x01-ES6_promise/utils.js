/**
 * Simulates the asynchronous process of uploading a user's photo.
 *
 * @returns {Promise<Object>} A Promise that resolves with a sample photo object.
 */
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: "photo-profile-1",
  });
}

/**
 * Simulates the asynchronous process of creating a user.
 *
 * @returns {Promise<Object>} A Promise that resolves with a sample user object.
 */
export function createUser() {
  return Promise.resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
}
