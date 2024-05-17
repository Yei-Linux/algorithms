/**
 * https://edabit.com/challenge/jRSST87NjECBzbwzL
 * @param {*} groceries
 */
function getTotalPrice(groceries) {
  return groceries.reduce((acc, { price, quantity }) => {
    const itemToAdd = +(price * quantity).toFixed(1);
    const result = +(acc + itemToAdd).toFixed(1);

    return result;
  }, 0);
}

module.exports = { getTotalPrice };
