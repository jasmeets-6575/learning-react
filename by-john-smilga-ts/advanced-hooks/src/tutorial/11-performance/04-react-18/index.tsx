import React, {
  useState,
  useTransition,
  lazy,
  Suspense,
  ChangeEvent,
} from "react";
import SlowComponent from "./SlowComponent";

// Define the type for the SlowComponent props (if any)
type SlowComponentProps = {};

// Replace "any" with the appropriate type for the "items" state
const initItems: JSX.Element[] = [];

const LatestReact: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<JSX.Element[]>(initItems);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <section>
        <form className="form">
          <input
            type="text"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
        </form>
        <h4>Items Below</h4>
        {isPending ? (
          "Loading..."
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "2rem",
            }}
          >
            {items}
          </div>
        )}
        <button onClick={() => setShow(!show)} className="btn">
          toggle
        </button>
        {show && <SlowComponent />}
      </section>
    </Suspense>
  );
};

export default LatestReact;
