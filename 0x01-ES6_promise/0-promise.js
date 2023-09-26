// This function returns a resolved Promise with the value 'Resolved'.
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve("Resolved");
  });
}
