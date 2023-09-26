/**
 * Returns a Promise that resolves to the string 'Resolved'.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Resolve the Promise with the string 'Resolved'.
    resolve("Resolved");
  });
}
