/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let result = 0;

  if (days >= 1) {
    result = 40 * days;
  }

  if (days >= 3 && days < 7) {
    result = result - 20;
  }

  if (days >= 7) {
    result = result - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
