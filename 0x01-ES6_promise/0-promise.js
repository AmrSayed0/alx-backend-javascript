/**
 * Returns a Promise that resolves to the string 'Resolved'.
 *
 * @returns a Promise that resolves with the string 'Resolved'.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Resolve the Promise with the string 'Resolved'.
    resolve("Resolved");
  });
}
