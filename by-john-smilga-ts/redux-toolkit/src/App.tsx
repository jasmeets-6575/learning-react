import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./store";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { useDispatch } from "react-redux";

function App() {
  const { cartItems, isLoading } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const dispatchThunk = useDispatch<any>();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatchThunk(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
