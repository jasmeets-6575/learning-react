import { useState } from "react";

const toggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert =() => {
    if (showAlert){
        setShowAlert(false);
        return;
    }
    setShowAlert(true)
  }
  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger"> Alerting You....</div>;
};
export default toggleChallenge;
