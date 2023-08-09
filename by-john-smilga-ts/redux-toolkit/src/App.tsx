import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./store";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
