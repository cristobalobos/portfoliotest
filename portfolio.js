/**
 * Calculate the profit of the portfolio between two dates.
 * @param {number} startValue - The start value of the portfolio.
 * @param {number} endValue - The end value of the portfolio.
 * @returns {number} - The profit of the portfolio.
 */
function calculateProfit(startValue, endValue) {
  return endValue - startValue;
}

/**
 * Calculate the annualized return of the portfolio between two dates.
 * @param {number} startValue - The start value of the portfolio.
 * @param {number} endValue - The end value of the portfolio.
 * @param {number} days - The number of days between the start and end dates.
 * @returns {number} - The annualized return of the portfolio.
 */
function calculateAnnualizedReturn(startValue, endValue, days) {
  if (days === 0 || startValue === 0) return 0;

  const profit = calculateProfit(startValue, endValue);
  return (1 + profit / startValue) ** (365 / days) - 1;
}

/**
 * Updates the results based on the input values.
 */
function updateResults() {
  const appleStart =
    parseFloat(document.getElementById("appleStart").value) || 0;
  const appleEnd = parseFloat(document.getElementById("appleEnd").value) || 0;
  const googleStart =
    parseFloat(document.getElementById("googleStart").value) || 0;
  const googleEnd = parseFloat(document.getElementById("googleEnd").value) || 0;

  const appleQuantity = 10;
  const googleQuantity = 5;

  // Validate inputs and apply styles
  validateInput(appleStart, "appleStart");
  validateInput(appleEnd, "appleEnd");
  validateInput(googleStart, "googleStart");
  validateInput(googleEnd, "googleEnd");

  // Calculate portfolio start and end values
  const totalStartValue =
    appleStart * appleQuantity + googleStart * googleQuantity;
  const totalEndValue = appleEnd * appleQuantity + googleEnd * googleQuantity;

  // Calculate profit and annualized return
  const profit = calculateProfit(totalStartValue, totalEndValue);
  const daysBetween =
    (new Date("2024-01-01") - new Date("2023-01-01")) / (1000 * 60 * 60 * 24); // Example: 1 year
  const annualizedReturn = calculateAnnualizedReturn(
    totalStartValue,
    totalEndValue,
    daysBetween
  );

  // Display the results
  document.getElementById("profit").textContent = profit.toFixed(2);
  document.getElementById("annualizedReturn").textContent = `${(
    annualizedReturn * 100
  ).toFixed(2)}%`;
}

/**
 * Validate the input value and apply red border if invalid.
 * @param {number} value - The value to be validated.
 * @param {string} inputId - The input element's ID.
 */
function validateInput(value, inputId) {
  const inputElement = document.getElementById(inputId);
  if (value <= 0) {
    inputElement.classList.add("invalid");
  } else {
    inputElement.classList.remove("invalid");
  }
}

// Update results on input change
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateResults);
});

// Initial results update
updateResults();
