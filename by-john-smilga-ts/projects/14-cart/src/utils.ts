import { InitCartStateCart } from "./context";

export const getTotals = (cart: InitCartStateCart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
