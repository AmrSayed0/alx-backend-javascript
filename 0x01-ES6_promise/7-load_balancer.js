/**
 * Load balances between two download Promises, prioritizing the one that resolves first.
 *
 * @param {Promise<any>} chinaDownload - Promise for downloading from China server.
 * @param {Promise<any>} USDownload - Promise for downloading from US server.
 * @returns {Promise<any>} A Promise that resolves or rejects with the result of the first
 *                        Promise (either from China or the US) that settles.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to determine which download Promise resolves or rejects first.
  return Promise.race([chinaDownload, USDownload]);
}
