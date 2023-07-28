import { InitCartStateCart } from "./context";

export const getTotals = (cart: InitCartStateCart) => {
  let totalAmount = 0;
  let totalCost = 0;

  return { totalAmount, totalCost };
};
