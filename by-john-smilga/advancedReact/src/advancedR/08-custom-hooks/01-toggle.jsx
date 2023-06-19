import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>Toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>Some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
