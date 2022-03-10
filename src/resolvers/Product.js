function priceWithDiscount(parent) {
  if (parent.discount) {
    return parent.price * (1 - parent.discount);
  }
  return parent.price;
}

module.exports = {
  priceWithDiscount,
};
