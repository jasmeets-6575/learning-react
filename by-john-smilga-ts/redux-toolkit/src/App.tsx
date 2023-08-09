import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./store";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
