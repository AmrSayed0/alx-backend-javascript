/**
 * Executes a math function and guards against potential errors.
 *
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} An array containing the result of the math function or an error message
 *                  and a message indicating that the guardrail was processed.
 */
export default function guardrail(mathFunction) {
  // Create an empty array to store the results or error messages.
  const queue = [];

  try {
    // Try executing the provided math function.
    const result = mathFunction();

    // Push the result of the math function and a success message into the queue.
    queue.push(result, "Guardrail was processed");
  } catch (err) {
    // If an error occurs during math function execution, push an error message and
    // a processed message into the queue.
    queue.push(`Error: ${err.message}`, "Guardrail was processed");
  }

  // Return the queue containing the result or error message and the processed message.
  return queue;
}
