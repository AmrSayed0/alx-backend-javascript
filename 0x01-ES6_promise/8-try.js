/**
 * Divides a numerator by a denominator, throwing an error if the denominator is zero.
 *
 * @param {number} numerator - The numerator for the division.
 * @param {number} denominator - The denominator for the division.
 * @returns {number} The result of dividing the numerator by the denominator.
 * @throws {Error} Throws an error if the denominator is zero.
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero.
  if (denominator === 0) {
    // If the denominator is zero, throw an error with a descriptive message.
    throw new Error("Cannot divide by 0");
  }

  // If the denominator is not zero, perform the division and return the result.
  return numerator / denominator;
}
